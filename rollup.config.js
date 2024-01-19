/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('rollup-plugin-typescript2')
const { dts } = require('rollup-plugin-dts')
// const json = require('@rollup/plugin-json')

module.exports = [
  // {
  //   input: 'core/index.ts',
  //   output: {
  //     file: 'dist/index.js',
  //     format: 'cjs',
  //   },
  //   plugins: [
  //     // json(),
  //     typescript({
  //       include: ['core/**'],
  //     }),
  //   ],
  // },
  {
    input: 'commander/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      typescript({
        include: ['commander/**', 'core/**'],
      }),
    ],
  },
  {
    input: 'core/types.ts',
    output: [{ file: 'dist/type.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
