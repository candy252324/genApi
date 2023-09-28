const path = require('node:path')
const fs = require('node:fs')
const pinyin = require('js-pinyin')

const jsKeyWords = [
  'delete',
  'break',
  'catch',
  'continue',
  'instanceof',
  'new',
  'switch',
  'throw',
  'while',
  'with',
  'finally',
  'return',
  'export',
  'enum',
  'private',
  'package',
  'public',
  'static',
  'for',
  'function',
]

/**
 * 获取接口地址
 * "/abc/def/{taskId}"   => `/abc/def/${taskId}`
 * "/api/abc-defg/v1/{type}/list/filter"  => `/api/abc-defg/v1/${type}/list/filter`
 */
function getUrl(url) {
  return url.replace(/{/g, '${')
}

/**
 * 获取接口名称, 需要处理一些特殊的路径
 * /api/user/create 处理成 userCreate
 * /api/handleAddress/deleteAddress/{id} 处理成  handleAddressDeleteAddressId
 */
function getApiName(url) {
  let url2 = url.replace(/^\/api/, '') // 去除开头的 /api
  url2 = url2.replace(/[\$\{\}-]/g, '') // 去除可能存在的短杠、左右花括号和$
  const name = url2.replace(/\/\w/g, (matched, index) => {
    const letter = matched.replace('/', '')
    return index === 0 ? letter : letter.toUpperCase()
  })
  return jsKeyWords.includes(name) ? `${name}Fn` : name
}
/**
 * 获取接口所属文件名称
 * 将 /api/user/create 转化为 user
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
  const find = methods.find((method) => !!obj[method] || !!obj[method.toUpperCase()])
  return find || 'unknow'
}

/**
 * 处理一些奇奇怪怪的 interface 或 入参 name，去除特殊字符，并将中文转英文
 * 如： ApiResponse«List«我的数据对象GroupResp»»， 将被处理成 ApiResponseWoDeShuJuDuiXiangGroupResp
 */
function handleWeirdName(originKey) {
  if (!originKey || !originKey.trim()) return ''
  let str = originKey.replace(/\[|\]|\(|\)|«|»|\{|\}/g, '') // 去除各种括号 [] () «» {}
  str = str.replace(/\s|-|\/|\*|=|\+|\$/g, '') // 去除所有空格，短杠 - ，斜杠 /， 星号 *， 等号 =，加号 +, $符
  str = str.replace(/(,|，|、|；|;|\.|。|"|'|‘|’|“|”)/g, '') // 去除中英文逗号，顿号，分号，中英文句号，中引文单双引号
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
    long: 'string',
    boolean: 'boolean',
    Boolean: 'boolean',
    number: 'number',
    array: '[]',
    Object: 'object',
    object: 'object',
    double: 'string',
    Int64: 'string',
    int64: 'string',
    Int32: 'number',
    int32: 'number',
    String: 'string',
    'date-time': 'string',
    Date: 'string',
    date: 'string',
    file: 'File',
    // "properties": {
    //   "uri": { "type": "string", "format": "uri" },
    //   "url": { "type": "string", "format": "url" },
    // },
    uri: 'string',
    url: 'string',
  }
  return typeEnmu[origintype] || ''
}

function isJsType(type) {
  return ['number', 'string', 'boolean', 'object', 'File'].includes(type)
}

/** 清空某个目录下所有的文件/文件夹 */
function cleanDir(folderPath) {
  //判断文件夹是否存在
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index, arr) => {
      const dir = `${folderPath}/${file}`
      console.log(dir)
      if (fs.lstatSync(dir).isFile()) {
        fs.unlinkSync(dir) // 删除文件
      } else if (fs.lstatSync(dir).isDirectory()) {
        cleanDir(dir) // 递归
        fs.rmdirSync(dir) // 删除当前目录
      }
    })
  }
}

module.exports = {
  getUrl,
  getApiName,
  getNamespace,
  getMethod,
  handleWeirdName,
  upperCaseFirseLetter,
  hasChinese,
  handleJsType,
  isJsType,
  cleanDir,
}
