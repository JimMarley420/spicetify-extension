import babel from "@babel/core";
import type { Plugin } from "@esbuild/mod.js";

export const reactCompilerPlugin = (): Plugin => {
  return {
    name: "react-compiler",
    setup(build) {
      build.onLoad({ filter: /\.(ts|tsx|js|jsx)$/ }, async (args) => {
        const code = await Deno.readTextFile(args.path);
        
        const result = babel.transformSync(code, {
          filename: args.path,
          presets: [
            "@babel/preset-typescript",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
          plugins: [
            ["babel-plugin-react-compiler", { target: "18" }],
          ],
          sourceType: "module",
          ast: false,
          code: true,
          configFile: false,
          babelrc: false,
        });

        return {
          contents: result?.code || code,
          loader: "jsx",
        };
      });
    },
  };
};
