const extensionFiles: string[] = [];

const walk = async (directory: string): Promise<void> => {
  for await (const entry of Deno.readDir(directory)) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory) {
      await walk(path);
    } else if (entry.isFile && /\.tsx?$/.test(entry.name)) {
      extensionFiles.push(path);
    }
  }
};

await walk("extensions");
extensionFiles.sort();

if (extensionFiles.length === 0) {
  console.log("No TypeScript extension files found.");
  Deno.exit(0);
}

console.log(
  `Typechecking ${extensionFiles.length} extension TypeScript files.`,
);
const command = new Deno.Command("deno", {
  args: [
    "check",
    "--unstable-raw-imports",
    "shared/types/spicetify.d.ts",
    "shared/types/css.d.ts",
    ...extensionFiles,
  ],
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});
const result = await command.spawn().status;

if (!result.success) {
  Deno.exit(result.code);
}
