import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import ts from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  external: ['vue'],
  plugins: [ts(), resolve(), commonjs(), terser({ module: true })],
  output: {
    name: 'dialog',
    file: 'dist/index.js',
    format: 'es',
    globals: {
      vue: 'Vue'
    }
  },
}
