const exec = require('node:child_process').exec
exec('rollup -c rollup.config.js', (error, stdout, stderr) => {
  // console.log(stdout)
})
