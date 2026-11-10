// Runs only when CI/CD files change: verifies the tasks referenced by the
// CircleCI config exist and typechecks the project.
const owner = Deno.env.get("CIRCLE_PROJECT_USERNAME");
const repo = Deno.env.get("CIRCLE_PROJECT_REPONAME");
const pullRequest = Deno.env.get("CIRCLE_PULL_REQUEST");

if (!owner || !repo) {
  throw new Error("CircleCI project owner and repository are required.");
}

const baseUrl = `https://api.github.com/repos/${owner}/${repo}`;
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "artist-search-circleci",
};
const files: string[] = [];

if (pullRequest) {
  const number = pullRequest.split("/").pop();
  for (let page = 1;; page++) {
    const response = await fetch(
      `${baseUrl}/pulls/${number}/files?per_page=100&page=${page}`,
      { headers },
    );
    if (!response.ok) {
      throw new Error(
        `GitHub PR files API returned ${response.status}: ${await response
          .text()}`,
      );
    }
    const pageFiles = await response.json();
    files.push(
      ...pageFiles.map((file: { filename: string }) => file.filename),
    );
    if (pageFiles.length < 100) break;
  }
} else {
  const sha = Deno.env.get("CIRCLE_SHA1");
  if (!sha) throw new Error("CIRCLE_SHA1 is required outside pull requests.");
  const response = await fetch(`${baseUrl}/commits/${sha}`, { headers });
  if (!response.ok) {
    throw new Error(
      `GitHub commit API returned ${response.status}: ${await response.text()}`,
    );
  }
  const commit = await response.json();
  files.push(...commit.files.map((file: { filename: string }) => file.filename));
}

const relevant = files.some((path) =>
  /^\.circleci\//.test(path) || /^tasks\//.test(path) || path === "deno.json"
);
if (!relevant) {
  console.log("No CI/CD files changed; skipping focused checks.");
  Deno.exit(0);
}

const config = JSON.parse(await Deno.readTextFile("deno.json"));
const required = [
  "lint",
  "typecheck",
  "test",
  "theme:check",
  "theme:lint",
  "manifest:check",
  "build",
  "release",
];
const missing = required.filter((task) => !config.tasks?.[task]);
if (missing.length) {
  throw new Error(`Missing Deno tasks: ${missing.join(", ")}`);
}
console.log("CI/CD files changed; all referenced tasks exist.");

const child = new Deno.Command("deno", {
  args: ["task", "typecheck"],
  stdout: "inherit",
  stderr: "inherit",
}).spawn();
const result = await child.status;
if (!result.success) {
  throw new Error(`Deno typecheck failed with exit code ${result.code}`);
}
