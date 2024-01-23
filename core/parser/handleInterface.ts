import { IInterface } from '../types'
import { handleWeirdName, handleJsType, handleDescription } from '../utils'

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
export function handleInterface(definitions) {
  const defs: IInterface[] = []
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
  const arr: IInterface[] = []
  Object.keys(properties).forEach((key) => {
    const obj = properties[key]
    const interfaceModal = handleInterfaceModal(obj)
    arr.push({ name: key, ...interfaceModal })
  })
  return arr
}

function handleInterfaceModal(obj): Omit<IInterface, 'name'> {
  const additionalProperties = obj.type === 'object' && obj.additionalProperties?.originalRef
  const isArray = obj.type === 'array'
  const isSimpleJsType = !additionalProperties && !!handleJsType(obj.format || obj.type)

  return {
    isArray, // 是否是数组
    isSimpleJsType, // 是否是简单类型
    type: additionalProperties ? handleWeirdName(additionalProperties) : handleItemsType(obj),
    description: handleDescription(obj.description),
    enums: obj.enum && Array.isArray(obj.enum) ? obj.enum : undefined,
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
