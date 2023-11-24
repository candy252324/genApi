import fs from 'node:fs'
import path from 'node:path'
import commander from 'commander'
import { init, parser, genApi, genMock } from '../index'
import { CONFIG_FILE_NAME } from '../constant'

import { version } from '../../package.json'
const CWD = process.cwd()
const program = commander.program // commander 实例
const configFilePath = path.join(CWD, CONFIG_FILE_NAME)
const apiConfig = require(configFilePath)

program.version(version)

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
  parser(apiConfig).then((parseredData) => {
    genApi(parseredData)
    if (apiConfig.mock !== false) {
      genMock(parseredData, apiConfig.mock)
    }
  })
})

// program.command('mock-server').action(() => {
//   if (!fs.existsSync(configFilePath)) {
//     console.log('缺少配置文件，执行 genapi init 生成')
//     return
//   }
//   require('../core/genMock/createMockServer')
// })

program.helpInformation = () => {
  return `
  命令                        作用
  ----------------------------------------------------------
  genapi --version            输出版本号
  genapi --help               输出帮助信息
  genapi init [-f,--force]    生成 apiConfig 配置文件
  genapi now                  生成接口
  genapi mock-server          启动本地mock服务器
`
}

program.parse(process.argv)
