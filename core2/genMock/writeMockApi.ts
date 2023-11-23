import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import { handleJsType } from '../utils'
import { getFieldMockStr } from './mockUtils'
import { IApiModel } from '../types'

/**
 * mock写入
 * @param {*} apiGroup  [{fileName:"user.ts", apis:[]}, {fileName:"role", apis:[]}]
 */
export function writeMockApi(apiGroup: { fileName: string; apis: IApiModel[] }[], { absOutputDir }) {
  apiGroup.forEach((item) => {
    const fileName = item.fileName
    let mockStr = `import Mock from 'better-mock'\n\n`
    let fileUsedInterface = [] // 当前文件用到的 interface
    item.apis.forEach((api) => {
      const { name, url, method, summary, parameters, outputInterface } = api
      // 出参存在且不是简单类型
      if (outputInterface && !handleJsType(outputInterface)) {
        fileUsedInterface.push(outputInterface)
      }
      const _summary = summary ? `/** ${summary} */\n` : ''
      let _outputInterface = ''
      // 不存在出参
      if (!outputInterface) {
        _outputInterface = '""'
      }
      // 出参是简单类型
      else if (handleJsType(outputInterface)) {
        const { isCustome, mockStr } = getFieldMockStr({ name, type: outputInterface })
        _outputInterface = isCustome ? mockStr : `\'${mockStr}\'`
      } else {
        _outputInterface = `${outputInterface}()`
      }
      const curStr = `${_summary}export const ${name} = () => Mock.mock(${_outputInterface})\n\n`
      mockStr += curStr
    })

    // interface 引入
    let importStr = ''
    fileUsedInterface = [...new Set(fileUsedInterface)]
    if (fileUsedInterface.length) {
      importStr += `import {`
      fileUsedInterface.forEach((item, index) => {
        importStr += index === 0 ? `${item}` : `,${item}`
      })
      importStr += `} from './_interfaces'`
    }

    fs.access(absOutputDir, (err) => {
      if (err) {
        // 若目标目录不存在，则创建
        fs.mkdirSync(absOutputDir, { recursive: true })
      }
      // 写入目标目录
      const _fileName = fileName.replace(/\.(ts|js)$/, '') // 去除 .ts 或 .js 后缀
      const targetFile = path.join(absOutputDir, `${_fileName}.js`)
      fs.writeFileSync(targetFile, `${importStr}\n${mockStr}\n`)

      // 格式化
      exec(`prettier --write ${targetFile}`)
    })
  })
}
