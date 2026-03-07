import { Hono } from "hono";
import { getContributorStats } from "../services/contract";

export const statsRoutes = new Hono();

// Get contributor stats from on-chain data
statsRoutes.get("/:walletAddress", async (c) => {
  const walletAddress = c.req.param("walletAddress") ?? "";

  if (!walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
    return c.json({ error: "Invalid wallet address" }, 400);
  }

  const stats = await getContributorStats(walletAddress);
  return c.json(stats);
});
