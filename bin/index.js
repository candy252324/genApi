#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const commander = require('commander')
const pkgJson = require('../package.json')
const { init } = require('../core/init/index')
const { CONFIG_FILE_NAME } = require('../core/constant')

const CWD = process.cwd()
const program = commander.program // commander 实例
const configFilePath = path.join(CWD, CONFIG_FILE_NAME)
const apiConfig = require(configFilePath)

program.version(pkgJson.version)

// 注册命令
program
  .command('init')
  .option('-f --force', 'force 是否覆盖本地的 apiConfig 文件')
  .action((options) => init(options))

program.command('now').action(() => {
  if (!fs.existsSync(configFilePath)) {
    console.log('缺少配置文件，执行 genapi init 生成')
    return
  }
  // 生成api
  const { genApi } = require('../core/genApi/index')
  genApi(apiConfig)
  // 生成mock
  if (apiConfig.mock !== false) {
    const { genMock } = require('../core/genMock/index')
    genMock(apiConfig)
  }
})

program.helpInformation = () => {
  return `
  命令                        作用
  ----------------------------------------------------------
  genapi --version            输出版本号
  genapi --help               输出帮助信息
  genapi init [-f,--force]    生成 apiConfig 配置文件
  genapi now                  生成接口
`
}

program.parse(process.argv)
