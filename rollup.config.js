import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "es",
    name: "MyPreactBundle",
  },
  treeshake: false,
  plugins: [nodeResolve({ browser: true }), terser()],
};
