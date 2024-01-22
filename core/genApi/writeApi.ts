import path from 'node:path'

import { typeIsInterface, writeAndPrettify } from '../utils'
import { IParams, IApiGroup, IInterface, IParsered } from '../types'

/** api 写入 */
export function writeApi(
  apiGroup: IApiGroup[],
  allInterfaces: IInterface[],
  config: Pick<IParsered, 'outputDir' | 'apiBody' | 'httpTpl'>
) {
  const { outputDir, apiBody, httpTpl } = config
  apiGroup.forEach((item) => {
    const tplStr = `${httpTpl || ''}`
    let apiStr = ''
    let fileUsedInterface: string[] = [] // 当前文件用到的 interface
    item.apis.forEach((api) => {
      const { name, url, originUrl, method, summary, parameters, outputInterface } = api
      /** 是否是无效的 interface */
      let isInvalidInterface = false

      if (item.fileExt === 'ts') {
        // 出参存在且是interface
        if (outputInterface && typeIsInterface(outputInterface)) {
          // 没找到则处理成 any, 防止后端接口写了错误的 interface
          const findInterface = allInterfaces.find((i) => i.name === outputInterface)
          if (findInterface) {
            fileUsedInterface.push(outputInterface)
          } else {
            isInvalidInterface = true
          }
        }
        // 入参需要引入的interface
        ;(parameters || []).forEach((item) => !item.isSimpleJsType && item.type && fileUsedInterface.push(item.type))
      }

      const { p1, p2, p3 } = getParamStr(parameters)
      const apiBodyStr = apiBody({
        name,
        url,
        originUrl,
        method,
        summary,
        parameters,
        outputInterface: isInvalidInterface || !outputInterface ? 'any' : outputInterface, // 出参不存在，处理成any
        pstr1: p1,
        pstr2: p2,
        pstr3: p3,
      })
      apiStr += `${apiBodyStr}\n`
    })

    // interface 引入
    let importStr = ''
    fileUsedInterface = [...new Set(fileUsedInterface)]
    if (fileUsedInterface.length) {
      importStr += `import type {`
      fileUsedInterface.forEach((item, index) => {
        importStr += index === 0 ? `${item}` : `,${item}`
      })
      importStr += `} from './_interfaces.${item.fileExt}'`
    }
    const targetFile = path.join(outputDir, `${item.fileName}.${item.fileExt}`)
    writeAndPrettify(targetFile, `${tplStr}\n${importStr}\n${apiStr}`)
  })
}

/**
 * 处理入参
 * @param {*} parameters 数据格式如下
 * [{
 *  name: 'name',
 *  in: 'query',
 *  isArray: false,  // 是否是数组
 *  isSimpleJsType:false,  // 是否是简单js类型
 *  type: 'string',
 *  description: 'name',
 * }]
 */
function getParamStr(parameters: IParams[]) {
  // 过滤掉 in header 的参数
  const avaliableParam = (parameters || []).filter((item) => item.in !== 'header')
  // 无参数
  if (!avaliableParam.length) {
    return { p1: '', p2: '' }
  }

  let p1 = ''
  let p2 = ''
  let p3 = ''
  // 只有一个参数，且 in body
  if (avaliableParam.length === 1 && avaliableParam[0].in === 'body') {
    const onlyParam = avaliableParam[0]
    p1 = `data:${onlyParam.type}${onlyParam.isArray ? '[]' : ''}`
    p2 = 'data'
    p3 = ''
  }
  // 所有的参数都 in path
  else if (avaliableParam.every((p) => p.in === 'path')) {
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = cur.description?.trim()
      desc = desc.replace(/\n/g, ' ') // 去除注释中的换行符
      desc = desc && desc !== cur.name.trim() ? `\n// ${desc}\n` : '' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?:${cur.type}${cur.isArray ? '[]' : ''},`
    }, '')
    p1 = `data:{${str}}`
    p2 = ''
    p3 = `const {${avaliableParam.map((p) => p.name).join(',')}} =data`
  }
  // 所有的参数都 in query 或 in body
  else if (avaliableParam.every((p) => p.in === 'query' || p.in === 'body')) {
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = cur.description?.trim()
      desc = desc.replace(/\n/g, ' ') // 去除注释中的换行符
      desc = desc && desc !== cur.name.trim() ? `\n// ${desc}\n` : '' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?:${cur.type}${cur.isArray ? '[]' : ''},`
    }, '')
    p1 = `data:{${str}}`
    p2 = 'data'
    p3 = ''
  }
  // 存在 in path 的参数，且其它都 in query 或 in body
  else if (
    avaliableParam.some((p) => p.in == 'path') &&
    avaliableParam.filter((p) => p.in !== 'path').every((p) => p.in === 'query' || p.in === 'body')
  ) {
    const inPathParam = avaliableParam.filter((p) => p.in === 'path')
    const notInPathParam = avaliableParam.filter((p) => p.in !== 'path')
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = cur.description?.trim() || ''
      desc = desc.replace(/\n/g, ' ') // 去除注释中的换行符
      desc = desc && desc !== cur.name.trim() ? `\n// ${desc}\n` : '' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?:${cur.type}${cur.isArray ? '[]' : ''},`
    }, '')
    p1 = `data:{${str}}`
    p2 = ` {${notInPathParam.map((p) => p.name).join(',')}} `
    p3 = `const {${avaliableParam.map((p) => p.name).join(',')}} =data`
  }
  // 其他奇怪的或未知的情况，如 in formData
  else {
    p1 = 'data?:any'
    p2 = 'data'
    p3 = ''
  }
  return {
    p1,
    p2,
    p3,
  }
}
