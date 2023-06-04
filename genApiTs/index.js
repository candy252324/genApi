const fs = require('node:fs')
const path = require('node:path')
const { exec } = require('node:child_process')
const axios = require('axios')
const apiConfig = require('./apiConfig')
const upperCaseFirseLetter = require('./utils').upperCaseFirseLetter
const handleDefinitions = require('./definitions').handleDefinitions

const CWD = process.cwd()
let _definitions = {}

const httpFn = apiConfig.httpFn
const httpTpl = apiConfig.httpTpl

let allResInterfaces = [] // 所有出参的 interface
let uniQueResInterfaces = [] // 所有出参的 interface(已去重)

const apiList = apiConfig.apiList.filter(item => item.tag)
apiList.forEach(item => {
  const swaggerUrl = item.swaggerUrl
  const absOutputDir = path.join(CWD, item.outputDir)
  const ignoreReg = item.ignore
  const prefix = item.prefix || ''
  if (swaggerUrl.includes('http')) {
    // 从swagger url 读取数据
    axios
      .get(swaggerUrl)
      .then(res => {
        if (res.status === 200) parseData(res.data, { absOutputDir, ignoreReg, prefix })
      })
      .catch(() => {
        console.log('\x1B[31m%s\x1B[0m', '天! swagger 又挂了！！👿')
      })
  } else {
    // 从本地读取数据
    const filePath = path.resolve(CWD, swaggerUrl)
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw new Error(err)

      parseData(JSON.parse(data), { absOutputDir, ignoreReg, prefix })
    })
  }
})

function parseData(jsonData, { absOutputDir, ignoreReg, prefix }) {
  _definitions = jsonData.definitions || {}
  const apiList = handlePaths(jsonData.paths, ignoreReg)
  const finalDefinitions = handleDefinitions(_definitions)
  writeDeinitionToFile(finalDefinitions, absOutputDir)
  const count = apiList.reduce((pre, cur) => {
    return pre + cur.apis.length
  }, 0)
  console.log(`总共 ${count} 个接口生成中...`)
  writeToFile(apiList, { absOutputDir, prefix })
}

function handlePaths(paths, ignoreReg) {
  const apiList = [] // [{namespace:"", apis:[]}]
  for (const key in paths) {
    const isIgnore = ignoreReg && ignoreReg.test(key) // 不需要生成的 api
    if (!isIgnore) {
      const obj = paths[key]
      const url = getUrl(key)
      const name = getApiName(url)
      const namespace = getNamespace(url)
      const method = getMethod(obj)
      const summary = obj[method].summary // 接口注释
      const parameters = obj[method].parameters // 入参
      const idx = apiList.findIndex(item => item.namespace === namespace)
      const resSchemeOriginalRef = obj[method]?.responses['200']?.schema?.originalRef // 出参模型
      const outputInterface = `ResOf${upperCaseFirseLetter(name)}` // 出参 interface
      outputInterfaceRelatedDefinition(resSchemeOriginalRef, outputInterface)
      const apiModel = { name, url, method, summary, parameters, outputInterface }
      if (idx > -1) apiList[idx].apis.push(apiModel)
      else apiList.push({ namespace, apis: [apiModel] })
    }
  }
  return apiList
}

/**
 * 写入目标目录
 * @param {*} apiList  [{namespace:"", apis:[]}]
 */
function writeToFile(apiList, options) {
  const outputDir = options.absOutputDir
  const prefix = options.prefix
  apiList.forEach(item => {
    let tplStr = `${httpTpl}\n`
    let apiStr = ''
    const namespace = item.namespace
    let fileUsedInterface = [] // 当前文件用到的 interface
    item.apis.forEach(api => {
      const { name, url, method, summary, parameters, outputInterface } = api
      if (!fileUsedInterface.includes(outputInterface)) {
        fileUsedInterface.push(outputInterface)
      }

      // 有入参
      if (parameters && parameters.length) {
        apiStr += `
/** ${summary} */
export function ${name}  (data:any, config?: AxiosRequestConfig) :AxiosPromise<${outputInterface}>{
  return ${httpFn}.${method}('${prefix}${url}', data, config)
}\n`
      }
      // 没入参
      else {
        apiStr += `
/** ${summary} */
export function ${name}(config?: AxiosRequestConfig):AxiosPromise<${outputInterface}>{
  return ${httpFn}.${method}('${prefix}${url}', config)
}\n`
      }
    })

    // interface 引入
    let importStr = ''
    if (fileUsedInterface.length) {
      importStr += `import {`
      fileUsedInterface.forEach((item, index) => {
        importStr += index === 0 ? `${item}` : `,${item}`
      })
      importStr += `} from './_interfaces'`
    }

    fs.access(outputDir, err => {
      if (err) {
        // 若目标目录不存在，则创建
        fs.mkdirSync(outputDir, { recursive: true })
      }
      // 写入目标目录
      const targetFile = path.join(outputDir, `${namespace}.ts`)
      fs.writeFileSync(targetFile, `${tplStr}\n${importStr}\n${apiStr}`)

      // 格式化
      exec(`npx eslint --fix ${targetFile}`)
    })
  })
}

