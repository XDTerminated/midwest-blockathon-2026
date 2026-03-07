import { Hono } from "hono";
import type { CategorySlug } from "@immivault/shared";

import { getUser } from "../lib/auth";
import { pinataService } from "../services/pinata";

export const caseRoutes = new Hono();

// Require auth for all case routes.
caseRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

// List all cases (metadata only, no full content).
caseRoutes.get("/", async (c) => {
  const user = await getUser(c);
  const page = Number(c.req.query("page") ?? 1);
  const limit = Math.min(Number(c.req.query("limit") ?? 20), 50);
  const cases = await pinataService.listCases(user!.id, limit);
  return c.json({ cases, page, limit });
});

// List cases by category.
caseRoutes.get("/category/:slug", async (c) => {
  const user = await getUser(c);
  const slug = c.req.param("slug") as CategorySlug;
  const cases = await pinataService.listByCategory(slug, user!.id);
  return c.json({ cases, slug });
});

// Get full case content.
caseRoutes.get("/:cid", async (c) => {
  const cid = c.req.param("cid") ?? "";
  const caseData = await pinataService.getCase(cid);
  return c.json({ ...caseData, cid });
});
