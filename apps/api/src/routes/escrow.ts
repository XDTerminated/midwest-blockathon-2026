import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { getUser } from "../lib/auth";
import { escrowService } from "../services/escrow";

export const escrowRoutes = new Hono();

// All escrow routes require auth.
escrowRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

// POST /api/escrow/stake — record a new stake after on-chain tx.
const stakeSchema = z.object({
  cid: z.string().min(1),
  cidHash: z.string().min(1),
  contributorWallet: z.string().min(1),
  stakeTxHash: z.string().optional(),
});

escrowRoutes.post("/stake", zValidator("json", stakeSchema), async (c) => {
  const user = await getUser(c);
  const { cid, cidHash, contributorWallet, stakeTxHash } = c.req.valid("json");

  const existing = await escrowService.getByCid(cid);
  if (existing) return c.json({ error: "Escrow already exists for this CID" }, 409);

  const escrow = await escrowService.create(
    cid,
    cidHash,
    user!.id,
    contributorWallet,
    stakeTxHash ?? null,
  );
  return c.json(escrow, 201);
});

// GET /api/escrow/my — all escrows for the authenticated user.
escrowRoutes.get("/my", async (c) => {
  const user = await getUser(c);
  const escrows = await escrowService.getByContributor(user!.id);
  return c.json(escrows);
});

// GET /api/escrow/:cid — escrow status for a specific case.
escrowRoutes.get("/:cid", async (c) => {
  const cid = c.req.param("cid");
  const escrow = await escrowService.getByCid(cid);
  if (!escrow) return c.json({ error: "Not found" }, 404);
  return c.json(escrow);
});
