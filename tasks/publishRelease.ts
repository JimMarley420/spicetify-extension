type CommitData = {
  commit: { message: string; tree: { sha: string } };
  parents: { sha: string }[];
};

type ReleaseData = {
  id: number;
  upload_url: string;
  assets: { name: string }[];
};

const owner = Deno.env.get("CIRCLE_PROJECT_USERNAME");
const repo = Deno.env.get("CIRCLE_PROJECT_REPONAME");
const token = Deno.env.get("GITHUB_TOKEN");
const sha = Deno.env.get("CIRCLE_SHA1");

if (!owner || !repo || !sha) {
  throw new Error(
    "CircleCI project, repository, and commit variables are required.",
  );
}
if (!token) {
  throw new Error("GITHUB_TOKEN is required to publish a GitHub Release.");
}

const api = `https://api.github.com/repos/${owner}/${repo}`;
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json",
};

const request = async (path: string, init?: RequestInit) => {
  const response = await fetch(`${api}${path}`, {
    ...init,
    headers: { ...headers, ...init?.headers },
  });
  const text = await response.text();
  return { response, data: text ? JSON.parse(text) : null };
};

const getCommit = async (ref: string): Promise<CommitData> => {
  const { response, data } = await request(
    `/commits/${encodeURIComponent(ref)}`,
  );
  if (!response.ok) {
    throw new Error(
      `GitHub commit lookup for ${ref} returned ${response.status}: ${
        JSON.stringify(data)
      }`,
    );
  }
  return data as CommitData;
};

const tags: string[] = [];
for (let page = 1;; page++) {
  const { response, data } = await request(`/tags?per_page=100&page=${page}`);
  if (!response.ok) {
    throw new Error(
      `GitHub tags API returned ${response.status}: ${JSON.stringify(data)}`,
    );
  }
  tags.push(...data.map((item: { name: string }) => item.name));
  if (data.length < 100) break;
}

const semanticTags = tags.filter((tag) => /^v\d+\.\d+\.\d+$/.test(tag)).sort(
  (left, right) => {
    const a = left.slice(1).split(".").map(Number);
    const b = right.slice(1).split(".").map(Number);
    return b[0] - a[0] || b[1] - a[1] || b[2] - a[2];
  },
);
const latestTag = semanticTags[0] ?? "";

let commits: { message: string }[] = [];
if (latestTag) {
  const comparison = await request(`/compare/${latestTag}...${sha}`);
  if (comparison.response.ok) {
    commits = comparison.data.commits.map((
      item: { commit: { message: string } },
    ) => ({
      message: item.commit.message,
    }));
  } else if (
    comparison.response.status === 404 &&
    comparison.data?.message?.includes("No common ancestor")
  ) {
    console.log(
      `No common commit ancestor with ${latestTag}; comparing release trees along master.`,
    );
    const [tagCommit, currentCommit] = await Promise.all([
      getCommit(latestTag),
      getCommit(sha),
    ]);
    const releaseTree = tagCommit.commit.tree.sha;
    let currentSha = sha;
    let currentCommitData = currentCommit;
    const seen = new Set<string>();

    while (currentSha && !seen.has(currentSha)) {
      seen.add(currentSha);
      if (currentCommitData.commit.tree.sha === releaseTree) break;
      commits.push({ message: currentCommitData.commit.message });
      currentSha = currentCommitData.parents[0]?.sha ?? "";
      if (currentSha) currentCommitData = await getCommit(currentSha);
    }

    if (
      !currentSha || !seen.has(currentSha) ||
      currentCommitData.commit.tree.sha !== releaseTree
    ) {
      throw new Error(
        `GitHub cannot compare ${latestTag} with ${sha}, and no matching release tree was found on master.`,
      );
    }
    commits.reverse();
  } else {
    throw new Error(
      `GitHub compare API returned ${comparison.response.status}: ${
        JSON.stringify(comparison.data)
      }`,
    );
  }
} else {
  const current = await getCommit(sha);
  commits = [{ message: current.commit.message }];
}

const listDistFiles = async () => {
  const files: { path: string; name: string; bytes: Uint8Array }[] = [];
  const walk = async (directory: string, prefix: string): Promise<void> => {
    for await (const entry of Deno.readDir(directory)) {
      const localPath = `${directory}/${entry.name}`;
      const repoPath = `${prefix}/${entry.name}`;
      if (entry.isDirectory) await walk(localPath, repoPath);
      else if (entry.isFile) {
        files.push({
          path: repoPath,
          name: repoPath.slice("dist/".length).replaceAll("/", "-"),
          bytes: await Deno.readFile(localPath),
        });
      }
    }
  };
  await walk("dist", "dist");
  files.sort((left, right) => left.path.localeCompare(right.path));
  return files;
};

