import "dotenv/config";

// Prevent Pinata SDK internal promise rejections from crashing the server.
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection (non-fatal):", reason);
});

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { auth } from "./lib/auth";
import { caseRoutes } from "./routes/cases";
import { searchRoutes } from "./routes/search";
import { shareRoutes } from "./routes/share";
import { uploadRoutes } from "./routes/upload";
import { verifyRoutes } from "./routes/verify";
<<<<<<< Updated upstream
=======
import { shareRoutes } from "./routes/share";
import { ttsRoutes } from "./routes/tts";
import { auth } from "./lib/auth";
>>>>>>> Stashed changes

const app = new Hono();

app.use(
  "*",
  cors({
    origin: [
      process.env.WEB_URL ?? "http://localhost:3000",
      "http://localhost:3000",
    ],
    allowHeaders: ["Content-Type", "X-Payment-Proof"],
    exposeHeaders: ["X-Accepts-Payment"],
    credentials: true,
  })
);
app.use("*", logger());

// Global error handler — prevents uncaught Pinata/Anthropic errors from crashing.
app.onError((err, c) => {
  console.error("API error:", err.message);
  return c.json({ error: "Internal server error", message: err.message }, 500);
});

app.get("/health", (c) => c.json({ ok: true, service: "immivault-api" }));

// BetterAuth handler — mount on /api/auth/*.
app.all("/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

app.route("/api/search", searchRoutes);
app.route("/api/cases", caseRoutes);
app.route("/api/upload", uploadRoutes);
app.route("/api/verify", verifyRoutes);
app.route("/api/share", shareRoutes);
app.route("/api/tts", ttsRoutes);

const port = Number(process.env.PORT ?? 3001);
console.log(`ImmiVault API running on http://localhost:${port}`);

serve({ fetch: app.fetch, port });

