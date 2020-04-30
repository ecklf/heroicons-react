import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts", // our source file
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es", // the preferred format
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(), // minifies generated bundles
  ],
};
