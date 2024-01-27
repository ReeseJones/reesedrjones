import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH && false;

export default {
  input: 'src/index.ts',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
]
};
