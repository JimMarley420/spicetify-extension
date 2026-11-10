// Lightweight secret scan over the checked-out working tree. It catches
// high-signal provider credentials without needing an external binary or a git
// checkout, so it runs in the minimal Deno image.
const patterns: { name: string; pattern: RegExp }[] = [
  {
    name: "GitHub token",
    pattern: /\b(gh[pousr]_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{22,})\b/,
  },
  { name: "AWS access key", pattern: /\bAKIA[0-9A-Z]{16}\b/ },
  {
    name: "Private key",
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/,
  },
  {
    name: "Discord webhook",
    pattern: /https:\/\/discord(?:app)?\.com\/api\/webhooks\/\d+\/[A-Za-z0-9_-]+/,
  },
  { name: "Slack token", pattern: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/ },
  { name: "Google API key", pattern: /\bAIza[0-9A-Za-z_-]{35}\b/ },
  { name: "Stripe secret key", pattern: /\bsk_live_[0-9A-Za-z]{24,}\b/ },
];

const ignoredDirectories = new Set([
  ".git",
  ".opencode",
  "coverage",
  "node_modules",
  "test-results",
]);
const ignoredExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".mp3",
  ".mp4",
  ".zip",
  ".gz",
  ".pdf",
]);
const maxBytes = 1_000_000;

const files: string[] = [];
const walk = async (directory: string): Promise<void> => {
  for await (const entry of Deno.readDir(directory)) {
    const path = directory === "." ? entry.name : `${directory}/${entry.name}`;
    if (entry.isDirectory) {
      if (!ignoredDirectories.has(entry.name)) await walk(path);
    } else if (entry.isFile) {
      files.push(path);
    }
  }
};
await walk(".");
files.sort();

type Finding = { file: string; line: number; name: string; match: string };
const findings: Finding[] = [];

for (const file of files) {
  const dot = file.lastIndexOf(".");
  if (dot >= 0 && ignoredExtensions.has(file.slice(dot).toLowerCase())) {
    continue;
  }
  let info: Deno.FileInfo;
  try {
    info = await Deno.stat(file);
  } catch {
    continue;
  }
  if (!info.isFile || info.size > maxBytes) continue;

  let content: string;
  try {
    content = await Deno.readTextFile(file);
  } catch {
    continue;
  }
  if (content.includes("\0")) continue;

  const lines = content.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    for (const { name, pattern } of patterns) {
      const match = line.match(pattern);
      if (match) {
        findings.push({ file, line: index + 1, name, match: match[0] });
      }
    }
  }
}

if (findings.length) {
  console.error(`Potential secrets found in ${findings.length} location(s):`);
  for (const { file, line, name, match } of findings) {
    const preview = `${match.slice(0, 8)}...`;
    console.error(`  ${file}:${line} ${name} (${preview})`);
  }
  Deno.exit(1);
}

console.log(`Scanned ${files.length} file(s); no secrets found.`);
