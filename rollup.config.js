import { nodeResolve } from '@rollup/plugin-node-resolve'
import graph from 'rollup-plugin-graph'
let graphOptions = { prune: true }

export default {
  input: 'index.js',
  output: {
    file: 'dist/preact-bundle.js',
    format: 'es',
  },
  plugins: [nodeResolve(), graph(graphOptions)],
}
