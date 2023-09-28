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
   *    type:"",   // 类型，如 "object", 目前看到的都是 'object'
   *    properties:[{
   *      name:"",
   *      isArray:false,  // 是否是数组
   *      isSimpleJsType:false, // 是否是简单 js 类型, 如 number、string 等
   *      type:"",        // 类型，如 string, number, boolean , UserInterface
   *      description:""  // 注释
   *    }]
   *  }]
   */
  const defs = []
  Object.keys(definitions).forEach((key) => {
    const interfaceName = handleWeirdName(key)
    // 不存在或者是简单类型
    if (!interfaceName || handleJsType(interfaceName)) return

    const obj = definitions[key]
    const properties = handleProperties(obj.properties || {})
    const exist = defs.find((item) => item.name === interfaceName)
    const interfaceModal = handleInterfaceModal(obj)
    defs.push({ name: interfaceName, ...interfaceModal, properties })
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
    const interfaceModal = handleInterfaceModal(obj)
    arr.push({ name: key, ...interfaceModal })
  })
  return arr
}

function handleInterfaceModal(obj) {
  const additionalProperties = obj.type === 'object' && obj.additionalProperties?.originalRef
  const isArray = obj.type === 'array'
  const isSimpleJsType = !additionalProperties && !!handleJsType(obj.format || obj.type)

  return {
    isArray, // 是否是数组
    isSimpleJsType, // 是否是简单数据 就是 js 类型
    type: additionalProperties ? handleWeirdName(additionalProperties) : handleItemsType(obj),
    description: obj.description || '',
  }
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
    else return handleJsType(obj.items?.format || obj.items?.type)
  } else if (obj?.originalRef) {
    return handleWeirdName(obj?.originalRef)
  } else {
    return handleJsType(obj.format || obj.type)
  }
}

module.exports = {
  genInterface,
}
