import path from 'node:path'
import { getFieldMockStr } from './mockUtils'
import { IInterface } from '../types'
import { writeAndPrettify } from '../utils'

/** interface 写入 */
export function writeMockInterface(interfaces: IInterface[], { outputDir, cmd = false, fieldRules }) {
  let str = cmd ? '' : 'import Mock from "better-mock"\n'
  interfaces.forEach((item) => {
    if (cmd) {
      str += `function ${item.name}() {`
    } else {
      str += `export function ${item.name}() {`
    }
    if (item?.properties && item.properties?.length) {
      let mockRes = ''
      item.properties.forEach((it) => {
        mockRes += getInterfaceMock(it, fieldRules)
      })
      str += `\nreturn ${mockRes ? '{\n' + mockRes + '\n}' : ''}`
    }
    str += '\n}\n'
  })

  if (cmd) {
    const exportStr = interfaces.reduce((pre, cur, index) => {
      const last = index === interfaces.length - 1 ? '}' : ''
      pre = `${pre}${cur.name},\n${last}`
      return pre
    }, 'module.exports = {')

    str += exportStr
  }
  const targetFile = path.join(outputDir, cmd ? `_interfaces.cmd.js` : `_interfaces.js`)
  writeAndPrettify(targetFile, str)
}

/** 生成 mock
 @param model 格式如下
   * {
   *    name:"",   // 原始 key 处理后结果，如： ApiResponse
   *    type:"",   // 类型，如 "object", 目前看到的都是 'object'
   *    properties:[{
   *      name:"",
   *      isArray:false,  // 是否是数组
   *      isSimpleJsType:false, // 是否是简单 js 类型, 如 number、string 等
   *      type:"",        // 类型，如 string, number, boolean , UserInterface
   *      description:""  // 注释
   *    }]
   *  }
   */
function getInterfaceMock(model: IInterface, fieldRules) {
  const { name, type, isArray, enums } = model

  let _mockStr = ''
  // 如果是简单类型
  let isFn = false
  let _isCustome = false
  if (enums?.length) {
    _mockStr = `/${enums.join('|')}/` // 处理枚举 /A|B|C/,
  } else if (type === 'string' || type === 'number' || type === 'boolean' || type === 'any' || type === 'File') {
    const { mockStr, isCustome } = getFieldMockStr({ name, type, fieldRules })
    _mockStr = mockStr
    _isCustome = isCustome
  } else if (type === 'object') {
    _mockStr = '{}'
  } else {
    isFn = true
    _mockStr = `${type}()`
  }

  if (isArray) {
    if (isFn || _isCustome) {
      return `\'${name}|1-20\': [${_mockStr}],\n`
    } else {
      return `\'${name}|1-20\': [\'${_mockStr}\'],\n`
    }
  } else {
    if (isFn || _isCustome || enums?.length) {
      return `${name}: ${_mockStr},\n`
    } else {
      return `${name}: \'${_mockStr}\',\n`
    }
  }
}
