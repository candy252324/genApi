import fs from 'node:fs'
import { DEFAULT_CONFIG_PATH } from '../core/constant'
import { loadConfig } from '../core/utils/loadConfig'
import { saveConfigPathToLocal } from '../core/parser/localData'
import { parser } from '../core/parser'
import { genApi } from '../core/genApi'
import { genMock } from '../core/genMock'

export async function now(options) {
  // 优先判断用户是否通过 --config 参数传入了配置文件
  const configFilePath =
    options?.config && fs.existsSync(options.config)
      ? options?.config
      : Object.values(DEFAULT_CONFIG_PATH).find((confPath) => fs.existsSync(confPath))

  if (!configFilePath) {
    console.log('缺少配置文件，执行 genapi init 生成')
    return
  }
  saveConfigPathToLocal(configFilePath)

  const { config } = await loadConfig(configFilePath)
  parser(config).then((parseredData) => {
    genApi(parseredData)
    if (config.mock !== false) {
      genMock(parseredData, config.mock as any)
    }
  })
}
