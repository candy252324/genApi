import fs from 'node:fs'
import { getConfigPathFromLoal } from '../core/parser/localData'
import { loadConfig } from '../core/utils/loadConfig'
import { createMockServer } from '../core/genMock/mockServer'
import { UserConfig } from '../core/types'

export async function mockServer() {
  const configFilePath = getConfigPathFromLoal()
  if (!fs.existsSync(configFilePath)) {
    console.log('缺少配置文件，执行 genapi init 生成')
    return
  }
  // cjh todo 处理没有本地数据的情况
  const { config } = (await loadConfig(configFilePath)) as { config: UserConfig }
  createMockServer(config?.mock as any)
}
