import path from 'node:path'
import { IParsered } from '../types'
import { writeApi } from './writeApi'
import { writeInterface } from './writeInterface'

const CWD = process.cwd()

export async function genApi(data: IParsered[]) {
  await genParaller(data)
}

function genParaller(data: IParsered[]) {
  const fns = []
  data.forEach((item) => {
    fns.push(genStation(item))
  })
  return Promise.all(fns)
}

/** 生成单个站点的api */
function genStation(data: IParsered) {
  const outputDir = path.join(CWD, data.outputDir) // 文件输出目录
  const fileGroup = [] // [{fileName:"", apis:[]}]
  // 按文件所属文件名称给 api 分组
  ;(data.apis || []).forEach((item) => {
    const { fileName } = item
    const idx = fileGroup.findIndex((item) => item.fileName === fileName)
    if (idx > -1) {
      fileGroup[idx].apis.push(item)
    } else {
      fileGroup.push({ fileName, apis: [item] })
    }
  })

  console.log(`总共 ${(data.apis || []).length} 个接口生成中...`)
  writeApi(fileGroup, { outputDir, apiBody: data.apiBody, httpTpl: data.httpTpl })

  // 只有当后缀是 ts 时才生成 interface
  const ext = fileGroup[0]?.fileName?.split('.').pop()
  if (ext === 'ts') {
    writeInterface(data.interfaces, { outputDir })
  }
}
