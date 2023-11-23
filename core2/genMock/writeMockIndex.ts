import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import { handleWeirdName, transformPathToName } from '../utils'
import { MOCK_OUTPUT_DIR } from '../constant'
import { IApiModel, IParams } from '../types'

/** 在 mock/index.js 中写入内容 */
export function writeMockIndex(apiGroup: { fileName: string; apis: IApiModel[] }[], config: { outputDir: string }) {
  const { outputDir } = config
  let firstLine = "import Mock from 'better-mock'\n"
  const extraStr = `
Mock.setup({
  timeout: "200-500"
})\n
  `
  let imortStr = ''
  let mockStr = ''

  const name = transformPathToName(outputDir) //  /src/api => srcApi

  apiGroup.forEach((item) => {
    if (outputDir && item.apis && item.apis.length) {
      let matchPath = handleWeirdName(name + item.fileName) // 如： srcApi + user
      imortStr += `import * as ${matchPath} from './${outputDir}/${item.fileName}.js'\n`
      ;(item.apis || []).forEach((api) => {
        // 将 /thk/api/v1/config/continue-education/${id}  处理成  /\/thk\/api\/v1\/config\/continue-education\/.*/
        const _url = api.url.replace(/\//g, '\\/').replace(/\$\{.*?\}/g, '.*')
        mockStr += `Mock.mock(/${_url}/, '${api.method}', ${matchPath}.${api.name})\n`
      })
    }
  })

  const finaStr = `${firstLine}${extraStr}${imortStr}${mockStr}`

  fs.access(MOCK_OUTPUT_DIR, (err) => {
    if (err) {
      // 若目标目录不存在，则创建
      fs.mkdirSync(MOCK_OUTPUT_DIR, { recursive: true })
    }
    // 写入目标目录
    const targetFile = path.join(MOCK_OUTPUT_DIR, 'index.js')
    fs.writeFileSync(targetFile, `${finaStr}\n`)

    // 格式化
    exec(`prettier --write ${targetFile}`)
  })
}
