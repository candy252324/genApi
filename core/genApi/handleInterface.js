/* eslint-disable @typescript-eslint/no-require-imports */
const pinyin = require('js-pinyin')
const { handleWeirdName, hasChinese, handleJsType } = require('../utils')

/** 入参格式
 * "ApiResponse«AddUserReq»": {
 *    "type": "object",
 *    "properties": {
 *     "code": { "type": "integer", "format": "int32" },
 *     "data": { "$ref": "#/definitions/AddUserReq", "originalRef": "AddUserReq" },
 *     "msg": { "type": "string" },
 *     "success": { "type": "boolean" },
 *   },
 * },
 */
function genInterface(definitions) {
  /**
   * [{
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object"
   *    properties:[{
   *      name:"",
   *      type:"",        // 类型，如 string
   *      description:""  // 注释
   *    }]
   *  }]
   */
  const defs = []
  Object.keys(definitions).forEach((key) => {
    const obj = definitions[key]
    const properties = handleProperties(obj.properties || {})
    const interfaceName = handleWeirdName(key)
    // 不存在或者是简单类型
    if (!interfaceName || handleJsType(interfaceName)) return
    const exist = defs.find((item) => item.name === interfaceName)
    // if (!exist) {
    const additionalProperties = obj.type === 'object' && obj.additionalProperties?.originalRef
    defs.push({
      name: interfaceName,
      type: additionalProperties
        ? handleWeirdName(additionalProperties)
        : handleItemsType(obj) + handleJsType(obj.format || obj.type),
      properties,
    })
    // }
  })
  return defs
}

/** 处理属性
 * @param properties 格式如下
*  "properties": {
      "directEntryGroup": { "type": "boolean", "description": "是否直接入圈子" },
      "groupId": { "type": "integer", "format": "int64", "description": "圈子id" }
   },
 */
function handleProperties(properties) {
  const arr = []
  Object.keys(properties).forEach((key) => {
    const obj = properties[key]
    const additionalProperties = obj.type === 'object' && obj.additionalProperties?.originalRef
    arr.push({
      name: key,
      type: additionalProperties
        ? handleWeirdName(additionalProperties)
        : handleItemsType(obj) + handleJsType(obj.format || obj.type),
      description: obj.description || '',
    })
  })
  return arr
}

/** 处理以下数据格式
 * "certificateList": {
      "type": "array",
      "description": "执业资格证",
      "items": {
        "$ref": "#/definitions/CrmCustomerPersonCertificateInfoResp",
        "originalRef": "CrmCustomerPersonCertificateInfoResp"
      }
    }
  或者
  "fileIdList": {
      "type": "array",
      "description": "图片文件id列表",
      "items": { "type": "integer", "format": "int64" }
    },
  或者
  "data": {
    "$ref": "#/definitions/AddUserReq", "originalRef": "AddUserReq"
  },
 */
function handleItemsType(obj) {
  if (obj.type === 'array') {
    if (obj?.items?.originalRef) return handleWeirdName(obj.items.originalRef)
    else return handleJsType(obj.items?.type || obj.items.type)
  } else if (obj?.originalRef) {
    return handleWeirdName(obj?.originalRef)
  } else {
    return ''
  }
}

module.exports = {
  genInterface,
}
