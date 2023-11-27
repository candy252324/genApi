import path from 'node:path'
import { writeMockInterface } from './writeMockInterface'
import { IParsered, IMock } from '../types'
import { MOCK_OUTPUT_DIR } from '../constant'
import { cleanDir } from '../utils'

export async function genMock(data: IParsered[], mockConfig: IMock) {
  console.log(`mock 数据生成中...`)
  cleanDir(MOCK_OUTPUT_DIR)
  await genMockParaller(data, mockConfig)
}

/** 生成所有站点的 mock 数据 */
function genMockParaller(data: IParsered[], mockConfig: IMock) {
  const fn: any[] = []
  data.forEach((item) => {
    fn.push(genStationMock(item, mockConfig))
  })
  return Promise.all(fn)
}

/** 生成单个站点的 mock数据 */
function genStationMock(data: IParsered, mockConfig: IMock) {
  const outputDir = path.join(MOCK_OUTPUT_DIR, data.stationFlag) // xxx/mock/station0
  writeMockInterface(data.interfaces, { outputDir, fieldRules: mockConfig?.fieldRules })
}
