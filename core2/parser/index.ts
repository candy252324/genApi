import { IApi, IApiConfig } from '../type'
import { handleApiModel } from './handleApiModel'
import { handleInterface } from './handleInterface'
import { readSwagger } from './readSwagger'
import { saveParseredDataToLocal } from './localData'
import { IApiModel, IInterface } from './types'

export async function parser(apiConfig: IApiConfig) {
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

  const res = await parseParaller(apiList)
  saveParseredDataToLocal(res)
  return res
}

function parseParaller(apiList: IApi[]): Promise<{ apiModel: IApiModel[]; interafce: IInterface[] }[]> {
  const fns = []
  apiList.forEach((item) => {
    fns.push(parseFn(item))
  })
  return Promise.all(fns)
}

async function parseFn(apiStation: IApi) {
  const swaggerJson = (await readSwagger(apiStation.swaggerUrl)) as any
  let apis: IApiModel[] = []
  let interafces: IInterface[] = []
  if (swaggerJson) {
    apis = handleApiModel(swaggerJson.paths, {
      ignore: apiStation.ignore,
      fileName: apiStation.fileName,
    })
    interafces = handleInterface(swaggerJson.definitions)
  }
  return {
    ...apiStation,
    apis,
    interafces,
  }
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
