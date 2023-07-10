const {
  getUrl,
  getApiName,
  getNamespace,
  getMethod,
  upperCaseFirseLetter,
  handleInterfaceName,
  handleJsType,
  removeBigModel,
} = require('./utils.js') 
/** 生成 api */
function genApi(paths, { ignoreReg, excludeBigModel }) {
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
        // 不要生成最外层那层
         if (excludeBigModel) {
          refWithoutBigModel = removeBigModel(resScheme?.originalRef,excludeBigModel)
          outputInterface = handleInterfaceName(refWithoutBigModel)
         }else{
           outputInterface = handleInterfaceName(resScheme.originalRef)
        }
      }
      // 出参是个简单类型
      else if (resScheme?.type) {
        outputInterface = handleJsType(resScheme.type)
      } else {
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

function getParameters(parameters) {
  // 入参只处理了这一种情况
  // "parameters": [
  //   {
  //     "in": "body",
  //     "name": "req",
  //     "description": "req",
  //     "required": true,
  //     "schema": {
  //       "$ref": "#/definitions/AddBusinessEnterpriseReq",
  //       "originalRef": "AddBusinessEnterpriseReq"
  //     }
  //   }
  // ],
  // 有入参
  if(parameters && parameters.length){
    if (
      parameters.length === 1 &&
      parameters[0].in === 'body' &&
      parameters[0].schema?.originalRef
    ) {
      return handleInterfaceName(parameters[0].schema?.originalRef)
    } else {
      return 'any'
    }
  }
  // 没入参
  else{
    return ''
  }

}
module.exports = {
  genApi,
}
