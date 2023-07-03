const fs = require('node:fs')
const path = require('node:path')
const { exec } = require('node:child_process')
const axios = require('axios')
const apiConfig = require('./apiConfig')
const { upperCaseFirseLetter, handleJsType } = require('./utils.js')


const { genApi } =require('./genApi')
const { genInterface } = require('./genInterface')



const CWD = process.cwd()
const httpFn = apiConfig.httpFn
const httpTpl = apiConfig.httpTpl

const apiList = apiConfig.apiList.filter(item => item.tag)
apiList.forEach(item => {
  const swaggerUrl = item.swaggerUrl
  const absOutputDir = path.join(CWD, item.outputDir)
  const ignoreReg = item.ignore
  const prefix = item.prefix || ''
  const excludeBigModel = item.excludeBigModel || ''
  if (swaggerUrl.includes('http')) {
    // 从swagger url 读取数据
    axios
      .get(swaggerUrl)
      .then(res => {
        if (res.status === 200){
          try {
            parseData(res.data, {
              absOutputDir,
              ignoreReg,
              prefix,
              excludeBigModel,
            })
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

      parseData(JSON.parse(data), {
        absOutputDir,
        ignoreReg,
        prefix,
        excludeBigModel,
      })
    })
  }
})

function parseData(
  jsonData,
  { absOutputDir, ignoreReg, prefix, excludeBigModel }
) {
  const apiList = genApi(jsonData.paths, ignoreReg)
  const interfaces = genInterface(jsonData.definitions || {}, { excludeBigModel })
  writeDeinitionToFile(interfaces, absOutputDir)
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
      const idx = apiList.findIndex((item) => item.namespace === namespace)
      const resScheme = obj[method]?.responses['200']?.schema // 出参模型
      let outputInterface = '' // 出参 interface
      // 如果存在出参模型
      if (resScheme?.originalRef) {
        outputInterface = handleInterfaceName(resScheme.originalRef)
        // outputInterface = `ResOf${upperCaseFirseLetter(name)}`
        // outputInterfaceRelatedDefinition(resScheme.originalRef, outputInterface)
      }
      // 出参是个简单类型
      else if (resScheme?.type) {
        outputInterface = handleJsType(resScheme.type)
      }else{
        // console.log('该接口不存在出参')
      }
      const apiModel = {
        name,
        url,
        method,
        summary,
        parameters,
        outputInterface,
      }
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
    let tplStr = `${httpTpl}`
    let apiStr = ''
    const namespace = item.namespace
    let fileUsedInterface = [] // 当前文件用到的 interface
    item.apis.forEach(api => {
      const { name, url, method, summary, parameters, outputInterface } = api
      if (!fileUsedInterface.includes(outputInterface)) {
        fileUsedInterface.push(outputInterface)
      }
      const _outputInterface=outputInterface?`<${outputInterface}>`:''

      // 有入参
      if (parameters && parameters.length) {
        apiStr += `
/** ${summary} */
export function ${name}  (data:any, config?: AxiosRequestConfig) :AxiosPromise${_outputInterface}{
  return ${httpFn}.${method}('${prefix}${url}', data, config)
}\n`
      }
      // 没入参
      else {
        apiStr += `
/** ${summary} */
export function ${name}(config?: AxiosRequestConfig):AxiosPromise${_outputInterface}{
  return ${httpFn}.${method}('${prefix}${url}', config)
}\n`
      }
    })

    // interface 引入
    let importStr = ''
    if (needImportInterface(fileUsedInterface)) {
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
      console.log(`格式化 ${targetFile}`)
      exec(`prettier --write ${targetFile}`)
    })
  })
}

/** 判断是否需要引入interface */
function needImportInterface(fileUsedInterface = []) {
  let has = false
  fileUsedInterface.forEach((usedInterfaceName) => {
    if (!has) {
      has = !handleJsType(usedInterfaceName)
    }
  })
  return has
}

/** 写入所有 interface */
function writeDeinitionToFile(definitions, absOutputDir) {
  let str = ''
  definitions.forEach(item => {
    if (item.type === 'object') {
      str += `export interface ${item.name} {`
      if (item.properties && item.properties.length) {
        item.properties.forEach(it => {
          const description = it.description ? `/** ${it.description} */` : ''
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
  fs.access(absOutputDir, (err) => {
    if (err) {
      // 若目标目录不存在，则创建
      fs.mkdirSync(absOutputDir, { recursive: true })
    }
    fs.writeFileSync(targetFile, str)
  })

}
