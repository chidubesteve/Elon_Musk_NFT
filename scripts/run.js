const { ethers } = require('hardhat');

async function main() {
  console.log('Deploying Contract...');
  const ElonNFT = await ethers.deployContract('elonNFT');
  await ElonNFT.waitForDeployment();

  console.log('Elon Contract deployed to address:', await ElonNFT.getAddress());

  console.log("Minting NFT...");
  const txn = await ElonNFT.mintNFT();
  await txn.wait();
  console.log("Yayy.. NFT minted successfully!!!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0xFCF8B5d42E2bF611dBeDbd3f445D649BB19874D9