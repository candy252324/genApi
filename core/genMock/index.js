/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')
const { exec } = require('node:child_process')
const axios = require('axios')

const { cleanDir } = require('../utils')
const { handleApiModel } = require('../genApi/handleApiModel')
const { genInterface } = require('../genApi/handleInterface')

const CWD = process.cwd()
const mockPath = path.join(__dirname, '../../', 'mock')
let apiConfig = {}

/**
 * // 解析过的所有的api站点的数据
 * [{
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
  apiList.forEach((item) => {
    readSwagger(item)
      .then((apiList) => {
        allData.push({ outputDir: item.outputDir, apiList })
      })
      .catch(() => {
        allData.push({}) // 解析失败
      })
      .finally(() => {
        if (allData.length === apiList.length) {
          // 所有站点的 swagger 都解析完成，开始写入 index
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
      ignoreReg: item.ignore,
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
  const { absOutputDir, ignoreReg } = configOptions
  const apiList = handleApiModel(jsonData.paths, { ignoreReg })
  const interfaces = genInterface(jsonData.definitions || {})

  console.log(`mock 数据生成中...`)
  writeMockToFile(apiList, { interfaces, absOutputDir })
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
   *  outputDir:'/src/api',
   *  apiList:[{namespace:"user", apis:[]}, {namespace:"role", apis:[]}]
   * }]
   */
  allData.forEach((item) => {
    if (item.outputDir && item.apiList && item.apiList.length) {
      const outputDir = item.outputDir.replace(/^\//, '') // 去除开头的 /, 将 '/src/api' 处理成 'src/api'
      // 将 src/api 处理成 srcApi
      const name = outputDir.replace(/\/\w/g, (matched, index) => {
        const letter = matched.replace('/', '')
        return index === 0 ? letter : letter.toUpperCase()
      })

      item.apiList.forEach((obj) => {
        const matchPath = name + obj.namespace // 如： srcApi + user
        imortStr += `import * as ${matchPath} from './${outputDir}/${obj.namespace}.js'\n`
        ;(obj.apis || []).forEach((api) => {
          mockStr += `Mock.mock('${api.url}', '${api.method}', ${matchPath}.${api.name})\n`
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
    let mockStr = `import Mock from 'mockjs'\n`
    item.apis.forEach((api) => {
      const { name, url, method, summary, parameters, outputInterface } = api
      const returnStr = getReturnStr(outputInterface, interfaces)
      const curStr = `
export default {
  ${name}:()=>{
    return ${returnStr || ''}
  }
}
      `
      mockStr += curStr
    })
    fs.access(absOutputDir, (err) => {
      if (err) {
        // 若目标目录不存在，则创建
        fs.mkdirSync(absOutputDir, { recursive: true })
      }
      // 写入目标目录
      const targetFile = path.join(absOutputDir, `${namespace}.js`)
      fs.writeFileSync(targetFile, `${mockStr}\n`)

      // 格式化
      // console.log(`格式化 ${targetFile}`)
      exec(`prettier --write ${targetFile}`)
    })
  })
}

/** 处理出参
 @param allInterfaces 格式如下
   * [{
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object"
   *    properties:[{
   *      name:"",
   *      type:"",        // 类型，如 string
   *      description:""  // 注释
   *    }]
   *  }]
   */
function getReturnStr(outputInterface, allInterfaces) {
  let find = allInterfaces.find((item) => item.name == outputInterface)
  if (find) {
    const body = find.properties.reduce((pre, cur) => {
      const mockStr = getMockStr({ type: cur.type, name: cur.name })
      return `${pre} ${cur.name}:'${mockStr}'\n`
    }, '')
    return `{${body}}`
  } else {
    return ''
  }
}

function getMockStr({ type, name }) {
  if (type === 'number') {
    return '@integer(3,1000)'
  } else if (type === 'string') {
    return '@string(5,1000)'
  } else if (type === 'boolean') {
    return '@boolean()'
  } else if (type === 'array') {
    return '[]'
  } else {
    console.log('未匹配的mock', type)
    return ''
  }
}

module.exports = {
  genMock,
}
