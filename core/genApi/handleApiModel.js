/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const {
  getUrl,
  getApiName,
  getNamespace,
  getMethod,
  upperCaseFirseLetter,
  handleWeirdName,
  handleJsType,
} = require('../utils.js')

/** 生成 api 数据模型 */
function handleApiModel(paths, { ignoreReg }) {
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
      const parameters = getParameters(obj[method].parameters) // 入参
      const idx = apiList.findIndex((item) => item.namespace === namespace)
      const resScheme = obj[method]?.responses['200']?.schema // 出参模型

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

/** 处理入参 */
function getParameters(parameters) {
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

  // 有入参
  if (parameters && parameters.length) {
    return parameters.map((item) => {
      let interafce = ''
      let type = ''
      // 入参是数组
      if (item.schema?.type === 'array') {
        // 简单类型
        if (handleJsType(item.schema?.items?.type)) {
          type = handleJsType(item.schema?.items?.type) + '[]'
        } else if (item.schema?.items?.originalRef) {
          const _interface = handleWeirdName(item.schema?.items?.originalRef)
          type = `${_interface}[]`
          interafce = _interface
        } else {
          console.log('未处理的情况')
        }
      }
      // 非数组
      else {
        if (item.schema?.originalRef) {
          const _interface = handleWeirdName(item.schema?.originalRef)
          type = _interface
          interafce = _interface
        } else {
          type = handleJsType(item.format || item.type) || 'any'
        }
      }
      return {
        name: handleWeirdName(item.name),
        description: item.description || '', // 注释
        in: item.in, // 可能值： body ,header, query, path...
        interafce,
        type,
      }
    })
  }
  // 没入参
  else {
    return []
  }
}

module.exports = {
  handleApiModel,
}
