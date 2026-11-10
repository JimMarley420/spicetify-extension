// Rebuilds dist/ on same-repository pull requests and commits it back to the
// pull request branch. Fork pull requests only receive the build artifact.
const owner = Deno.env.get("CIRCLE_PROJECT_USERNAME");
const repo = Deno.env.get("CIRCLE_PROJECT_REPONAME");
const token = Deno.env.get("GITHUB_TOKEN");
const pullRequest = Deno.env.get("CIRCLE_PULL_REQUEST");

if (!owner || !repo) {
  throw new Error("CircleCI project owner and repository are required.");
}
if (!pullRequest) {
  console.log("Not a pull request; dist is available as a build artifact.");
  Deno.exit(0);
}
if (!token) {
  console.log("GITHUB_TOKEN unavailable; keeping dist as an artifact only.");
  Deno.exit(0);
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
  if (!response.ok) {
    throw new Error(`GitHub API ${path} returned ${response.status}: ${text}`);
  }
  return text ? JSON.parse(text) : null;
};

const number = pullRequest.split("/").pop();
const pr = await request(`/pulls/${number}`);
if (pr.head.repo?.full_name !== `${owner}/${repo}`) {
  console.log(
    "Pull request comes from a fork; dist is available as an artifact only.",
  );
  Deno.exit(0);
}

const changedPaths: string[] = [];
for (let page = 1;; page++) {
  const response = await fetch(
    `${api}/pulls/${number}/files?per_page=100&page=${page}`,
    { headers },
  );
  if (!response.ok) {
    throw new Error(
      `GitHub PR files API returned ${response.status}: ${await response
        .text()}`,
    );
  }
  const pageFiles = await response.json();
  changedPaths.push(
    ...pageFiles.map((file: { filename: string }) => file.filename),
  );
  if (pageFiles.length < 100) break;
}
const buildInputsChanged = changedPaths.some((path) =>
  path.startsWith("extensions/") ||
  path.startsWith("shared/") ||
  [
    "tasks/pluginInlineCSS.ts",
    "tasks/reactCompilerPlugin.ts",
    "tasks/spicetifyShimsPlugin.ts",
    "deno.lock",
  ].includes(path)
);
if (!buildInputsChanged) {
  console.log("No extension or build inputs changed; dist remains untouched.");
  Deno.exit(0);
}
if (pr.head.sha !== Deno.env.get("CIRCLE_SHA1")) {
  console.log(
    "Pull request changed during this build; dist is available as an artifact only.",
  );
  Deno.exit(0);
}

const branch = pr.head.ref as string;
const ref = await request(`/git/ref/heads/${branch}`);
if (ref.object.sha !== pr.head.sha) {
  console.log(
    "Pull request branch moved during this build; dist is available as an artifact only.",
  );
  Deno.exit(0);
}

const commit = await request(`/git/commits/${pr.head.sha}`);
const tree = await request(`/git/trees/${commit.tree.sha}?recursive=1`);
if (tree.truncated) {
  throw new Error("Repository tree is too large to safely update dist.");
}

const files: { path: string; bytes: Uint8Array }[] = [];
const walk = async (directory: string, prefix: string) => {
  for await (const entry of Deno.readDir(directory)) {
    const localPath = `${directory}/${entry.name}`;
    const repoPath = `${prefix}/${entry.name}`;
    if (entry.isDirectory) await walk(localPath, repoPath);
    else if (entry.isFile) {
      files.push({ path: repoPath, bytes: await Deno.readFile(localPath) });
    }
  }
};
await walk("dist", "dist");
const desiredPaths = new Set(files.map((file) => file.path));
const entries: Record<string, unknown>[] = [];
const encodeBase64 = (bytes: Uint8Array) => {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary);
};

for (const file of files) {
  const blob = await request("/git/blobs", {
    method: "POST",
    body: JSON.stringify({
      content: encodeBase64(file.bytes),
      encoding: "base64",
    }),
  });
  entries.push({
    path: file.path,
    mode: "100644",
    type: "blob",
    sha: blob.sha,
  });
}
for (const item of tree.tree) {
  if (
    item.type === "blob" && item.path.startsWith("dist/") &&
    !desiredPaths.has(item.path)
  ) {
    entries.push({
      path: item.path,
      mode: item.mode,
      type: "blob",
      sha: null,
    });
  }
}

const newTree = await request("/git/trees", {
  method: "POST",
  body: JSON.stringify({ base_tree: commit.tree.sha, tree: entries }),
});
if (newTree.sha === commit.tree.sha) {
  console.log("dist is already up to date.");
  Deno.exit(0);
}
const newCommit = await request("/git/commits", {
  method: "POST",
  body: JSON.stringify({
    message: "chore: update dist",
    tree: newTree.sha,
    parents: [pr.head.sha],
  }),
});
await request(`/git/refs/heads/${branch}`, {
  method: "PATCH",
  body: JSON.stringify({ sha: newCommit.sha, force: false }),
});
console.log(`Updated dist on ${branch}; CircleCI will check the generated commit.`);
