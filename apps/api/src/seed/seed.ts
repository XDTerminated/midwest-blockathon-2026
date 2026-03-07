import "dotenv/config";

import { pinataService } from "../services/pinata";
import { SEED_CASES } from "./cases.js";

const DEMO_WALLET = process.env.FALLBACK_WALLET ?? "0x0000000000000000000000000000000000000000";

const seed = async () => {
  console.log(`Seeding ${SEED_CASES.length} cases to Pinata...\n`);

  const results: { caseType: string; country: string; cid: string }[] = [];

  for (const c of SEED_CASES) {
    try {
      const upload = await pinataService.uploadCase(c, DEMO_WALLET);
      console.log(`✓ Uploaded ${c.caseType}/${c.countryOfOrigin} → CID: ${upload.cid}`);
      results.push({ caseType: c.caseType, country: c.countryOfOrigin, cid: upload.cid });

      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 500));
    } catch (err) {
      console.error(`✗ Failed to upload ${c.caseType}/${c.countryOfOrigin}:`, err);
    }
  }

  console.log("\n✅ Seed complete!");
  console.log("\nSeed CIDs (save these for testing):");
  console.table(results);
};

seed().catch(console.error);
