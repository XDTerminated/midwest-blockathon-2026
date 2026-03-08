import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  splitting: false,
  bundle: true,
  // Bundle the shared workspace package (TS source, not compiled).
  noExternal: ["@lumina/shared"],
  // Keep heavy runtime deps as externals.
  external: [
    "pinata",
    "@anthropic-ai/sdk",
    "hono",
    "@hono/node-server",
    "@hono/zod-validator",
    "viem",
    "zod",
    "dotenv",
  ],
  target: "es2022",
  clean: true,
});

export default tsupConfig;
