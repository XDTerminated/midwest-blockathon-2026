import { config } from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load root .env first (monorepo root), then local .env as override.
config({ path: resolve(__dirname, "../../../.env") });
config(); // also load apps/api/.env if present
