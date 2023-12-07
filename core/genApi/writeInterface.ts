import path from 'node:path'
import fs from 'node:fs'
import { IInterface } from '../types'

/** interface 写入 */
export function writeInterface(interfaces: IInterface[], config: { outputDir: string }) {
  const { outputDir } = config
  let str = ''
  interfaces.forEach((item, index) => {
    str += `export interface ${item.name} {`
    if (item?.properties && item.properties?.length) {
      item.properties.forEach((it) => {
        const description = it.description ? `/** ${it.description} */` : ''
        const type = handleType({ type: it.type, enums: it.enums })
        // 有注释
        if (description) {
          str += `
  ${description ? description : ''}
  ${it.name}?: ${type}${it.isArray ? '[]' : ''}`
        }
        // 没注释
        else {
          str += `
  ${it.name}?: ${type}${it.isArray ? '[]' : ''}`
        }
      })
    }
    str += '\n}\n'
  })
  const targetFile = path.join(outputDir, `_interfaces.ts`)
  fs.access(outputDir, (err) => {
    if (err) {
      // 若目标目录不存在，则创建
      fs.mkdirSync(outputDir, { recursive: true })
    }
    fs.writeFileSync(targetFile, str)
  })
}

/** 处理类型，如果有枚举，则处理成 a|b|c 的格式，否则直接返回类型，如 string, number */
function handleType({ type, enums }: Pick<IInterface, 'type' | 'enums'>) {
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
