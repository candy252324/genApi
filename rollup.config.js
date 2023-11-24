const typescript = require('rollup-plugin-typescript2')
const json = require('@rollup/plugin-json')

module.exports = [
  {
    input: 'core/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      json(),
      typescript({
        include: ['core/**'],
      }),
    ],
  },
]
