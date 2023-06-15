import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-abi-exporter';
import '@openzeppelin/hardhat-upgrades';
import dotenv from 'dotenv';

// types
// import type { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const config = {
  solidity: {
    compilers: [
      {
        version: '0.8.8',
        settings: {
          optimizer: {
            enabled: true,
            runs: 9999,
            details: {
              yul: false,
            },
          },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MAINNET}`,
      accounts: [
        process.env.ACCOUNT_PRIVATE_KEY_OWNER_MAINNET!,
        process.env.ACCOUNT_PRIVATE_KEY_USER_MAINNET!,
      ].filter(Boolean),
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_GOERLI}`,
      accounts: [
        process.env.ACCOUNT_PRIVATE_KEY_OWNER_GOERLI!,
        process.env.ACCOUNT_PRIVATE_KEY_USER_GOERLI!,
      ].filter(Boolean),
    },
    hardhat: {
      initialBaseFeePerGas: 0,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  abiExporter: {
    path: 'abi',
    runOnCompile: true,
    clear: false,
    flat: true,
    only: [],
    spacing: 2,
    format: 'json',
  },
};

export default config;
