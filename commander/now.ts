import fs from 'node:fs'
import { DEFAULT_CONFIG_PATH } from '../core/constant'
import { loadConfig } from '../core/utils/loadConfig'
import { saveConfigPathToLocal } from '../core/parser/localData'
import { parser } from '../core/parser'
import { genApi } from '../core/genApi'
import { genMock } from '../core/genMock'
import { IApiConfig } from '../core/types'

export async function now(options) {
  const configFilePath = options?.config ?? DEFAULT_CONFIG_PATH // 配置文件绝对路径
  if (!fs.existsSync(configFilePath)) {
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
