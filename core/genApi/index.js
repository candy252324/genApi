/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')
const { exec } = require('node:child_process')
const axios = require('axios')
const { upperCaseFirseLetter, handleJsType } = require('../utils.js')

const { handleApiModel } = require('./handleApiModel')
const { genInterface } = require('./handleInterface')

const CWD = process.cwd()
let apiConfig = {}

function genApi(config) {
  apiConfig = config
  const apiList = apiConfig.apiList.filter((item) => item.tag)

  if (!apiConfig.apiBody && !apiList.every((item) => !!item.apiBody)) {
    throw new Error('请传入api body, 必须是一个函数')
  }

  apiList.forEach((item) => {
    const swaggerUrl = item.swaggerUrl
    // const configOptions = {
    //   absOutputDir: path.join(CWD, item.outputDir),
    //   ignore: item.ignore,
    //   apiBody: item.apiBody,
    // }
    const configOptions = {
      ...item,
      absOutputDir: path.join(CWD, item.outputDir),
    }
    if (swaggerUrl.includes('http')) {
      // 从swagger url 读取数据
      axios
        .get(swaggerUrl)
        .then((res) => {
          if (res.status === 200) {
            try {
              parseData(res.data, configOptions)
            } catch (error) {
              console.log(error)
            }
          }
        })
        .catch(() => {
          console.log('\x1B[31m%s\x1B[0m', 'swagger地址访问异常👿')
        })
    } else {
      // 从本地读取数据
      const filePath = path.resolve(CWD, swaggerUrl)
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw new Error(err)

        parseData(JSON.parse(data), configOptions)
      })
    }
  })
}

function parseData(jsonData, configOptions) {
  const { absOutputDir, ignore, apiBody, placeToFile } = configOptions
  const apiList = handleApiModel(jsonData.paths, { ignore, placeToFile })
  const interfaces = genInterface(jsonData.definitions || {})
  const count = apiList.reduce((pre, cur) => {
    return pre + cur.apis.length
  }, 0)
  console.log(`总共 ${count} 个接口生成中...`)
  writeApiToFile(apiList, configOptions)
  writeInterfaceToFile(interfaces, absOutputDir)
}

/**
 * 接口写入
 * @param {*} apiList  [{namespace:"", apis:[]}]
 */
function writeApiToFile(apiList, options) {
  const outputDir = options.absOutputDir
  const itemApiBody = options.apiBody
  // return
  apiList.forEach((item) => {
    let tplStr = `${apiConfig.httpTpl || ''}`
    let apiStr = ''
    const namespace = item.namespace
    let fileUsedInterface = [] // 当前文件用到的 interface
    item.apis.forEach((api) => {
      const { name, url, method, summary, parameters, outputInterface } = api
      // 出参存在且不是简单类型
      if (outputInterface && !handleJsType(outputInterface)) {
        fileUsedInterface.push(outputInterface)
      }
      // 入参需要引入的interface
      ;(parameters || []).forEach((item) => !item.isSimpleJsType && item.type && fileUsedInterface.push(item.type))

      const { p1, p2 } = getParamStr(parameters)
      const apiBodyFn = itemApiBody || apiConfig.apiBody // 优先取每个swagger站点上单独配置的 apiBody
      const apiBodyStr = apiBodyFn({
        name,
        url,
        method,
        summary,
        parameters,
        outputInterface,
        pstr1: p1,
        pstr2: p2,
      })
      if (!apiBodyStr) {
        throw new Error('apiBody缺少返回值！')
      }
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
      importStr += `} from './_interfaces'`
    }

    fs.access(outputDir, (err) => {
      if (err) {
        // 若目标目录不存在，则创建
        fs.mkdirSync(outputDir, { recursive: true })
      }
      // 写入目标目录
      const targetFile = path.join(outputDir, `${namespace}.ts`)
      fs.writeFileSync(targetFile, `${tplStr}\n${importStr}\n${apiStr}`)

      // 格式化
      // console.log(`格式化 ${targetFile}`)
      exec(`prettier --write ${targetFile}`)
    })
  })
}

/** interface 写入 */
function writeInterfaceToFile(definitions, absOutputDir) {
  let str = ''
  definitions.forEach((item, index) => {
    str += `export interface ${item.name} {`
    if (item?.properties && item.properties?.length) {
      item.properties.forEach((it) => {
        const description = it.description ? `/** ${it.description} */` : ''
        // 有注释
        if (description) {
          str += `
  ${description ? description : ''}
  ${it.name}?: ${it.type}${it.isArray ? '[]' : ''}`
        }
        // 没注释
        else {
          str += `
  ${it.name}?: ${it.type}${it.isArray ? '[]' : ''}`
        }
      })
    }
    str += '\n}\n'
  })
  const targetFile = path.join(absOutputDir, `_interfaces.ts`)
  fs.access(absOutputDir, (err) => {
    if (err) {
      // 若目标目录不存在，则创建
      fs.mkdirSync(absOutputDir, { recursive: true })
    }
    fs.writeFileSync(targetFile, str)
  })
}

/**
 *
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
function getParamStr(parameters) {
  // 过滤掉 path 和 header 中的参数
  const avaliableParam = (parameters || []).filter((item) => item.in !== 'path' && item.in !== 'header')
  // 无参数
  if (!avaliableParam.length) {
    return { p1: '', p2: '' }
  }
  let p1 = ''
  let p2 = ''
  // 只有一个参数，且 in body
  if (avaliableParam.length === 1 && avaliableParam[0].in === 'body') {
    const onlyParam = avaliableParam[0]
    p1 = `data:${onlyParam.type}${onlyParam.isArray ? '[]' : ''}`
    p2 = 'data'
  }
  // 所有的参数都 in query 或 in body
  else if (avaliableParam.every((p) => p.in === 'query' || p.in === 'body')) {
    const str = avaliableParam.reduce((pre, cur) => {
      let desc = cur.description?.trim()
      desc = desc && desc !== cur.name.trim() ? `\n// ${desc}\n` : '' // 有注释且和名字不一样
      return `${pre}${desc}${cur.name}?:${cur.type}${cur.isArray ? '[]' : ''},`
    }, '')
    p1 = `data:{${str}}`
    p2 = 'data'
  }
  // 其他奇怪的或未知的情况，如 in formData
  else {
    p1 = 'data?:any'
    p2 = 'data'
  }
  return {
    p1,
    p2,
  }
}

module.exports = {
  genApi,
}
