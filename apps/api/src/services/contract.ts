import { createPublicClient, createWalletClient, http, keccak256, toHex } from "viem";
import { baseSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { REGISTRY_ABI, CONTRACT_ADDRESSES } from "@immivault/shared";

const REGISTRY_ADDRESS = (process.env.REGISTRY_ADDRESS ?? CONTRACT_ADDRESSES.baseSepolia.registry) as `0x${string}`;

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http("https://sepolia.base.org"),
});

function getWalletClient() {
  const key = process.env.DEPLOYER_PRIVATE_KEY;
  if (!key) return null;
  const account = privateKeyToAccount(key as `0x${string}`);
  return createWalletClient({
    account,
    chain: baseSepolia,
    transport: http("https://sepolia.base.org"),
  });
}

/** Convert a CID string to its keccak256 hash (bytes32) */
export function cidToHash(cid: string): `0x${string}` {
  return keccak256(toHex(cid));
}

/** Register a case CID on-chain */
export async function registerCaseOnChain(cid: string, contributorWallet: string): Promise<string | null> {
  if (!REGISTRY_ADDRESS || REGISTRY_ADDRESS === "0x") return null;
  const wallet = getWalletClient();
  if (!wallet) return null;

  try {
    const cidHash = cidToHash(cid);
    const hash = await wallet.writeContract({
      address: REGISTRY_ADDRESS,
      abi: REGISTRY_ABI,
      functionName: "registerCase",
      args: [cidHash, contributorWallet as `0x${string}`],
    });
    console.log(`Case ${cid} registered on-chain: ${hash}`);
    return hash;
  } catch (err) {
    console.error("Failed to register case on-chain:", err);
    return null;
  }
}

/** Check if a user has access to a case (paid or is contributor) */
export async function checkAccess(cid: string, userAddress: string): Promise<boolean> {
  if (!REGISTRY_ADDRESS || REGISTRY_ADDRESS === "0x") return false;

  try {
    const cidHash = cidToHash(cid);
    const result = await publicClient.readContract({
      address: REGISTRY_ADDRESS,
      abi: REGISTRY_ABI,
      functionName: "hasAccess",
      args: [cidHash, userAddress as `0x${string}`],
    });
    return result as boolean;
  } catch {
    return false;
  }
}

/** Get on-chain case info */
export async function getCaseOnChain(cid: string) {
  if (!REGISTRY_ADDRESS || REGISTRY_ADDRESS === "0x") return null;

  try {
    const cidHash = cidToHash(cid);
    const [contributor, accessCount, totalEarned, registeredAt] = await publicClient.readContract({
      address: REGISTRY_ADDRESS,
      abi: REGISTRY_ABI,
      functionName: "getCase",
      args: [cidHash],
    }) as [string, bigint, bigint, bigint];

    if (contributor === "0x0000000000000000000000000000000000000000") return null;

    return {
      contributor,
      accessCount: Number(accessCount),
      totalEarned: Number(totalEarned),
      registeredAt: Number(registeredAt),
    };
  } catch {
    return null;
  }
}

/** Get contributor stats from on-chain */
export async function getContributorStats(walletAddress: string) {
  if (!REGISTRY_ADDRESS || REGISTRY_ADDRESS === "0x") {
    return { casesUploaded: 0, totalEarned: 0, totalAccesses: 0, cases: [] };
  }

  try {
    const [casesUploaded, totalEarned, totalAccesses] = await publicClient.readContract({
      address: REGISTRY_ADDRESS,
      abi: REGISTRY_ABI,
      functionName: "getContributorStats",
      args: [walletAddress as `0x${string}`],
    }) as [bigint, bigint, bigint];

    const cidHashes = await publicClient.readContract({
      address: REGISTRY_ADDRESS,
      abi: REGISTRY_ABI,
      functionName: "getContributorCases",
      args: [walletAddress as `0x${string}`],
    }) as `0x${string}`[];

    const cases = await Promise.all(
      cidHashes.map(async (cidHash) => {
        const [, accessCount, earned, registeredAt] = await publicClient.readContract({
          address: REGISTRY_ADDRESS,
          abi: REGISTRY_ABI,
          functionName: "getCase",
          args: [cidHash],
        }) as [string, bigint, bigint, bigint];

        return {
          cidHash,
          accessCount: Number(accessCount),
          earned: Number(earned),
          registeredAt: Number(registeredAt),
        };
      })
    );

    return {
      casesUploaded: Number(casesUploaded),
      totalEarned: Number(totalEarned),
      totalAccesses: Number(totalAccesses),
      cases,
    };
  } catch (err) {
    console.error("Failed to get contributor stats:", err);
    return { casesUploaded: 0, totalEarned: 0, totalAccesses: 0, cases: [] };
  }
}

/** Verify a payment tx hash on-chain by checking for CaseAccessed event */
export async function verifyPaymentTx(txHash: string, cid: string): Promise<boolean> {
  if (!REGISTRY_ADDRESS || REGISTRY_ADDRESS === "0x") return false;

  try {
    const receipt = await publicClient.getTransactionReceipt({ hash: txHash as `0x${string}` });
    if (receipt.status !== "success") return false;

    // Check the tx was to our registry contract
    if (receipt.to?.toLowerCase() !== REGISTRY_ADDRESS.toLowerCase()) return false;

    return true;
  } catch {
    return false;
  }
}
