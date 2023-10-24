/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')
const { exec } = require('node:child_process')
const axios = require('axios')

const { cleanDir, handleJsType, handleWeirdName } = require('../utils')
const { handleApiModel } = require('../genApi/handleApiModel')
const { genInterface } = require('../genApi/handleInterface')

const CWD = process.cwd()
const mockPath = path.join(__dirname, '../../', 'mock')
let apiConfig = {}

/**
 * // 解析过的所有的api站点的数据
 * [{
 *  index:0, // 用于排序
 *  outputDir:'/src/api',
 *  apiList:[{namespace:"user", apis:[]}, {namespace:"role", apis:[]}]
 * }]
 */
let allData = []

function genMock(config) {
  apiConfig = config
  allData = []
  cleanDir(mockPath)
  const apiList = apiConfig.apiList.filter((item) => item.tag)
  apiList.forEach((item, index) => {
    readSwagger(item)
      .then((apiList) => {
        allData.push({ index, outputDir: item.outputDir, apiList })
      })
      .catch(() => {
        allData.push({}) // 解析失败
      })
      .finally(() => {
        if (allData.length === apiList.length) {
          // 所有站点的 swagger 都解析完成，开始写入 index.js
          writeIndexToFile(allData)
        }
      })
  })
}

function readSwagger(item) {
  return new Promise((resolve, reject) => {
    const swaggerUrl = item.swaggerUrl
    const configOptions = {
      absOutputDir: path.join(mockPath, item.outputDir),
      ignore: item.ignore,
    }
    if (swaggerUrl.includes('http')) {
      // 从swagger url 读取数据
      axios
        .get(swaggerUrl)
        .then((res) => {
          if (res.status === 200) {
            try {
              const apiList = parseData(res.data, configOptions)
              resolve(apiList)
            } catch (error) {
              console.log(error)
              reject()
            }
          }
        })
        .catch(() => {
          console.log('\x1B[31m%s\x1B[0m', 'swagger地址访问异常👿')
          reject()
        })
    } else {
      // 从本地读取数据
      const filePath = path.resolve(CWD, swaggerUrl)
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject()
          throw new Error(err)
        }

        const apiList = parseData(JSON.parse(data), configOptions)
        resolve(apiList)
      })
    }
  })
}

function parseData(jsonData, configOptions) {
  const { absOutputDir, ignore } = configOptions
  const apiList = handleApiModel(jsonData.paths, { ignore })
  const interfaces = genInterface(jsonData.definitions || {})

  console.log(`mock 数据生成中...`)
  writeMockToFile(apiList, { interfaces, absOutputDir })
  writeInterfaceToFile(interfaces, absOutputDir)
  return apiList
}

/** 在 mock/index.js 中写入内容 */
function writeIndexToFile() {
  let firstLine = "import Mock from 'mockjs'\n"
  const extraStr = `
Mock.setup({
  timeout: "200-500"
})\n
  `
  let imortStr = ''
  let mockStr = ''
  /**
   * allData 数据格式
   * [{
   *  index:0, // 用于排序
   *  outputDir:'/src/api',
   *  apiList:[{namespace:"user", apis:[]}, {namespace:"role", apis:[]}]
   * }]
   */
  const sortedData = allData.sort((a, b) => a.index - b.index)
  sortedData.forEach((item) => {
    if (item.outputDir && item.apiList && item.apiList.length) {
      const outputDir = item.outputDir.replace(/^\//, '') // 去除开头的 /, 将 '/src/api' 处理成 'src/api'
      // 将 src/api 处理成 srcApi
      const name = outputDir.replace(/\/\w/g, (matched, index) => {
        const letter = matched.replace('/', '')
        return index === 0 ? letter : letter.toUpperCase()
      })

      item.apiList.forEach((obj) => {
        let matchPath = handleWeirdName(name + obj.namespace) // 如： srcApi + user
        imortStr += `import * as ${matchPath} from './${outputDir}/${obj.namespace}.js'\n`
        ;(obj.apis || []).forEach((api) => {
          const _url = api.url.replace(/\//g, '\\/')
          mockStr += `Mock.mock(/${_url}/, '${api.method}', ${matchPath}.${api.name})\n`
        })
      })
    }
  })

  const finaStr = `${firstLine}${extraStr}${imortStr}${mockStr}`

  fs.access(mockPath, (err) => {
    if (err) {
      // 若目标目录不存在，则创建
      fs.mkdirSync(mockPath, { recursive: true })
    }
    // 写入目标目录
    const targetFile = path.join(mockPath, 'index.js')
    fs.writeFileSync(targetFile, `${finaStr}\n`)

    // 格式化
    // console.log(`格式化 ${targetFile}`)
    exec(`prettier --write ${targetFile}`)
  })
}

/**
 * mock写入
 * @param {*} apiList  [{namespace:"user", apis:[]}, {namespace:"role", apis:[]}]
 */
function writeMockToFile(apiList, { interfaces, absOutputDir }) {
  apiList.forEach((item) => {
    const namespace = item.namespace
    let mockStr = `import Mock from 'mockjs'\n\n`
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
        _outputInterface = getFieldMockStr({ name, type: outputInterface })
      } else {
        _outputInterface = `${outputInterface}()`
      }
      const curStr = `${_summary}export const ${name} = () => ${_outputInterface}\n\n`
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
      const targetFile = path.join(absOutputDir, `${namespace}.js`)
      fs.writeFileSync(targetFile, `${importStr}\n${mockStr}\n`)

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
    str += `export function ${item.name}() {`
    if (item?.properties && item.properties?.length) {
      let mockRes = ''
      item.properties.forEach((it) => {
        mockRes += getInterfaceMock(it)
      })
      str += `\nreturn ${mockRes ? '{\n' + mockRes + '\n}' : ''}`
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

/** 生成 mock
 @param model 格式如下
   * {
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object", 目前看到的都是 'object'
   *    properties:[{
   *      name:"",
   *      isArray:false,  // 是否是数组
   *      isSimpleJsType:false, // 是否是简单 js 类型, 如 number、string 等
   *      type:"",        // 类型，如 string, number, boolean , UserInterface
   *      description:""  // 注释
   *    }]
   *  }
   */
function getInterfaceMock(model) {
  const { name, type, isSimpleJsType, isArray } = model

  let mockStr = ''
  // 如果是简单类型
  if (type === 'string' || type === 'number' || type === 'boolean' || type === 'any' || type === 'File') {
    mockStr = getFieldMockStr({ name, type })
  } else if (type === 'object') {
    mockStr = '{}'
  } else {
    mockStr = `${type}()`
  }
  if (isArray) {
    return `\"${name}|5-20\": [${mockStr}],\n`
  } else {
    return `${name}: ${mockStr},\n`
  }
}

/** 获取简单数据类型的 mock */
function getFieldMockStr({ name, type }) {
  let s = ''
  if (type === 'number') {
    s = '@integer(3,1000)'
  } else if (type === 'string' || type === 'any') {
    s = '@string(5,1000)'
  } else if (type === 'boolean') {
    s = '@boolean()'
  } else if (type === 'File') {
    s = 'file'
  } else {
    console.log('未处理的类型？')
    s = '@string(5,1000)'
  }
  return `\"${s}\"`
}

module.exports = {
  genMock,
}
