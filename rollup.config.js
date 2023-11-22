import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'dist/preact-bundle.js',
    format: 'es',
  },
  plugins: [nodeResolve()],
}
