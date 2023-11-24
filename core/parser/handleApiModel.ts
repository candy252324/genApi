import { IApiModel, IParams } from '../types'
import { getUrl, getApiName, getFileNameAndExt, handleWeirdName, handleJsType } from '../utils'

/** 生成 api 数据模型 */
export function handleApiModel(paths, { ignore, fileName }) {
  const apis: IApiModel[] = []
  for (const key in paths) {
    const isIgnore = ignore && ignore.test(key) // 不需要生成的 api
    if (!isIgnore) {
      const objs = paths[key]
      const apiHasSameUrl = Object.keys(objs).length // url 相同，但是方法不同的接口数量
      Object.keys(objs).forEach((method) => {
        const obj = objs[method]
        const url = getUrl(key)
        const name = getApiName(url, apiHasSameUrl > 1 ? method : '')
        const theFileObj = getFileNameAndExt(url, fileName)
        const summary = obj.summary // 接口注释
        const parameters = getParameters(obj.parameters) // 入参
        const resScheme = obj?.responses['200']?.schema // 出参模型

        let outputInterface = '' // 出参 interface
        // 如果存在出参模型
        if (resScheme?.originalRef) {
          outputInterface = handleWeirdName(resScheme.originalRef)
        }
        // 出参是个简单类型
        else if (resScheme?.type) {
          outputInterface = handleJsType(resScheme.type)
        } else {
          // console.log('该接口不存在出参')
        }
        outputInterface = handleJsType(outputInterface) ? handleJsType(outputInterface) : outputInterface
        if (outputInterface === 'Void' || outputInterface === 'void') {
          outputInterface = ''
        }
        apis.push({
          name,
          url,
          method,
          summary,
          parameters,
          outputInterface,
          fileName: theFileObj.fileName,
          ext: theFileObj.ext,
        })
      })
    }
  }
  return apis
}

/** 处理入参 */
function getParameters(parameters): IParams[] {
  // 数据格式如：
  // "parameters": [
  //   {
  //     "in": "body",
  //     "name": "req",
  //     "description": "req",
  //     "required": true,
  //     "schema": {
  //       "$ref": "#/definitions/AddUserReq",
  //       "originalRef": "AddUserReq"
  //     }
  //    或者这样的 schema
  //    "schema": {
  //      "type": "array",
  //      "items": { "type": "integer", "format": "int64" }
  //    }
  //     或者这样的 schema
  //     "schema": {
  //       "type": "array",
  //       "items": { "$ref": "#/definitions/AddEmployeeReq", "originalRef": "AddEmployeeReq" }
  //      }
  //   },
  // ],

  // 再如：
  // "parameters": [
  //   {
  //     "name": "limit",
  //     "in": "query",
  //     "description": "当前页请求列表大小",
  //     "required": true,
  //     "type": "integer",
  //     "default": 100,
  //     "format": "int32"
  //   },
  //   {
  //     "name": "offset",
  //     "in": "query",
  //     "description": "注释注释",
  //     "required": false,
  //     "type": "integer",
  //     "format": "int64"
  //   }
  // ],
  // 再如:
  // "parameters": [
  //   {
  //     "in": "body",
  //     "name": "map",
  //     "description": "map",
  //     "required": true,
  //     "schema": { "type": "object", "additionalProperties": { "type": "object" } }
  //   }
  // ],
  // 再如
  // "parameters": [
  // {
  //   "name": "desktopIds",
  //   "in": "query",
  //   "description": "desktopIds",
  //   "required": false,
  //   "type": "array",
  //   "items": { "type": "integer", "format": "int64" },
  //   "collectionFormat": "multi"
  // },

  // 有入参
  if (parameters && parameters.length) {
    return parameters.map((item) => {
      let interafce = ''
      let type = '' // 如：string, number, boolean, UserInterface
      let isArray = false // 是否是数组
      let isSimpleJsType = false //  是否是简单 js 类型
      // 入参是数组
      if (item.type === 'array' || item.schema?.type === 'array') {
        isArray = true
        const itemsObj = item.schema?.type === 'array' ? item.schema?.items : item.items
        // 简单类型
        if (handleJsType(itemsObj?.format || itemsObj?.type)) {
          type = handleJsType(itemsObj?.format || itemsObj?.type)
          isSimpleJsType = true
        } else if (itemsObj?.originalRef) {
          const _interface = handleWeirdName(itemsObj?.originalRef)
          type = `${_interface}`
          isSimpleJsType = false
        } else {
          console.log('未处理的情况')
        }
      }
      // 非数组
      else {
        isArray = false
        if (item.schema?.originalRef) {
          const _interface = handleWeirdName(item.schema?.originalRef)
          type = _interface
          isSimpleJsType = false
        } else {
          type = handleJsType(item.format || item.type) || 'any'
          isSimpleJsType = true
        }
      }
      return {
        name: handleWeirdName(item.name),
        description: item.description || '', // 注释
        in: item.in, // 可能值： body ,header, query, path...
        isSimpleJsType,
        isArray,
        type,
      }
    })
  }
  // 没入参
  else {
    return []
  }
}