const owner = Deno.env.get("CIRCLE_PROJECT_USERNAME");
const repository = Deno.env.get("CIRCLE_PROJECT_REPONAME");
const token = Deno.env.get("GITHUB_TOKEN");
const baseBranch = "master";
const updateBranch = "deps/deno-update";

if (!owner || !repository) {
  throw new Error("CircleCI project owner and repository are required.");
}
if (!token) {
  throw new Error(
    "GITHUB_TOKEN is required to create the dependency update pull request.",
  );
}

const api = `https://api.github.com/repos/${owner}/${repository}`;
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json",
  "User-Agent": "spicetify-circleci-dependency-updater",
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${api}${path}`, {
    ...init,
    headers: { ...headers, ...init?.headers },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(
      `GitHub API ${path} returned ${response.status}: ${JSON.stringify(data)}`,
    );
  }
  return data as T;
}

async function findOpenPullRequest(): Promise<
  { number: number; html_url: string } | undefined
> {
  const query = new URLSearchParams({
    state: "open",
    head: `${owner}:${updateBranch}`,
    per_page: "1",
  });
  const pullRequests = await request<{ number: number; html_url: string }[]>(
    `/pulls?${query}`,
  );
  return pullRequests[0];
}

const existingPullRequest = await findOpenPullRequest();
if (existingPullRequest) {
  console.log(
    `Dependency update PR #${existingPullRequest.number} is already open; skipping duplicate.`,
  );
  Deno.exit(0);
}

const originalFiles = new Map<string, Uint8Array>();
for (const path of ["deno.json", "deno.lock"]) {
  originalFiles.set(path, await Deno.readFile(path));
}

const outdated = new Deno.Command("deno", {
  args: ["outdated", "--update"],
  stdout: "inherit",
  stderr: "inherit",
});
const outdatedProcess = outdated.spawn();
const outdatedResult = await outdatedProcess.status;
if (!outdatedResult.success) {
  throw new Error(
    `deno outdated --update exited with code ${outdatedResult.code}.`,
  );
}

const changedFiles: { path: string; bytes: Uint8Array }[] = [];
for (const [path, original] of originalFiles) {
  const updated = await Deno.readFile(path);
  if (
    original.length !== updated.length ||
    original.some((byte, index) => byte !== updated[index])
  ) {
    changedFiles.push({ path, bytes: updated });
  }
}
if (changedFiles.length === 0) {
  console.log("No Deno dependency updates are available.");
  Deno.exit(0);
}

const typecheck = new Deno.Command("deno", {
  args: ["task", "typecheck"],
  stdout: "inherit",
  stderr: "inherit",
});
const typecheckResult = await typecheck.spawn().status;
if (!typecheckResult.success) {
  throw new Error(
    `Dependency updates failed typecheck with exit code ${typecheckResult.code}.`,
  );
}

const baseRef = await request<{ object: { sha: string } }>(
  `/git/ref/heads/${baseBranch}`,
);
const baseCommit = await request<{ tree: { sha: string } }>(
  `/git/commits/${baseRef.object.sha}`,
);
const encodeBase64 = (bytes: Uint8Array): string => {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary);
};

const treeEntries = [];
for (const file of changedFiles) {
  const blob = await request<{ sha: string }>("/git/blobs", {
    method: "POST",
    body: JSON.stringify({
      content: encodeBase64(file.bytes),
      encoding: "base64",
    }),
  });
  treeEntries.push({
    path: file.path,
    mode: "100644",
    type: "blob",
    sha: blob.sha,
  });
}
const tree = await request<{ sha: string }>("/git/trees", {
  method: "POST",
  body: JSON.stringify({ base_tree: baseCommit.tree.sha, tree: treeEntries }),
});
const commit = await request<{ sha: string }>("/git/commits", {
  method: "POST",
  body: JSON.stringify({
    message: "chore(deps): update Deno dependencies",
    tree: tree.sha,
    parents: [baseRef.object.sha],
  }),
});

const branchRef = await fetch(`${api}/git/ref/heads/${updateBranch}`, {
  headers,
});
if (branchRef.status === 404) {
  await request("/git/refs", {
    method: "POST",
    body: JSON.stringify({
      ref: `refs/heads/${updateBranch}`,
      sha: commit.sha,
    }),
  });
} else if (branchRef.ok) {
  await request(`/git/refs/heads/${updateBranch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha, force: true }),
  });
} else {
  throw new Error(`GitHub branch lookup returned ${branchRef.status}.`);
}

try {
  const pullRequest = await request<{ number: number; html_url: string }>(
    "/pulls",
    {
      method: "POST",
      body: JSON.stringify({
        title: "chore(deps): update Deno dependencies",
        head: updateBranch,
        base: baseBranch,
        body:
          "Automated Deno dependency update. CircleCI typechecks this update before opening the pull request; the pull request CI runs the full validation suite.",
      }),
    },
  );
  console.log(
    `Opened dependency update PR #${pullRequest.number}: ${pullRequest.html_url}`,
  );
} catch (error) {
  const racedPullRequest = await findOpenPullRequest();
  if (racedPullRequest) {
    console.log(
      `Dependency update PR #${racedPullRequest.number} was opened by another run; skipping duplicate.`,
    );
    Deno.exit(0);
  }
  throw error;
}
