let pinyin = require('js-pinyin')
let _pageModelName=''

/** 入参格式
 * "ApiResponse«AddGroupResp»": {
 *    "type": "object",
 *    "relationInterface":[ "ResOfGetUserList", "ResOfCommonSearch" ]
 *    "properties": {
 *     "code": { "type": "integer", "format": "int32" },
 *     "data": { "$ref": "#/definitions/AddGroupResp", "originalRef": "AddGroupResp" },
 *     "msg": { "type": "string" },
 *     "success": { "type": "boolean" },
 *   },
 * },
 */
function handleDefinitions(definitions, { pageModelName }) {
  /**
   * [{
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object"
   *    properties:[{
   *      name:"",
   *      type:"",        // 类型，如 string
   *      type:"",        // 类型，如 string
   *      description:""  // 注释
   *    }]
   *  }]
   */
  _pageModelName = pageModelName
  let defs = []
  Object.keys(definitions).forEach((key) => {
    const obj = definitions[key]
    const properties = handleProperties(obj.properties || {})
    const relationInterface = obj.relationInterface
    // 接口直接出参
    if (relationInterface && relationInterface.length) {
      relationInterface.forEach((interfaceName) => {
        const exist = defs.find((item) => item.name === interfaceName)
        if (!exist) {
          defs.push({
            name: interfaceName,
            type: handleItemsType(obj) + handleJsType(obj.type),
            properties,
          })
        }
      })
    } else {
      const interfaceName = handleInterfaceName(key)
      const exist = defs.find((item) => item.name === interfaceName)
      // if (!exist) {
      defs.push({
        name: interfaceName,
        type: handleItemsType(obj) + handleJsType(obj.type),
        properties,
      })
      // }
    }
  })
  return defs
}

/** 处理属性
 * @param properties 格式如下
*  "properties": {
      "directEntryGroup": { "type": "boolean", "description": "是否直接入群" },
      "imGroupId": { "type": "integer", "format": "int64", "description": "群id" }
   },
 */
function handleProperties(properties) {
  let arr = []
  Object.keys(properties).forEach(key => {
    const obj = properties[key]
    arr.push({
      name: key,
      type: handleItemsType(obj) + handleJsType(obj.type),
      description: obj.description || '',
    })
  })
  return arr
}
/**
 * 处理一些奇奇怪怪的 interface
 * 如： ApiResponse«List«群成员信息对象GroupMemberResp»»， 返回第一个 « 符号左边的内容， 最终处理处理成 "ApiResponse"
 * 再如： 历史消息-MessageHistoryReq , 去除特殊字符 - , 并将中文转化成拼音，最终处理成 "LiShiXiaoXiMessageHistoryReq"
 * 更奇葩的："个人认证信息 - 开户信息,新增时只需要传入individualBankCardNo、individualReservedPhoneNo、individualVocation，其他信息从redis缓存中获取"
 */
function handleInterfaceName(originKey) {
  // 处理特殊的类型 ComPage ， 将 "ComPage«CommonSearchResp»" 处理成 “ComPageCommonSearchResp”
  let pageModalArr=[]
  pageModalArr = Array.isArray(_pageModelName) ? _pageModelName : [_pageModelName]
  pageModalArr.forEach(pageModalName=>{
    // 从 "ComPage«CommonSearchResp»" 取出  "ComPage", 判断是否属于后端的分页模型
    const idx = originKey.indexOf('«')
    if (idx > -1 && originKey.slice(0, idx) === pageModalName) {
      originKey = originKey.replace('«', '').replace('»', '')
    }
  })

  const idx = originKey.indexOf('«')
  let str = originKey
  if (idx > -1) {
    str = originKey.slice(0, idx)
  }
  str = str.replace(/-/g, '') // 去除短杠 -
  str = str.replace(/\[|\]/g, '') // 去除中括号 []
  str = str.replace(/\(|\)/g, '') // 去除圆括号 ()
  str = str.replace(/\//g, '') // 去除斜杠 /
  str = str.replace(/\s/g, '') // 去除空格
  str = str.replace(/(,|，|、)/g, '')  // 去除中英文逗号，顿号
  if (hasChinese(str)) {
    str = pinyin.getFullChars(str) // 汉字转拼音 历史消息=>LiShiXiaoXi
  }
  return str
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
    "$ref": "#/definitions/AddGroupResp", "originalRef": "AddGroupResp" 
  },
 */
function handleItemsType(obj) {
  if (obj.type === 'array') {
    if (obj?.items?.originalRef){
      return handleInterfaceName(obj.items.originalRef)
    } else {
      return handleJsType(obj.items.type)
    }
  }else if (obj?.originalRef) {
    return handleInterfaceName(obj?.originalRef)
  } else {
    return ''
  }
}

function handleJsType(origintype) {
  const typeEnmu = {
    integer: 'number',
    string: 'string',
    boolean: 'boolean',
    number: 'number',
    array: '[]',
    object: 'object',
    Int64: 'string',
    Int32: 'number',
    String: 'string',
    Date: 'string',
    Boolean: 'boolean',
    Object: 'object',
    file: 'File',
  }
  return typeEnmu[origintype] || ''
}

// 判断字符串是否包含中文
function hasChinese(str) {
  return /[\u4E00-\u9FA5]+/g.test(str)
}
module.exports = {
  handleDefinitions,
  handleJsType,
}
