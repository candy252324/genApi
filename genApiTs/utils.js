const pinyin = require('js-pinyin')

/**
 * 获取接口地址
 * "/bankIcbc/zjzhPassAuto/{taskId}"   => `/bankIcbc/zjzhPassAuto/${taskId}`
 * "/api/sys-dict/v1/{type}/list/filter"  => `/api/sys-dict/v1/${type}/list/filter`
 */
function getUrl(url) {
  return url.replace(/{/g, '${')
}

/**
 * 获取接口名称, 需要处理一些特殊的路径
 * /api/variable/create 处理成 variableCreate
 * /api/deliverAddress/deleteAddress/{id} 处理成  deliverAddressDeleteAddressId
 * 以下两个接口会生成一样的名称，叫后端改
 * /api/enterprise/identification/inner/person/v1/{userId}/openAcct/callback
 * /api/enterprise/identification/inner/enterprise/v1/{enterpriseId}/openAcct/callback
 */
function getApiName(url) {
  let url2 = url
  // let url2 = url.replace(/^\/api/, '') // 去除开头的 /api
  url2 = url2.replace(/[\$\{\}-]/g, '') // 去除可能存在的短杠、左右花括号和$
  return url2.replace(/\/\w/g, (matched, index) => {
    const letter = matched.replace('/', '')
    return index === 0 ? letter : letter.toUpperCase()
  })
}
/**
 * 获取接口所属文件名称
 * 将 /api/variable/create 转化为 variable
 */
function getNamespace(url) {
  const arr = url.split('/')
  return arr.find((item) => item && item !== 'api')
}
/**
 * 获取接口方法
 */
function getMethod(obj) {
  const methods = [
    'get',
    'post',
    'put',
    'head',
    'delete',
    'connect',
    'options',
    'trace',
    'mkcol',
    'copy',
    'move',
    'lock',
    'unlock',
    'patch',
  ]
  const find = methods.find(
    (method) => !!obj[method] || !!obj[method.toUpperCase()]
  )
  return find || 'unknow'
}

/**
 * 处理一些奇奇怪怪的 interface
 * 如： ApiResponse«List«群成员信息对象GroupMemberResp»»， 返回第一个 « 符号左边的内容， 最终处理处理成 "ApiResponse"
 * 再如： 历史消息-MessageHistoryReq , 去除特殊字符 - , 并将中文转化成拼音，最终处理成 "LiShiXiaoXiMessageHistoryReq"
 * 更奇葩的："个人认证信息 - 开户信息,新增时只需要传入individualBankCardNo、individualReservedPhoneNo、individualVocation，其他信息从redis缓存中获取"
 */
function handleInterfaceName(originKey) {
  let str = originKey
  str = str.replace(/«|»/g, '') // 去除 « 和 »
  str = str.replace(/-/g, '') // 去除短杠 -
  str = str.replace(/\[|\]/g, '') // 去除中括号 []
  str = str.replace(/\(|\)/g, '') // 去除圆括号 ()
  str = str.replace(/\//g, '') // 去除斜杠 /
  str = str.replace(/\s/g, '') // 去除空格
  str = str.replace(/(,|，|、)/g, '') // 去除中英文逗号，顿号
  // 汉字转拼音 历史消息=>LiShiXiaoXi
  if (hasChinese(str)) {
    str = pinyin.getFullChars(str)
  }
  return str
}

/** 首字母大小 */
function upperCaseFirseLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

/** 判断字符串是否包含中文 */
function hasChinese(str) {
  return /[\u4E00-\u9FA5]+/g.test(str)
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

module.exports = {
  getUrl,
  getApiName,
  getNamespace,
  getMethod,
  handleInterfaceName,
  upperCaseFirseLetter,
  hasChinese,
  handleJsType,
}
