import path from 'node:path'
import fs from 'node:fs'
import axios from 'axios'
import { IApi, IApiConfig } from '../type'

const CWD = process.cwd()

export function parser(apiConfig: IApiConfig) {
  validateApiConfig(apiConfig)
  const apiList: IApi[] = apiConfig.apiList
    .filter((item) => item.tag)
    .map((item) => {
      return {
        ...item,
        apiBody: item.apiBody || apiConfig.apiBody,
        fileName: item.fileName || apiConfig.fileName,
      }
    })

  parseParaller(apiList).then((res) => {
    console.log('全部解析完成')
  })
}

function parseParaller(apiList: IApi[]) {
  const fns = []
  apiList.forEach((item) => {
    fns.push(parseFn(item))
  })
  return Promise.all(fns)
}

async function parseFn(apiStation: IApi) {
  const swaggerJson = await readSwagger(apiStation.swaggerUrl)
  return swaggerJson
}

function readSwagger(swaggerUrl: string) {
  return new Promise((resolve, reject) => {
    if (swaggerUrl.includes('http')) {
      // 从swagger url 读取数据
      axios
        .get(swaggerUrl)
        .then((res) => {
          if (res.status === 200) {
            try {
              resolve(res.data)
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
      fs.readFile(filePath, 'utf-8', (err: any, data) => {
        if (err) throw new Error(err)
        resolve(JSON.parse(data))
      })
    }
  })
}

/** 校验 apiConfig  */
function validateApiConfig(apiConfig: IApiConfig) {
  const apiList = apiConfig.apiList.filter((item) => item.tag)
  if (!apiConfig.apiBody && !apiList.every((item) => !!item.apiBody)) {
    throw new Error('请传入 apiBody , 必须是一个函数')
  }
  if (apiList.some((item) => !item.swaggerUrl)) {
    throw new Error('请传入 swaggerUrl')
  }
}
