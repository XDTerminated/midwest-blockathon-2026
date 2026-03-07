// ImmiVaultRegistry contract ABI and addresses.

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

// Access price: $0.10 USDC (6 decimals).
export const ACCESS_PRICE_DISPLAY = "0.10";

// Contract addresses — update after deployment.
export const CONTRACT_ADDRESSES = {
  baseSepolia: {
    registry: "" as `0x${string}`,
    usdc: "" as `0x${string}`,
  },
  base: {
    registry: "" as `0x${string}`,
    usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as `0x${string}`, // Official USDC on Base.
  },
} as const;
