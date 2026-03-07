import { Hono } from "hono";

import { getUser } from "../lib/auth";
import { creditService } from "../services/credits";

export const creditRoutes = new Hono();

// All credit routes require auth.
creditRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

// GET /api/credits/my — credits for the authenticated user.
creditRoutes.get("/my", async (c) => {
  const user = await getUser(c);
  const credits = await creditService.getByContributor(user!.id);
  return c.json(credits);
});
