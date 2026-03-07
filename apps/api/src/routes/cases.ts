import { Hono } from "hono";
import { pinataService } from "../services/pinata";
import type { CategorySlug } from "@immivault/shared";

export const caseRoutes = new Hono();

// List all cases (metadata only, no full content)
caseRoutes.get("/", async (c) => {
  const page = Number(c.req.query("page") ?? 1);
  const limit = Math.min(Number(c.req.query("limit") ?? 20), 50);
  const cases = await pinataService.listCases(limit);
  return c.json({ cases, page, limit });
});

// List cases by category
caseRoutes.get("/category/:slug", async (c) => {
  const slug = c.req.param("slug") as CategorySlug;
  const cases = await pinataService.listByCategory(slug);
  return c.json({ cases, slug });
});

// Get full case content
caseRoutes.get("/:cid", async (c) => {
  const cid = c.req.param("cid") ?? "";
  const caseData = await pinataService.getCase(cid);
  // Attach CID to the case data so frontend can display it
  return c.json({ ...caseData, cid });
});
