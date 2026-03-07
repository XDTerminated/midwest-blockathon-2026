import { Hono } from "hono";

import { pinataService } from "../services/pinata";

export const verifyRoutes = new Hono();

verifyRoutes.get("/:cid", async (c) => {
  const cid = c.req.param("cid");
  const sig = await pinataService.getSignature(cid);

  if (!sig) {
    return c.json({ cid, isValid: false, signedAt: null, signedBy: null });
  }

  return c.json({
    cid,
    isValid: sig.isValid ?? true,
    signedAt: sig.signedAt ?? null,
    signedBy: sig.signedBy ?? null,
  });
});
