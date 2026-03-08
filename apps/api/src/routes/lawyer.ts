import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { eq, desc } from "drizzle-orm";

import { getUser } from "../lib/auth";
import { db } from "../db";
import { lawyerRequest } from "../db/schema";

const routes = new Hono();

// Auth middleware.
routes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

const createSchema = z.object({
  caseType: z.string().min(1),
  countryOfOrigin: z.string().min(1),
  summary: z.string().min(20).max(5000),
  urgency: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
  preferredLanguage: z.string().default("en"),
  contactEmail: z.string().email(),
  contactPhone: z.string().optional(),
  relatedCid: z.string().optional(),
});

// POST /api/lawyer — Create a new lawyer request.
routes.post("/", zValidator("json", createSchema), async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const data = c.req.valid("json");

  const [request] = await db
    .insert(lawyerRequest)
    .values({
      userId: user.id,
      caseType: data.caseType,
      countryOfOrigin: data.countryOfOrigin,
      summary: data.summary,
      urgency: data.urgency,
      preferredLanguage: data.preferredLanguage,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone ?? null,
      relatedCid: data.relatedCid ?? null,
    })
    .returning();

  return c.json(request, 201);
});

// GET /api/lawyer — List current user's lawyer requests.
routes.get("/", async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const requests = await db
    .select()
    .from(lawyerRequest)
    .where(eq(lawyerRequest.userId, user.id))
    .orderBy(desc(lawyerRequest.createdAt));

  return c.json({ requests });
});

// PATCH /api/lawyer/:id/cancel — Cancel a pending request.
routes.patch("/:id/cancel", async (c) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ error: "Invalid ID" }, 400);

  const [existing] = await db
    .select()
    .from(lawyerRequest)
    .where(eq(lawyerRequest.id, id));

  if (!existing) return c.json({ error: "Not found" }, 404);
  if (existing.userId !== user.id) return c.json({ error: "Forbidden" }, 403);
  if (existing.status !== "pending") {
    return c.json({ error: "Only pending requests can be cancelled" }, 400);
  }

  const [updated] = await db
    .update(lawyerRequest)
    .set({ status: "cancelled", updatedAt: new Date() })
    .where(eq(lawyerRequest.id, id))
    .returning();

  return c.json(updated);
});

export const lawyerRoutes = routes;
