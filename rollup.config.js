const typescript = require('rollup-plugin-typescript2')

module.exports = {
  input: 'core/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    typescript({
      include: ['core/**'],
    }),
  ],
}