/** 写入所有 interface */
function writeDeinitionToFile(definitions, absOutputDir) {
  let str = ''
  definitions.forEach(item => {
    if (item.type === 'object') {
      str += `export interface ${item.name} {`
      if (item.properties && item.properties.length) {
        item.properties.forEach(it => {
          const description = it.description ? `/**${it.description}*/` : ''
          // 有注释
          if (description) {
            str += `
  ${description ? description : ''}
  ${it.name}: ${it.type}`
          }
          // 没注释
          else {
            str += `
  ${it.name}: ${it.type}`
          }
        })
      }
      str += '\n}\n'
    } else {
      console.log('还有不是对象的？？')
    }
  })
  const targetFile = path.join(absOutputDir, `_interfaces.ts`)
  fs.writeFileSync(targetFile, str)
}
/**
 * 获取接口地址
 * "/bankIcbc/zjzhPassAuto/{taskId}"   => `/bankIcbc/zjzhPassAuto/${taskId}`
 * "/api/sys-dict/v1/{type}/list/filter"  => `/api/sys-dict/v1/${type}/list/filter`
 */
function getUrl(url) {
  return url.replace(/{/g, '${')
}

/** 
 * 将接口出参和 defination 关联上
 *  "ApiResponse«AddGroupResp»": {
      "type": "object",
      "properties": {},
      "title": "ApiResponse«AddGroupResp»"
      "relationInterface":[]  // 目的是加上这个属性，用于存储接口出参的interface
    },
 */
function outputInterfaceRelatedDefinition(resSchemeOriginalRef, outputInterface) {
  Object.keys(_definitions).forEach(key => {
    if (key === resSchemeOriginalRef) {
      if (_definitions[key].relationInterface) {
        _definitions[key].relationInterface.push(outputInterface)
      } else {
        _definitions[key].relationInterface = [outputInterface]
      }
    }
  })
}
/**
 * 获取接口名称, 需要处理一些特殊的路径
 * /api/variable/create 处理成 variableCreate
 * /api/deliverAddress/deleteAddress/{id} 处理成  deliverAddressDeleteAddressId
 * 以下两个接口会生成一样的名称，叫后端改
 * /api/enterprise/identification/inner/person/v1/{userId}/openAcct/callback
 * /api/enterprise/identification/inner/enterprise/v1/{enterpriseId}/openAcct/callback
 */
function getApiName(url) {
  let url2 = url
  // let url2 = url.replace(/^\/api/, '') // 去除开头的 /api
  url2 = url2.replace(/[\$\{\}-]/g, '') // 去除可能存在的短杠、左右花括号和$
  return url2.replace(/\/\w/g, (matched, index) => {
    const letter = matched.replace('/', '')
    return index === 0 ? letter : letter.toUpperCase()
  })
}
/**
 * 获取接口所属文件名称
 * 将 /api/variable/create 转化为 variable
 */
function getNamespace(url) {
  const arr = url.split('/')
  return arr.find(item => item && item !== 'api')
}
/**
 * 获取接口方法
 */
function getMethod(obj) {
  const methods = [
    'get',
    'post',
    'put',
    'head',
    'delete',
    'connect',
    'options',
    'trace',
    'mkcol',
    'copy',
    'move',
    'lock',
    'unlock',
    'patch',
  ]
  const find = methods.find(method => !!obj[method] || !!obj[method.toUpperCase()])
  return find || 'unknow'
}
