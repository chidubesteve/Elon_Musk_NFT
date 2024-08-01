require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config({path: '.env'})

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.24',
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      chainId: 31337,
    },
    polygon_amoy: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    }
  },
};
