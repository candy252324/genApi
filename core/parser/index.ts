import { IApiStation, IApiConfig, IApiModel, IInterface, IParsered } from '../types'
import { handleApiModel } from './handleApiModel'
import { handleInterface } from './handleInterface'
import { readSwagger } from './readSwagger'
import { saveParseredDataToLocal } from './localData'

export async function parser(apiConfig: IApiConfig) {
  validateApiConfig(apiConfig)
  const apiList: IApiStation[] = apiConfig.apiList
    .filter((item) => item.tag)
    .map((item) => {
      return {
        ...item,
        httpTpl: item.httpTpl || apiConfig.httpTpl || '',
        apiBody: item.apiBody || apiConfig.apiBody,
        fileName: item.fileName || apiConfig.fileName,
      }
    })

  const res = await parseParaller(apiList)
  saveParseredDataToLocal(res)
  return res
}

function parseParaller(apiList: IApiStation[]): Promise<IParsered[]> {
  const fns: Promise<IParsered>[] = []
  apiList.forEach((item) => {
    fns.push(parseFn(item))
  })
  return Promise.all(fns)
}

async function parseFn(apiStation: IApiStation): Promise<IParsered> {
  const swaggerJson = (await readSwagger(apiStation.swaggerUrl)) as any
  let apis: IApiModel[] = []
  let interfaces: IInterface[] = []
  if (swaggerJson) {
    apis = handleApiModel(swaggerJson.paths, {
      ignore: apiStation.ignore,
      fileName: apiStation.fileName,
    })
    interfaces = handleInterface(swaggerJson.definitions)
  }
  return {
    ...apiStation,
    apis,
    interfaces,
  }
}

/** 校验 apiConfig  */
function validateApiConfig(apiConfig: IApiConfig) {
  const apiList = apiConfig.apiList.filter((item) => item.tag)
  if (!apiConfig.apiBody && apiList.some((item) => !item.apiBody)) {
    throw new Error('请传入 apiBody , 必须是一个函数')
  }
  if (apiList.some((item) => !item.swaggerUrl)) {
    throw new Error('请传入 swaggerUrl')
  }
}
