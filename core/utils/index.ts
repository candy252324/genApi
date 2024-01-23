import path from 'node:path'
import fs from 'node:fs'
import net from 'node:net'
import { exec } from 'node:child_process'
import pinyin from 'js-pinyin'
import { IApiModel, IParsered, IApiGroup } from '../types'
import { createFolder } from './file'

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
export function getUrl(url) {
  return url.replace(/{/g, '${')
}

/**
 * 获取接口名称, 需要处理一些特殊的路径
 * /api/user/create 处理成 userCreate
 * /api/handleAddress/deleteAddress/{id} 处理成  handleAddressDeleteAddressId
 */
export function getApiName(url, method) {
  let url2 = url.replace(/^\/api/, '') // 去除开头的 /api
  url2 = url2.replace(/\$|\{|\}|-|\./g, '') // 去除可能存在的短杠、左右花括号和$、 点号
  let name = url2.replace(/\/\w/g, (matched, index) => {
    const letter = matched.replace('/', '')
    return index === 0 ? letter : letter.toUpperCase()
  })
  // 路径相同的 api, 在后面拼上请求方法以做区分， 如，有两个接口处理后的接口名称都是 systemUser，则分别处理成： systemUserGet 和  systemUserPost
  if (method) {
    name += upperCaseFirseLetter(method)
  }
  // 如果处理后的接口名称正好是 js 关键字，则默认加上Fn, 如，delete 处理成 deleteFn
  return jsKeyWords.includes(name) ? `${name}Fn` : name
}

/** 获取接口所属文件名称*/
export function getFileName(data: { url: string; originUrl: string; userFileName: string | Function }) {
  const { url, userFileName, originUrl } = data
  let theFileName = ''
  //  用户传入的 fileName 是个方法
  if (userFileName && typeof userFileName === 'function') {
    theFileName = userFileName({ url, originUrl })
  }
  //  用户传入的 fileName 是个字符串
  else if (userFileName && typeof userFileName === 'string') {
    theFileName = userFileName
  }
  // 使用默认的 fileName 生成规则, 如 /api/user/create 处理成 user
  else {
    const arr = originUrl.split('/')
    theFileName = arr.find((item) => item && item !== 'api')
  }
  return theFileName
}

/** 获取文件后缀, 默认 ts */
export function getFileExt(userFileExt: any): 'ts' | 'js' {
  let ext: 'ts' | 'js' = 'ts'
  if (/^\.?js$/.test(userFileExt)) ext = 'js'
  if (/^\.?ts$/.test(userFileExt)) ext = 'ts'
  return ext
}
/**
 * 获取接口方法
 */
export function getMethod(obj) {
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
export function handleWeirdName(originKey) {
  if (!originKey || !originKey.trim()) return ''
  let str = originKey.replace(/\[|\]|\(|\)|«|»|\{|\}|（|）/g, '') // 去除各种括号 [] () «» {}
  str = str.replace(/\s|-|&|\/|\*|=|\+|\$/g, '') // 去除所有空格，短杠 - ，斜杠 /， 星号 *， 等号 =，加号 +, $符
  str = str.replace(/(,|，|、|；|;|\.|。|"|'|‘|’|“|”)/g, '') // 去除中英文逗号，顿号，分号，中英文句号，中引文单双引号
  // 汉字转拼音 历史消息=>LiShiXiaoXi
  if (hasChinese(str)) {
    str = pinyin.getFullChars(str)
  }
  return str
}

/** 处理注释 (去除首位空格，去除换行符，多个空格合并成一个空格) */
export function handleDescription(desc?: string) {
  if (!desc) return ''
  return desc.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ')
}

/** 首字母大写 */
export function upperCaseFirseLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

/** 判断字符串是否包含中文 */
export function hasChinese(str) {
  return /[\u4E00-\u9FA5]+/g.test(str)
}
export function handleJsType(origintype) {
  const typeEnmu = {
    integer: 'number',
    float: 'number',
    string: 'string',
    long: 'string',
    boolean: 'boolean',
    Boolean: 'boolean',
    number: 'number',
    // array: '[]',
    Object: 'any',
    object: 'any',
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

export function isJsType(type) {
  return ['number', 'string', 'boolean', 'object', 'File'].includes(type)
}

export function typeIsInterface(type) {
  return !['number', 'string', 'boolean', 'object', 'File', 'any'].includes(type)
}

/** 将路径转化成小驼峰格式的名称，如： '/src/api' => 'srcApi' */
export function transformPathToName(thePath: string) {
  return thePath
    .replace(/^\//, '') // 去除开头的 /
    .replace(/\/\w/g, (matched, index) => {
      const letter = matched.replace('/', '')
      return index === 0 ? letter : letter.toUpperCase()
    })
}

/** 按所属文件名称给 api 分组 */
export function groupApiByFileName(apis: IApiModel[]) {
  const apiGroup: IApiGroup[] = [] // [{fileName:"", apis:[]}]
  // 按文件所属文件名称给 api 分组
  ;(apis || []).forEach((item) => {
    const { fileName, fileExt } = item
    const idx = apiGroup.findIndex((item) => item.fileName === fileName)
    if (idx > -1) {
      apiGroup[idx].apis.push(item)
    } else {
      apiGroup.push({ fileName, fileExt, apis: [item] })
    }
  })
  return apiGroup
}

/** 将内容写入目标文件，并进行格式化
 * @param targetFile 目标文件
 * @param content 内容
 */
export function writeAndPrettify(targetFile: string, content: string) {
  createFolder(targetFile)
  fs.writeFileSync(targetFile, content)
  exec(`prettier --write ${targetFile}`)
}

/** 将数据保存到本地 */
export function saveDataToLocal(thePath, data) {
  createFolder(thePath)
  let _data = ''
  if (typeof data === 'string') {
    _data = data
  } else {
    // JSON.stringify 会丢失不可枚举类型（如函数），这里将函数处理成字符串
    _data = JSON.stringify(data, (k, v) => {
      if (typeof v === 'function') {
        return `${v}`
      }
      return v
    })
  }
  fs.writeFileSync(path.join(thePath), _data)
}

/** 从本地读取数据 */
export function readDataFromLocal(path) {
  return fs.readFileSync(path, 'utf-8')
}

/** 判断端口是否被占用, 如果占用，返回新的可用端口号 */
export function portIsOccupied(port) {
  const server = net.createServer().listen(port)
  return new Promise((resolve, reject) => {
    server.on('listening', () => {
      server.close()
      resolve(port)
    })

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        resolve(portIsOccupied(port + 1))
      } else {
        reject(err)
      }
    })
  })
}
