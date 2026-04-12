import { join } from "@std/path";
import { existsSync } from "@std/fs";

interface ThemeCheckResult {
  theme: string;
  errors: string[];
  warnings: string[];
}

async function checkTheme(themePath: string): Promise<ThemeCheckResult> {
  const themeName = themePath.split("/").pop() || "unknown";
  const result: ThemeCheckResult = {
    theme: themeName,
    errors: [],
    warnings: [],
  };

  const requiredFiles = ["color.ini", "user.css", "theme.js", "README.md"];
  for (const file of requiredFiles) {
    const filePath = join(themePath, file);
    if (!(existsSync(filePath))) {
      result.errors.push(`Missing required file: ${file}`);
    }
  }

  const colorIniPath = join(themePath, "color.ini");
  if (existsSync(colorIniPath)) {
    const content = await Deno.readTextFile(colorIniPath);
    const hasBaseSection = content.includes("[Base]");
    if (!hasBaseSection) {
      result.errors.push("color.ini must contain [Base] section");
    }
  }

  const userCssPath = join(themePath, "user.css");
  if (existsSync(userCssPath)) {
    const content = await Deno.readTextFile(userCssPath);
    
    if (content.includes("@keyframes") && !content.includes("from") && !content.includes("to")) {
      result.errors.push("user.css contains incomplete @keyframes");
    }
    
    const hasOpenBrace = (content.match(/{/g) || []).length;
    const hasCloseBrace = (content.match(/}/g) || []).length;
    if (hasOpenBrace !== hasCloseBrace) {
      result.errors.push(`user.css has mismatched braces: ${hasOpenBrace} opening, ${hasCloseBrace} closing`);
    }
  }

  const themeJsPath = join(themePath, "theme.js");
  if (existsSync(themeJsPath)) {
    const content = await Deno.readTextFile(themeJsPath);
    
    const jsErrors = [];
    try {
      new Function(content);
    } catch (e) {
      if (e instanceof SyntaxError) {
        jsErrors.push(e.message);
      }
    }
    
    if (content.includes("document.") && !content.includes("waitForElement")) {
      result.warnings.push("theme.js uses document. methods without waiting for elements");
    }
    
    if (content.includes("localStorage") && !content.includes("try")) {
      result.warnings.push("theme.js uses localStorage without try-catch");
    }
  }

  return result;
}

async function checkAllThemes(): Promise<void> {
  const themesDir = "themes";
  
  if (!(existsSync(themesDir))) {
    console.error("No themes/ directory found");
    Deno.exit(1);
  }

  let hasErrors = false;
  const allResults: ThemeCheckResult[] = [];

  for await (const dirEntry of Deno.readDir(themesDir)) {
    if (dirEntry.isDirectory) {
      const themePath = join(themesDir, dirEntry.name);
      const result = await checkTheme(themePath);
      allResults.push(result);
    }
  }

  for (const result of allResults) {
    console.log(`\n=== ${result.theme} ===`);
    
    if (result.errors.length > 0) {
      console.log("\x1b[31mErrors:\x1b[0m");
      for (const error of result.errors) {
        console.log(`  ❌ ${error}`);
      }
      hasErrors = true;
    }
    
    if (result.warnings.length > 0) {
      console.log("\x1b[33mWarnings:\x1b[0m");
      for (const warning of result.warnings) {
        console.log(`  ⚠️ ${warning}`);
      }
    }
    
    if (result.errors.length === 0 && result.warnings.length === 0) {
      console.log("\x1b[32m✓ No issues found\x1b[0m");
    }
  }

  if (hasErrors) {
    console.log("\n\x1b[31mTheme check failed with errors\x1b[0m");
    Deno.exit(1);
  } else {
    console.log("\n\x1b[32mAll themes passed!\x1b[0m");
    Deno.exit(0);
  }
}

checkAllThemes();
