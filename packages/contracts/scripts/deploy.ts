import { ethers } from "hardhat";

async function main() {
  // Base Sepolia USDC (official Circle testnet token).
  const USDC_BASE_SEPOLIA = process.env.USDC_ADDRESS ?? "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
  const [deployer] = await ethers.getSigners();
  const treasury = deployer.address; // For demo, treasury = deployer

  const usdcAddress = USDC_BASE_SEPOLIA;
  console.log("Using USDC at:", usdcAddress);

  // $0.10 USDC = 100000 (6 decimals)
  const ACCESS_PRICE = 100000n;

  // Deploy Registry
  const Registry = await ethers.getContractFactory("ImmiVaultRegistry");
  const registry = await Registry.deploy(usdcAddress, ACCESS_PRICE);
  await registry.waitForDeployment();
  const registryAddress = await registry.getAddress();
  console.log("ImmiVaultRegistry deployed to:", registryAddress);

  // Deploy Escrow
  const Escrow = await ethers.getContractFactory("ImmiVaultEscrow");
  const escrow = await Escrow.deploy(usdcAddress, treasury);
  await escrow.waitForDeployment();
  const escrowAddress = await escrow.getAddress();
  console.log("ImmiVaultEscrow deployed to:", escrowAddress);

  console.log("\nUSDC address:", usdcAddress);
  console.log("Treasury:", treasury);

  console.log("\nAdd to your .env:");
  console.log(`REGISTRY_ADDRESS=${registryAddress}`);
  console.log(`ESCROW_ADDRESS=${escrowAddress}`);
  console.log(`USDC_ADDRESS=${usdcAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
