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
        // 有注释
        if (description) {
          str += `
  ${description ? description : ''}
  ${it.name}?: ${it.type}${it.isArray ? '[]' : ''}`
        }
        // 没注释
        else {
          str += `
  ${it.name}?: ${it.type}${it.isArray ? '[]' : ''}`
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
