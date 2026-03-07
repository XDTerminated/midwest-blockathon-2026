import "dotenv/config";

import { pinataService } from "../services/pinata";
import { SEED_CASES } from "./cases.js";
import { CANCELLATION_CASES } from "./cases-cancellation.js";
import { UVISA_CASES } from "./cases-uvisa.js";
import { VAWA_SIJS_CASES } from "./cases-vawa-sijs.js";
import { DEFENSE_CASES } from "./cases-defense.js";
import { H1B_CASES } from "./cases-h1b.js";
import { EB_CASES } from "./cases-eb.js";
import { L1_O1_CASES } from "./cases-l1-o1.js";
import { K1_CASES } from "./cases-k1.js";
import { FAMILY_GC_CASES } from "./cases-family-gc.js";

const ALL_CASES = [
  ...SEED_CASES,
  ...CANCELLATION_CASES,
  ...UVISA_CASES,
  ...VAWA_SIJS_CASES,
  ...DEFENSE_CASES,
  ...H1B_CASES,
  ...EB_CASES,
  ...L1_O1_CASES,
  ...K1_CASES,
  ...FAMILY_GC_CASES,
];

const DEMO_WALLET =
  process.env.FALLBACK_WALLET ?? "0x0000000000000000000000000000000000000000";

const seed = async () => {
  console.log(`Seeding ${SEED_CASES.length} cases to Pinata...\n`);

  const results: { caseType: string; country: string; cid: string }[] = [];

  for (const c of ALL_CASES) {
    try {
      const upload = await pinataService.uploadCase(c, DEMO_WALLET);
      console.log(
        `✓ Uploaded ${c.caseType}/${c.countryOfOrigin} → CID: ${upload.cid}`,
      );
      results.push({
        caseType: c.caseType,
        country: c.countryOfOrigin,
        cid: upload.cid,
      });

      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 500));
    } catch (err) {
      console.error(
        `✗ Failed to upload ${c.caseType}/${c.countryOfOrigin}:`,
        err,
      );
    }
  }

  console.log("\n✅ Seed complete!");
  console.log("\nSeed CIDs (save these for testing):");
  console.table(results);
};

seed().catch(console.error);
