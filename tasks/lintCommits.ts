// Validates commit subjects against the Conventional Commits format used by
// the automated release version bump. Only pull request commits are checked.
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

const run = async (args: string[]) => {
  const result = await new Deno.Command("git", {
    args,
    stdout: "piped",
    stderr: "piped",
  }).output();
  return {
    success: result.success,
    stdout: new TextDecoder().decode(result.stdout).trim(),
    stderr: new TextDecoder().decode(result.stderr).trim(),
  };
};

const refExists = async (ref: string): Promise<boolean> => {
  const result = await run(["rev-parse", "--verify", "--quiet", ref]);
  return result.success;
};

let base = "";
for (const candidate of ["origin/master", "origin/main", "master", "main"]) {
  if (await refExists(candidate)) {
    base = candidate;
    break;
  }
}

if (!base) {
  console.log(
    "No base branch ref is available; skipping commit message lint.",
  );
  Deno.exit(0);
}

const log = await run([
  "log",
  "--no-merges",
  "--format=%H%x1f%s%x1e",
  `${base}..HEAD`,
]);
if (!log.success) {
  throw new Error(`git log failed: ${log.stderr}`);
}

const commits = log.stdout
  .split("\x1e")
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => {
    const [sha, subject = ""] = entry.split("\x1f");
    return { sha, subject };
  });

const invalid = commits.filter(({ subject }) =>
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
  `Checked ${commits.length} commit message(s) against Conventional Commits.`,
);
