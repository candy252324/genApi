const {
  getUrl,
  getApiName,
  getNamespace,
  getMethod,
  upperCaseFirseLetter,
  handleInterfaceName,
  handleJsType,
} = require('./utils.js') 
/** 生成 api */
function genApi(paths, ignoreReg) {
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

module.exports = {
  genApi,
}
