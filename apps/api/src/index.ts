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
import { chatRoutes } from "./routes/chat";
import { creditRoutes } from "./routes/credits";
import { escrowRoutes } from "./routes/escrow";
import { fileRoutes } from "./routes/files";
import { searchRoutes } from "./routes/search";
import { shareRoutes } from "./routes/share";
import { translateRoutes } from "./routes/translate";
import { trustRoutes } from "./routes/trust";
import { ttsRoutes } from "./routes/tts";
import { uploadRoutes } from "./routes/upload";
import { verifyRoutes } from "./routes/verify";
import { lawyerRoutes } from "./routes/lawyer";
import { escrowService } from "./services/escrow";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: [
      process.env.WEB_URL ?? "http://localhost:3000",
      "https://midwest-blockathon-2026-api.vercel.app",
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
app.route("/api/chat", chatRoutes);
app.route("/api/cases", caseRoutes);
app.route("/api/files", fileRoutes);
app.route("/api/upload", uploadRoutes);
app.route("/api/verify", verifyRoutes);
app.route("/api/share", shareRoutes);
app.route("/api/translate", translateRoutes);
app.route("/api/tts", ttsRoutes);
app.route("/api/escrow", escrowRoutes);
app.route("/api/trust", trustRoutes);
app.route("/api/credits", creditRoutes);
app.route("/api/lawyer", lawyerRoutes);

// Auto-release pending escrows every 30 seconds.
setInterval(() => {
  escrowService.checkAutoRelease().catch((err) => {
    console.error("Auto-release check error:", err);
  });
}, 30_000);

const port = Number(process.env.PORT ?? 3001);
console.log(`Lumina API running on http://localhost:${port}`);

serve({ fetch: app.fetch, port });
