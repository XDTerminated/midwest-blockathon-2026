import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { pinataService } from "../services/pinata";

export const shareRoutes = new Hono();

const presignSchema = z.object({
  cid: z.string().min(1),
  expiresMinutes: z.number().min(5).max(10080).default(1440), // max 7 days
});

shareRoutes.post("/presign", zValidator("json", presignSchema), async (c) => {
  const { cid, expiresMinutes } = c.req.valid("json");
  const expiresSeconds = expiresMinutes * 60;

  const url = await pinataService.createPresignedUrl(cid, expiresSeconds);
  const expiresAt = new Date(Date.now() + expiresSeconds * 1000).toISOString();

  return c.json({ url, expiresAt, expiresMinutes });
});
