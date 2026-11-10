// Validates pull request commit subjects against the Conventional Commits
// format used by the automated release version bump. It reads the commits
// from the GitHub API so it works in images that do not ship a git binary.
const allowedTypes = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];
const subjectPattern = new RegExp(
  `^(${allowedTypes.join("|")})(\\([^)]+\\))?!?: .+`,
);

const owner = Deno.env.get("CIRCLE_PROJECT_USERNAME");
const repo = Deno.env.get("CIRCLE_PROJECT_REPONAME");
const pullRequest = Deno.env.get("CIRCLE_PULL_REQUEST");
const token = Deno.env.get("GITHUB_TOKEN");

if (!pullRequest) {
  console.log("No pull request detected; skipping commit message lint.");
  Deno.exit(0);
}
if (!owner || !repo) {
  throw new Error("CircleCI project owner and repository are required.");
}

const number = pullRequest.replace(/\/+$/, "").split("/").pop();
if (!number || !/^\d+$/.test(number)) {
  throw new Error(`Cannot parse a pull request number from ${pullRequest}.`);
}

const headers: Record<string, string> = {
  Accept: "application/vnd.github+json",
  "User-Agent": "spicetify-circleci-commit-lint",
};
if (token) headers.Authorization = `Bearer ${token}`;

type ApiCommit = {
  sha: string;
  parents: { sha: string }[];
  commit: { message: string };
};

const commits: ApiCommit[] = [];
for (let page = 1;; page++) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${number}/commits?per_page=100&page=${page}`,
    { headers },
  );
  if (!response.ok) {
    throw new Error(
      `GitHub API returned ${response.status}: ${await response.text()}`,
    );
  }
  const batch: ApiCommit[] = await response.json();
  commits.push(...batch);
  if (batch.length < 100) break;
}

// Merge commits inside a pull request branch are not authored by contributors
// and are ignored, mirroring `git log --no-merges`.
const checked = commits
  .filter(({ parents }) => parents.length <= 1)
  .map(({ sha, commit }) => ({
    sha,
    subject: (commit.message.split(/\r?\n/, 1)[0] ?? "").trim(),
  }));

const invalid = checked.filter(({ subject }) =>
  !subject.startsWith('Revert "') && !subjectPattern.test(subject)
);

if (invalid.length) {
  console.error(
    `Found ${invalid.length} commit(s) that do not follow Conventional Commits:`,
  );
  for (const { sha, subject } of invalid) {
    console.error(`  ${sha.slice(0, 7)} ${subject}`);
  }
  console.error(
    `Allowed types: ${allowedTypes.join(", ")}. Example: "feat(scope): summary".`,
  );
  Deno.exit(1);
}

console.log(
  `Checked ${checked.length} commit message(s) against Conventional Commits.`,
);
