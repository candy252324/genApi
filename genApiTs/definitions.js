let pinyin = require('js-pinyin')
const Tarr = ['T', 'U', 'K', 'V', 'A']
function handleDefinitions(definitions) {
  /**
   * [
   *  {
   *    originName:""  // swagger上的原始key，如 "ApiResponse«ComPage«会话列表响应»»"
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object"
   *    properties:[{
   *      name:"",
   *      type:"",        // 类型，如 string
   *      type:"",        // 类型，如 string
   *      description:""  // 注释
   *    }]
   *  },
   *  {
   *    originName:""  // swagger上的原始key，如 "ApiResponse«ComPage«ContactResp»»"
   *    name:"",     // 原始 key 处理后结果，如： ApiResponse
   *    type:"",     // 类型，如 "object"
   *    properties:[]  // 同上
   *  },
   * ]
   */
  let defs = []
  Object.keys(definitions).forEach(key => {
    const obj = definitions[key]
    const propertiesObj = handleProperties(obj.properties || {})
    const properties = propertiesObj.arr
    const tCount = propertiesObj.tCount
    const interfaceName = handleKey(key)
    const exist = defs.find(item => item.name.replace(/<.*>/g, '') === key)
    if (!exist) {
      if (tCount) {
        console.log(`${interfaceName}<${Tarr.slice(0, tCount)}>`)
      }
      defs.push({
        originName: key,
        name: !tCount ? interfaceName : `${interfaceName}<${Tarr.slice(0, tCount)}>`,
        type: handleType(obj.type),
        properties,
      })
    }
  })
  return defs
  // const uniqueInterfaces = uniqueByName(defs)
  // return {
  //   allInterfaces: defs,
  //   // uniqueInterfaces,
  // }
}

/** 根据name去重 */
function uniqueByName(defs) {
  const newArr = []
  defs.forEach(item => {
    const find = newArr.find(it => it.name === item.name)
    if (!find) {
      newArr.push(item)
    }
  })
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
  let tCount = 0 // 属性中是泛型的属性数量
  Object.keys(properties).forEach(key => {
    const obj = properties[key]
    let type = handleType(obj.type)
    if (type === 'object') {
      console.log(type)
      type = Tarr[tCount]
      tCount += 1
    }
    arr.push({
      name: key,
      type: handleType(obj.type),
      description: obj.description || '',
    })
  })
  return { arr, tCount }
}
/**
 * 处理一些奇奇怪怪的 interface
 * 如： ApiResponse«List«群成员信息对象GroupMemberResp»»， 返回第一个 « 符号左边的内容， 最终处理处理成 "ApiResponse"
 * 再如： 历史消息-MessageHistoryReq , 去除特殊字符 - , 并将中文转化成拼音，最终处理成 "LiShiXiaoXiMessageHistoryReq"
 */
function handleKey(originKey) {
  const idx = originKey.indexOf('«')
  let str = originKey
  if (idx > -1) {
    str = originKey.slice(0, idx)
  }
  str = str.replace(/-/g, '') // 去除短杠 -
  str = str.replace(/\[|\]/g, '') // 去除中括号 []
  str = str.replace(/\(|\)/g, '') // 去除圆括号 ()
  str = str.replace(/\//g, '') // 去除斜杠 /
  if (hasChinese(str)) {
    str = pinyin.getFullChars(str) // 汉字转拼音 历史消息=>LiShiXiaoXi
  }
  return str
}
function handleType(origintype) {
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
  }
  return typeEnmu[origintype]
}

// 判断字符串是否包含中文
function hasChinese(str) {
  return /[\u4E00-\u9FA5]+/g.test(str)
}
module.exports = {
  handleDefinitions,
  handleKey,
}
