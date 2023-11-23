import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import axios from 'axios'
import { writeMockIndex } from './writeMockIndex'
import { writeMockInterface } from './writeMockInterface'
import { writeMockApi } from './writeMockApi'
import { IParsered, IApiConfig, IMock } from '../types'
import { MOCK_OUTPUT_DIR } from '../constant'

export async function genMock(data: IParsered[], mockConfig: IMock) {
  console.log(`mock 数据生成中...`)
  await genMockParaller(data, mockConfig)
}

/** 生成所有站点的 mock 数据 */
function genMockParaller(data: IParsered[], mockConfig: IMock) {
  const fn = []
  data.forEach((item) => {
    fn.push(genStationMock(item, mockConfig))
  })
  return Promise.all(fn)
}

/** 生成单个站点的 mock数据 */
function genStationMock(data: IParsered, mockConfig: IMock) {
  const apiGroup = [] // [{fileName:"", apis:[]}]
  // 按文件所属文件名称给 api 分组
  ;(data.apis || []).forEach((item) => {
    const { fileName } = item
    const idx = apiGroup.findIndex((item) => item.fileName === fileName)
    if (idx > -1) {
      apiGroup[idx].apis.push(item)
    } else {
      apiGroup.push({ fileName, apis: [item] })
    }
  })

  const outputDir = path.join(MOCK_OUTPUT_DIR, data.outputDir)
  writeMockIndex(apiGroup, { outputDir: data.outputDir })
  writeMockApi(apiGroup, { absOutputDir: outputDir })
  writeMockInterface(data.interfaces, outputDir)
  writeMockInterface(data.interfaces, outputDir, true) // cmd格式， 用于 mock server
}
