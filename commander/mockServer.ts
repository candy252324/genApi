import fs from 'node:fs'
import { getConfigPathFromLoal } from '../core/parser/localData'
import { loadConfig } from '../core/utils/loadConfig'
import { createMockServer } from '../core/genMock/mockServer'
import { IApiConfig } from '../core/types'

export async function mockServer() {
  const configFilePath = getConfigPathFromLoal()
  if (!fs.existsSync(configFilePath)) {
    console.log('缺少配置文件，执行 genapi init 生成')
    return
  }

  const { config } = (await loadConfig(configFilePath)) as { config: IApiConfig }
  createMockServer(config?.mock as any)
}
