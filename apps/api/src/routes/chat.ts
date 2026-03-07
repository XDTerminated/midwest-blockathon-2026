import { desc, eq } from "drizzle-orm";
import { Hono } from "hono";

import { getUser } from "../lib/auth";
import { db } from "../db";
import { chatSession, chatMessage } from "../db/schema";

export const chatRoutes = new Hono();

// Require auth for all chat routes.
chatRoutes.use("*", async (c, next) => {
  const user = await getUser(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  await next();
});

// List user's chat sessions (newest first).
chatRoutes.get("/sessions", async (c) => {
  const user = await getUser(c);
  const sessions = await db
    .select()
    .from(chatSession)
    .where(eq(chatSession.userId, user!.id))
    .orderBy(desc(chatSession.updatedAt));
  return c.json({ sessions });
});

// Create a new chat session.
chatRoutes.post("/sessions", async (c) => {
  const user = await getUser(c);
  const body = await c.req.json<{ title?: string }>();
  const [created] = await db
    .insert(chatSession)
    .values({ userId: user!.id, title: body.title ?? "New Chat" })
    .returning();
  return c.json(created, 201);
});

// Delete a chat session (and its messages).
chatRoutes.delete("/sessions/:id", async (c) => {
  const user = await getUser(c);
  const id = Number(c.req.param("id"));
  // Verify ownership.
  const [session] = await db
    .select()
    .from(chatSession)
    .where(eq(chatSession.id, id));
  if (!session || session.userId !== user!.id) {
    return c.json({ error: "Not found" }, 404);
  }
  await db.delete(chatMessage).where(eq(chatMessage.sessionId, id));
  await db.delete(chatSession).where(eq(chatSession.id, id));
  return c.json({ ok: true });
});

// Get messages for a session.
chatRoutes.get("/sessions/:id/messages", async (c) => {
  const user = await getUser(c);
  const id = Number(c.req.param("id"));
  // Verify ownership.
  const [session] = await db
    .select()
    .from(chatSession)
    .where(eq(chatSession.id, id));
  if (!session || session.userId !== user!.id) {
    return c.json({ error: "Not found" }, 404);
  }
  const messages = await db
    .select()
    .from(chatMessage)
    .where(eq(chatMessage.sessionId, id))
    .orderBy(chatMessage.id);
  return c.json({ messages });
});

// Append a message to a session.
chatRoutes.post("/sessions/:id/messages", async (c) => {
  const user = await getUser(c);
  const id = Number(c.req.param("id"));
  // Verify ownership.
  const [session] = await db
    .select()
    .from(chatSession)
    .where(eq(chatSession.id, id));
  if (!session || session.userId !== user!.id) {
    return c.json({ error: "Not found" }, 404);
  }
  const body = await c.req.json<{ role: string; content: string }>();
  const [msg] = await db
    .insert(chatMessage)
    .values({ sessionId: id, role: body.role, content: body.content })
    .returning();

  // Update session title from first user message, and bump updatedAt.
  const isFirstMessage = body.role === "user" && session.title === "New Chat";
  await db
    .update(chatSession)
    .set({
      updatedAt: new Date(),
      ...(isFirstMessage ? { title: body.content.slice(0, 80) } : {}),
    })
    .where(eq(chatSession.id, id));

  return c.json(msg, 201);
});
