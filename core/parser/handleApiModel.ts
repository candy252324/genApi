import { IApiModel, IParams, IApiStation } from '../types'
import { getUrl, getApiName, getFileName, getFileExt, handleWeirdName, handleJsType, handleDescription } from '../utils'

/** 生成 api 数据模型 */
export function handleApiModel(
  paths,
  {
    exclude,
    include,
    fileName,
    fileExt,
    apiName,
    pathRewrite,
  }: Pick<IApiStation, 'exclude' | 'include' | 'fileName' | 'fileExt' | 'apiName' | 'pathRewrite'>
) {
  const apis: IApiModel[] = []
  for (const key in paths) {
    const _needGen = needGen({ exclude, include, apiPath: key })
    if (_needGen) {
      const objs = paths[key]
      const apiHasSameUrl = Object.keys(objs).length // url 相同，但是方法不同的接口数量
      Object.keys(objs).forEach((method) => {
        const obj = objs[method]
        const theUrl = getUrl(key)
        const url = pathRewrite ? pathRewrite({ url: theUrl }) : theUrl // 经用户 pathRewrite() 函数处理过后的 url
        const defaultApiName = getApiName(theUrl, apiHasSameUrl > 1 ? method : '') // 内置生成的接口名称
        // 优先使用用户传入的 apiName 生成规则
        const name = apiName ? apiName({ url, originUrl: theUrl, method, defaultApiName }) : defaultApiName
        const theFileName = getFileName({ url, originUrl: theUrl, userFileName: fileName })
        const theFileExt = getFileExt(fileExt)
        const summary = handleDescription(obj.summary) // 接口注释
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
          originUrl: theUrl,
          method,
          summary,
          parameters,
          outputInterface,
          fileName: theFileName,
          fileExt: theFileExt,
        })
      })
    }
  }
  return apis
}

/** 判断某个接口是否需要生成 */
function needGen({ exclude, include, apiPath }) {
  // 没配置 exclude 和 include
  const notSetExclude = !exclude || (Array.isArray(exclude) && !exclude.length)
  const notSetInclude = !include || (Array.isArray(include) && !include.length)
  if (notSetExclude && notSetInclude) {
    return true
  }
  const excludeArr = Array.isArray(exclude) ? exclude : [exclude]
  const includeArr = Array.isArray(include) ? include : [include]

  const isExclude = matchExp(excludeArr, apiPath) // 该 api 不需要生成
  const isInclude = matchExp(includeArr, apiPath) // 该 api 需要生成

  // 只配置了 include 没配置 exclude
  if (include && !exclude) {
    return isInclude
  }
  // 只配置了 exclude 没配置 include
  else if (exclude && !include) {
    return !isExclude
  }
  // exclude 和 include 都配置了
  else if (include && exclude) {
    return !isExclude && isInclude
  }
}

function matchExp(expArr: any[], apiPath: string) {
  return expArr.some((exp) => {
    const expIsReg = exp && Object.prototype.toString.call(exp) === '[object RegExp]'
    const expIsString = exp && Object.prototype.toString.call(exp) === '[object String]'
    // 字符串全等或正则匹配
    return (expIsReg && exp.test(apiPath)) || (expIsString && exp === apiPath)
  })
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
