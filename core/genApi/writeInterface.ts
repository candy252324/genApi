import path from 'node:path'
import { IInterface } from '../types'
import { writeAndPrettify } from '../utils'

/** interface 写入 */
export function writeInterface(interfaces: IInterface[], config: { outputDir: string }) {
  const { outputDir } = config
  let str = ''
  interfaces.forEach((item) => {
    str += `export interface ${item.name} {\n`
    if (item?.properties && item.properties?.length) {
      item.properties.forEach((it) => {
        const description = it.description ? `/** ${it.description} */` : ''
        const type = handleEnum({ type: it.type, enums: it.enums })
        str += description ? `${description}\n` : '' // 注释
        str += `${it.name}?: ${type}${it.isArray ? '[]' : ''}\n` //  userName?: boolean
      })
    }
    str += '\n}\n'
  })
  const targetFile = path.join(outputDir, `_interfaces.ts`)
  writeAndPrettify(targetFile, str)
}

/** 处理类型，如果有枚举，则处理成 a|b|c 的格式，否则直接返回类型，如 string, number */
function handleEnum({ type, enums }: Pick<IInterface, 'type' | 'enums'>) {
  if (enums && enums.length) {
    // 将 [1,2,3] 处理成 1 | 2 | 3 ， 或将 ['1','2','3'] 处理成 '1'|'2'|'3'
    return enums.reduce((pre, cur, index) => {
      const _cur = typeof cur === 'string' ? `'${cur}'` : cur
      return index > 0 ? `${pre} | ${_cur}` : _cur
    }, '')
  } else {
    return type
  }
}
