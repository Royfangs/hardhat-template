import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";
import type { RollupOptions } from "rollup";

const config: RollupOptions = {
  input: "./src/contractSdk.js",
  output: {
    dir: "./dist/",
    format: "es",
  },
  plugins: [
    del({ targets: "dist/*" }),
    nodeResolve(),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
};

export default config;
