import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import * as schema from "./schema";

// Ensure env is loaded before accessing DATABASE_URL.
// (ES module imports are hoisted, so dotenv/config in index.ts runs too late.)
if (!process.env.DATABASE_URL) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  config({ path: resolve(__dirname, "../../../../.env") });
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
