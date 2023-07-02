const fs = require('node:fs')
const path = require('node:path')
const { exec } = require('node:child_process')
const axios = require('axios')
const apiConfig = require('./apiConfig')

const CWD = process.cwd()

const httpFn = apiConfig.httpFn
const httpTpl = apiConfig.httpTpl

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
        if (res.status === 200) {
          try {
            parseData(res.data, { absOutputDir, ignoreReg, prefix })
          } catch (error) {
            console.log(error)
          }
        }
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
  const apiList = handlePaths(jsonData.paths, ignoreReg)
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
      const apiModel = { name, url, method, summary, parameters }
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
    let apiStr = `${httpTpl}\n`
    const namespace = item.namespace
    item.apis.forEach(api => {
      const { name, url, method, summary, parameters } = api
      // 有入参
      if (parameters && parameters.length) {
        apiStr += `
/**
 * ${summary}
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function ${name}  (data, config) {
  return ${httpFn}.${method}('${prefix}${url}', data, config)
}\n`
      }
      // 没入参
      else {
        apiStr += `
/**
 * ${summary}
 * @param {*} config 可选，如：{headers:{}}
 */
export function ${name}(config){
  return ${httpFn}.${method}('${prefix}${url}', config)
}\n`
      }
    })

    fs.access(outputDir, err => {
      if (err) {
        // 若目标目录不存在，则创建
        fs.mkdirSync(outputDir, { recursive: true })
      }
      // 写入目标目录
      const targetFile = path.join(outputDir, `${namespace}.js`)
      fs.writeFileSync(targetFile, apiStr)

      // 格式化
      exec(`npx eslint --fix ${targetFile}`)
    })
  })
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
 * 获取接口名称, 需要处理一些特殊的路径
 * /api/variable/create 处理成 variableCreate
 * /api/deliverAddress/deleteAddress/{id} 处理成  deliverAddressDeleteAddressId
 * 以下两个接口会生成一样的名称，叫后端改
 * /api/enterprise/identification/inner/person/v1/{userId}/openAcct/callback
 * /api/enterprise/identification/inner/enterprise/v1/{enterpriseId}/openAcct/callback
 */
function getApiName(url) {
  let url2 = url.replace(/^\/api/, '') // 去除开头的 /api
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
