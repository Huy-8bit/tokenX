/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("chai");
require("ethers");
require("ethereum-waffle");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [process.env.REAL_ACCOUNTS],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/GeMVzoOnF9s91czx6zYdUA6mAjA39Q46",
      accounts: [process.env.REAL_ACCOUNTS],
    },
    shibarium: {
      url: "https://www.shibrpc.com",
      accounts: [process.env.REAL_ACCOUNTS],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "TRD75UM176G352ITIMFI6AA5K8RKAQ9WCB",
  },
  solidity: {
    compilers: [
      {
        version: "0.5.7",
      },
      {
        version: "0.8.18",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.4.18",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
