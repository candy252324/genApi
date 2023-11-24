import path from 'node:path'
import { writeMockIndex } from './writeMockIndex'
import { writeMockInterface } from './writeMockInterface'
import { writeMockApi } from './writeMockApi'
import { IParsered, IMock, IApiGroup } from '../types'
import { MOCK_OUTPUT_DIR } from '../constant'
import { groupApiByFileName, cleanDir } from '../utils'

export async function genMock(data: IParsered[], mockConfig: IMock) {
  console.log(`mock 数据生成中...`)
  cleanDir(MOCK_OUTPUT_DIR)
  await genMockParaller(data, mockConfig)
}

/** 生成所有站点的 mock 数据 */
function genMockParaller(data: IParsered[], mockConfig: IMock) {
  const fn: any[] = []
  const groupApiList: { outputDir: string; apiGroup: IApiGroup[] }[] = [] // 所有站点的 apiGroup 数据
  data.forEach((item) => {
    const apiGroup = groupApiByFileName(item.apis)
    groupApiList.push({ outputDir: item.outputDir, apiGroup })
    fn.push(genStationMock(item, apiGroup, mockConfig))
  })
  // 将所有站点的 mock 接口写入入口文件 mock/index.js
  fn.push(writeMockIndex(groupApiList, { mockRootPath: MOCK_OUTPUT_DIR }))
  return Promise.all(fn)
}

/** 生成单个站点的 mock数据 */
function genStationMock(data: IParsered, apiGroup: IApiGroup[], mockConfig: IMock) {
  const outputDir = path.join(MOCK_OUTPUT_DIR, data.outputDir)
  writeMockApi(apiGroup, { absOutputDir: outputDir, fieldRules: mockConfig?.fieldRules })
  writeMockInterface(data.interfaces, { absOutputDir: outputDir, fieldRules: mockConfig?.fieldRules })
  writeMockInterface(data.interfaces, { absOutputDir: outputDir, cmd: true, fieldRules: mockConfig?.fieldRules }) // cmd格式， 用于 mock server
}
