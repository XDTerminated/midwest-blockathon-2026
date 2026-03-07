import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { getUser } from "../lib/auth";
import { escrowService } from "../services/escrow";

export const trustRoutes = new Hono();

// All trust routes require auth.
trustRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

// POST /api/trust/vote — submit a trust vote.
const voteSchema = z.object({
  cid: z.string().min(1),
  voteType: z.enum(["approve", "flag"]),
});

trustRoutes.post("/vote", zValidator("json", voteSchema), async (c) => {
  const user = await getUser(c);
  const { cid, voteType } = c.req.valid("json");

  const result = await escrowService.processVote(cid, user!.id, voteType);
  if ("error" in result) return c.json(result, 409);
  return c.json(result);
});

// GET /api/trust/status/:cid — vote summary for a case.
trustRoutes.get("/status/:cid", async (c) => {
  const cid = c.req.param("cid");
  const user = await getUser(c);
  const summary = await escrowService.getVoteSummary(cid, user?.id ?? null);
  if (!summary) return c.json({ error: "Not found" }, 404);
  return c.json(summary);
});
