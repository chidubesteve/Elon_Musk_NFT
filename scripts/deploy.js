const { ethers } = require('hardhat');
const { time } = require('@nomicfoundation/hardhat-network-helpers');

async function main() {
  const TWO_MINS_IN_SECS = 60 * 60;
  const currentBlockTimeStamp = await time.latest();
  console.log(TWO_MINS_IN_SECS, currentBlockTimeStamp);
  const unlockTime = currentBlockTimeStamp + TWO_MINS_IN_SECS;
  const [OWNER] = await ethers.getSigners();

  const lockedAmount = ethers.parseEther('1');
  const args = [unlockTime];

  const Lock = await ethers.deployContract('Lock', args, { lockedAmount });
  await Lock.waitForDeployment();

  console.log('Library deployed to:', Lock.target);

  // We can increase the time in Hardhat Network
  await time.increaseTo(unlockTime);

  Lock.withdraw();
  console.log('withdraw worked');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
