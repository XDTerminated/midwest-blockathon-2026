import "dotenv/config";

import { pinata } from "../services/pinata";

const CATEGORIES = [
  "asylum-refugee",
  "green-card-family",
  "green-card-employment",
  "removal-defense",
  "victim-protections",
  "humanitarian",
  "work-visas",
  "citizenship",
  "family-reunification",
] as const;

const bootstrap = async () => {
  console.log("Creating Pinata groups for ImmiVault...\n");

  const groups: Record<string, string> = {};

  for (const cat of CATEGORIES) {
    try {
      const group = await pinata.groups.create({ name: `immivault-${cat}` });
      groups[cat] = group.id;
      console.log(`✓ Created group "${cat}": ${group.id}`);
    } catch (err) {
      console.error(`✗ Failed to create group "${cat}":`, err);
    }
  }

  console.log("\n✅ Bootstrap complete. Add this to your .env file:");
  console.log(`\nPINATA_GROUPS='${JSON.stringify(groups)}'`);
  console.log(
    "\nAlso add to apps/web/.env.local:\nNEXT_PUBLIC_API_URL=http://localhost:3001"
  );
};

bootstrap().catch(console.error);
