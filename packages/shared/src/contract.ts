// LuminaRegistry contract ABI and addresses.

export const REGISTRY_ABI = [
  {
    inputs: [{ name: "_usdc", type: "address" }, { name: "_accessPrice", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "cidHash", type: "bytes32" },
      { indexed: true, name: "payer", type: "address" },
      { indexed: true, name: "contributor", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "CaseAccessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "cidHash", type: "bytes32" },
      { indexed: true, name: "contributor", type: "address" },
      { indexed: false, name: "timestamp", type: "uint256" },
    ],
    name: "CaseRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "accessPrice",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }],
    name: "getCase",
    outputs: [
      { name: "contributor", type: "address" },
      { name: "accessCount", type: "uint256" },
      { name: "totalEarned", type: "uint256" },
      { name: "registeredAt", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "contributor", type: "address" }],
    name: "getContributorStats",
    outputs: [
      { name: "casesUploaded", type: "uint256" },
      { name: "totalEarned", type: "uint256" },
      { name: "totalAccesses", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "contributor", type: "address" }],
    name: "getContributorCases",
    outputs: [{ name: "", type: "bytes32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }, { name: "user", type: "address" }],
    name: "hasAccess",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }],
    name: "payForAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }, { name: "contributor", type: "address" }],
    name: "registerCase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

// ERC-20 approve ABI (subset needed for USDC approval)
export const ERC20_ABI = [
  {
    inputs: [{ name: "spender", type: "address" }, { name: "amount", type: "uint256" }],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// LuminaEscrow ABI
export const ESCROW_ABI = [
  {
    inputs: [{ name: "_usdc", type: "address" }, { name: "_treasury", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "cidHash", type: "bytes32" },
      { indexed: true, name: "contributor", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "StakeDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "cidHash", type: "bytes32" },
      { indexed: true, name: "voter", type: "address" },
      { indexed: false, name: "approve", type: "bool" },
    ],
    name: "TrustVote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "cidHash", type: "bytes32" },
      { indexed: true, name: "contributor", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "EscrowReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "cidHash", type: "bytes32" },
      { indexed: true, name: "contributor", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "EscrowSlashed",
    type: "event",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }],
    name: "stakeAndRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }, { name: "approve", type: "bool" }],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }],
    name: "claimAutoRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "cidHash", type: "bytes32" }],
    name: "getEscrow",
    outputs: [
      { name: "contributor", type: "address" },
      { name: "stakeAmount", type: "uint256" },
      { name: "stakedAt", type: "uint256" },
      { name: "status", type: "uint8" },
      { name: "approvalCount", type: "uint256" },
      { name: "flagCount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "contributor", type: "address" }],
    name: "getContributorEscrows",
    outputs: [{ name: "", type: "bytes32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKE_AMOUNT",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Access price: $0.10 USDC (6 decimals)
export const ACCESS_PRICE_USDC = BigInt(100000);
export const ACCESS_PRICE_DISPLAY = "0.10";

// Stake amount (same as access price for now)
export const STAKE_AMOUNT_USDC = BigInt(100000);
export const STAKE_AMOUNT_DISPLAY = "0.10";

// Contract addresses — update after deployment.
export const CONTRACT_ADDRESSES = {
  baseSepolia: {
    registry: "0xcfa2eE64080F031Dbfcf9F04EAf04EBeA98EC3EE" as `0x${string}`,
    escrow: "0x95ca1567938F1462e6b942af8dD94fB3E9623A4B" as `0x${string}`,
    usdc: "0x036CbD53842c5426634e7929541eC2318f3dCF7e" as `0x${string}`, // official USDC on Base Sepolia
  },
  base: {
    registry: "" as `0x${string}`,
    escrow: "" as `0x${string}`,
    usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as `0x${string}`, // Official USDC on Base.
  },
} as const;

// Chain IDs
export const CHAIN_IDS = {
  baseSepolia: 84532,
  base: 8453,
} as const;
