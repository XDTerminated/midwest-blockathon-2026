import { ethers } from "hardhat";

async function main() {
  // USDC on Base Sepolia (official Circle testnet USDC)
  // If no testnet USDC available, deploy a mock ERC20
  const USDC_BASE_SEPOLIA = process.env.USDC_ADDRESS ?? "";

  let usdcAddress = USDC_BASE_SEPOLIA;

  if (!usdcAddress) {
    console.log("No USDC_ADDRESS set, deploying MockUSDC...");
    const MockUSDC = await ethers.getContractFactory("MockUSDC");
    const mockUsdc = await MockUSDC.deploy();
    await mockUsdc.waitForDeployment();
    usdcAddress = await mockUsdc.getAddress();
    console.log("MockUSDC deployed to:", usdcAddress);
  }

  // $0.10 USDC = 100000 (6 decimals)
  const ACCESS_PRICE = 100000n;

  const Registry = await ethers.getContractFactory("ImmiVaultRegistry");
  const registry = await Registry.deploy(usdcAddress, ACCESS_PRICE);
  await registry.waitForDeployment();

  const registryAddress = await registry.getAddress();
  console.log("ImmiVaultRegistry deployed to:", registryAddress);
  console.log("USDC address:", usdcAddress);
  console.log("Access price:", ACCESS_PRICE.toString(), "(0.10 USDC)");

  console.log("\nAdd to your .env:");
  console.log(`REGISTRY_ADDRESS=${registryAddress}`);
  console.log(`USDC_ADDRESS=${usdcAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
