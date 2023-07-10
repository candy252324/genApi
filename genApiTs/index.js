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
        console.log('\x1B[31m%s\x1B[0m', 'swagger地址访问异常👿')
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
  const count = apiList.reduce((pre, cur) => {
    return pre + cur.apis.length
  }, 0)
  console.log(`总共 ${count} 个接口生成中...`)
  writeApiToFile(apiList, { absOutputDir, prefix })
  writeInterfaceToFile(interfaces, absOutputDir)
}


/**
 * 接口写入
 * @param {*} apiList  [{namespace:"", apis:[]}]
 */
function writeApiToFile(apiList, options) {
  const outputDir = options.absOutputDir
  const prefix = options.prefix
  apiList.forEach(item => {
    let tplStr = `${httpTpl}`
    let apiStr = ''
    const namespace = item.namespace
    let fileUsedInterface = [] // 当前文件用到的 interface
    item.apis.forEach((api) => {
      const { name, url, method, summary, parameters, outputInterface } = api
      // 出参存在且不是简单类型
      if (
        outputInterface &&
        !fileUsedInterface.includes(outputInterface) &&
        !handleJsType(outputInterface)
      ) {
        fileUsedInterface.push(outputInterface)
      }
      // 入参存在且不是简单类型
       if (
         parameters && 
         parameters!=='any' &&
         !fileUsedInterface.includes(parameters) &&
         !handleJsType(parameters)
       ) {
         fileUsedInterface.push(parameters)
       }
      const _outputInterface = outputInterface ? `<${outputInterface}>` : ''

      // 有入参
      if (parameters && parameters.length) {
        apiStr += `
/** ${summary} */
export function ${name}  (data:${parameters}, config?: AxiosRequestConfig) :AxiosPromise${_outputInterface}{
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
    if (fileUsedInterface.length) {
      importStr += `import {`
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
