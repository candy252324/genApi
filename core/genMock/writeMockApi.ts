import path from 'node:path'
import { handleJsType, writeAndPrettify } from '../utils'
import { getFieldMockStr } from './mockUtils'
import { IApiGroup } from '../types'

/**
 * mock写入
 * @param {*} apiGroup  [{fileName:"user", apis:[]}, {fileName:"role", apis:[]}]
 */
export function writeMockApi(apiGroup: IApiGroup[], { absOutputDir, fieldRules }) {
  apiGroup.forEach((item) => {
    const fileName = item.fileName
    let apiStr = ''
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
        const { isCustome, mockStr } = getFieldMockStr({ name, type: outputInterface, fieldRules })
        _outputInterface = isCustome ? mockStr : `\'${mockStr}\'`
      } else {
        _outputInterface = `${outputInterface}()`
      }
      const curStr = `${_summary}export const ${name} = () => Mock.mock(${_outputInterface})\n\n`
      apiStr += curStr
    })

    // interface 引入
    let importStr = `import Mock from 'better-mock'\n`
    fileUsedInterface = [...new Set(fileUsedInterface)]
    if (fileUsedInterface.length) {
      importStr += `import {`
      fileUsedInterface.forEach((item, index) => {
        importStr += index === 0 ? `${item}` : `,${item}`
      })
      importStr += `} from './_interfaces'\n`
    }
    const targetFile = path.join(absOutputDir, `${fileName}.js`)
    writeAndPrettify(targetFile, `${importStr}\n${apiStr}\n`)
  })
}