const uploadDistAssets = async (release: ReleaseData): Promise<void> => {
  const files = await listDistFiles();
  if (files.length === 0) {
    throw new Error(
      "The dist directory is empty; refusing to publish an empty release.",
    );
  }

  const existing = new Set(release.assets.map((asset) => asset.name));
  const uploadUrl = release.upload_url.replace(/\{\?name,label\}$/, "");
  for (const file of files) {
    if (existing.has(file.name)) {
      console.log(`Release asset already exists: ${file.name}`);
      continue;
    }

    const url = new URL(uploadUrl);
    url.searchParams.set("name", file.name);
    const assetBody = new ArrayBuffer(file.bytes.byteLength);
    new Uint8Array(assetBody).set(file.bytes);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": file.name.endsWith(".mjs")
          ? "application/javascript"
          : "application/octet-stream",
      },
      body: assetBody,
    });
    const text = await response.text();
    if (!response.ok) {
      throw new Error(
        `Uploading ${file.path} failed (${response.status}): ${text}`,
      );
    }
    existing.add(file.name);
    console.log(`Uploaded release asset: ${file.name}`);
  }
};

const getOrCreateRelease = async (
  tag: string,
  body: string,
): Promise<ReleaseData> => {
  const existing = await request(`/releases/tags/${tag}`);
  if (existing.response.ok) return existing.data as ReleaseData;
  if (existing.response.status !== 404) {
    throw new Error(
      `GitHub release lookup returned ${existing.response.status}: ${
        JSON.stringify(existing.data)
      }`,
    );
  }

  const created = await request("/releases", {
    method: "POST",
    body: JSON.stringify({
      tag_name: tag,
      name: tag,
      body,
      draft: false,
      prerelease: false,
    }),
  });
  if (!created.response.ok) {
    throw new Error(
      `GitHub release creation failed (${created.response.status}): ${
        JSON.stringify(created.data)
      }`,
    );
  }
  return created.data as ReleaseData;
};

const getDistTreeSha = async (commit: CommitData): Promise<string | null> => {
  const { response, data } = await request(
    `/git/trees/${commit.commit.tree.sha}`,
  );
  if (!response.ok) {
    throw new Error(
      `GitHub tree lookup returned ${response.status}: ${JSON.stringify(data)}`,
    );
  }
  const dist = data.tree.find((entry: { path: string; type: string }) =>
    entry.path === "dist" && entry.type === "tree"
  );
  return dist?.sha ?? null;
};

if (latestTag && commits.length > 0) {
  const [tagCommit, currentCommit] = await Promise.all([
    getCommit(latestTag),
    getCommit(sha),
  ]);
  const [releasedDist, currentDist] = await Promise.all([
    getDistTreeSha(tagCommit),
    getDistTreeSha(currentCommit),
  ]);
  if (releasedDist && releasedDist === currentDist) {
    const previousRelease = await request(`/releases/tags/${latestTag}`);
    if (previousRelease.response.ok) {
      console.log(
        `dist/ is unchanged since ${latestTag}; filling any missing assets on that release.`,
      );
      await uploadDistAssets(previousRelease.data as ReleaseData);
    } else if (previousRelease.response.status !== 404) {
      throw new Error(
        `GitHub release lookup returned ${previousRelease.response.status}: ${JSON.stringify(previousRelease.data)}`,
      );
    }
  }
}

if (commits.length === 0) {
  console.log(
    `No commits since ${latestTag}; ensuring its release contains all dist assets.`,
  );
  const release = await getOrCreateRelease(latestTag, "");
  await uploadDistAssets(release);
  Deno.exit(0);
}

const breaking = commits.some(({ message }) => {
  const [subject = "", ...body] = message.split("\n");
  return /^[a-z]+(?:\([^)]*\))?!:/.test(subject) ||
    body.some((line) => /^BREAKING CHANGE:/.test(line.trim()));
});
const feature = commits.some(({ message }) =>
  /^feat(?:\([^)]*\))?:/.test(message.split("\n")[0])
);
const bump = breaking ? "major" : feature ? "minor" : "patch";
let [major, minor, patch] = latestTag
  ? latestTag.slice(1).split(".").map(Number)
  : [0, 0, 0];
if (bump === "major") [major, minor, patch] = [major + 1, 0, 0];
else if (bump === "minor") [major, minor, patch] = [major, minor + 1, 0];
else patch++;
const tag = `v${major}.${minor}.${patch}`;

const tagRef = await request(`/git/ref/tags/${tag}`);
if (tagRef.response.status === 404) {
  const createdRef = await request("/git/refs", {
    method: "POST",
    body: JSON.stringify({ ref: `refs/tags/${tag}`, sha }),
  });
  if (!createdRef.response.ok && createdRef.response.status !== 422) {
    throw new Error(
      `GitHub tag creation failed (${createdRef.response.status}): ${
        JSON.stringify(createdRef.data)
      }`,
    );
  }
} else if (!tagRef.response.ok) {
  throw new Error(
    `GitHub tag lookup returned ${tagRef.response.status}: ${
      JSON.stringify(tagRef.data)
    }`,
  );
}

const body = commits.slice(0, 80).map(({ message }) =>
  `* ${message.split("\n")[0]}`
).join("\n");
const release = await getOrCreateRelease(tag, body);
await uploadDistAssets(release);
console.log(`Published ${tag} (${bump} bump) with all dist assets.`);
