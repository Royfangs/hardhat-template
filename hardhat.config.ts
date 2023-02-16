import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";
import dotenv from "dotenv";

// types
import type { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
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
  abiExporter: {
    path: ".abi",
    runOnCompile: false,
    clear: false,
    flat: true,
    only: [],
    spacing: 2,
    format: "json",
  },
};

export default config;
