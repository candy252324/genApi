import { loadConfig, getConfigPath } from '../core/utils/config'
import { saveConfigPathToLocal } from '../core/parser/localData'
import { parser } from '../core/parser'
import { genApi } from '../core/genApi'
import { genMock } from '../core/genMock'
import { UserConfig } from '../core/types'

export async function now(options: {
  /** 用户传入的 config 配置文件路径 */
  config: string
  /** 是否生成 mock 数据 */
  mock: boolean
}) {
  const configFilePath = getConfigPath(options.config)
  if (!configFilePath) return

  saveConfigPathToLocal(configFilePath)
  const { config } = (await loadConfig(configFilePath)) as { config: UserConfig }
  parser(config).then((parseredData) => {
    genApi(parseredData)
    if (options.mock) {
      genMock(parseredData, config.mock)
    }
  })
}
