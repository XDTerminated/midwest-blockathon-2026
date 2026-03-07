import { Hono } from "hono";

import { pinataService } from "../services/pinata";

export const fileRoutes = new Hono();

// List all files in Pinata (public, no auth required).
fileRoutes.get("/", async (c) => {
  const limit = Math.min(Number(c.req.query("limit") ?? 100), 200);
  const cases = await pinataService.listAllFiles(limit);
  return c.json({ cases });
});
