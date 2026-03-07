import type { Context, Next } from "hono";

import { getUser } from "../lib/auth";
import { pinataService } from "../services/pinata";

// x402 Tier 2 implementation:
// - Returns HTTP 402 with X-Accepts-Payment header when no proof is present.
// - Skips payment for files owned by the current user.
// - Accepts any non-empty X-Payment-Proof header for demo purposes.
// - Architecture is correct; on-chain verification would be added in production via viem.

const paymentRequired = () => {
  return async (c: Context, next: Next) => {
    const paymentProof = c.req.header("X-Payment-Proof");

    if (paymentProof) {
      // In production: verify paymentProof is a valid Base tx hash.
      await next();
      return;
    }

    // Check if the current user owns this file.
    const cid = c.req.param("cid");
    if (cid) {
      const user = await getUser(c);
      if (user) {
        const isOwner = await pinataService.isFileOwnedByUser(cid, user.id);
        if (isOwner) {
          await next();
          return;
        }
      }
    }

    return c.json(
      {
        error: "Payment Required",
        amount: "0.10",
        asset: "USDC",
        network: "base",
        description:
          "Full case access requires a $0.10 USDC micropayment on the Base network. Payment goes directly to the case contributor.",
        paymentInstructions:
          "Connect your wallet, send 0.10 USDC to the contributor's address on Base, then retry with the transaction hash in the X-Payment-Proof header.",
      },
      402,
      {
        "X-Accepts-Payment": "x402; network=base; asset=USDC; amount=0.10",
        "Access-Control-Expose-Headers": "X-Accepts-Payment",
      }
    );
  };
};

export { paymentRequired };
