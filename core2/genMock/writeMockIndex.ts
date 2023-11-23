import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import { handleWeirdName, transformPathToName } from '../utils'
import { MOCK_OUTPUT_DIR } from '../constant'
import { IApiGroup } from '../types'

/** 在 mock/index.js 中写入内容 */
export function writeMockIndex(
  groupApiList: { outputDir: string; apiGroup: IApiGroup[] }[],
  config: { mockRootPath: string }
) {
  const { mockRootPath } = config
  let firstLine = "import Mock from 'better-mock'\n"
  const extraStr = `
Mock.setup({
  timeout: "200-500"
})\n
  `
  let imortStr = ''
  let mockStr = ''
  /**
   * allData 数据格式
   * [{
   *  index:0, // 用于排序
   *  outputDir:'/src/api',
   *  apiList:[{namespace:"user", apis:[]}, {namespace:"role", apis:[]}]
   * }]
   */
  // const sortedData = allData.sort((a, b) => a.index - b.index)
  groupApiList.forEach((item) => {
    if (item.outputDir && item.apiGroup && item.apiGroup.length) {
      const outputDir = item.outputDir.replace(/^\//, '') // 去除开头的 /, 将 '/src/api' 处理成 'src/api'
      // 将 src/api 处理成 srcApi
      const name = outputDir.replace(/\/\w/g, (matched, index) => {
        const letter = matched.replace('/', '')
        return index === 0 ? letter : letter.toUpperCase()
      })

      item.apiGroup.forEach((obj) => {
        let matchPath = handleWeirdName(name + obj.fileName) // 如： srcApi + user
        imortStr += `import * as ${matchPath} from './${outputDir}/${obj.fileName}.js'\n`
        ;(obj.apis || []).forEach((api) => {
          // 将 /thk/api/v1/config/continue-education/${id}  处理成  /\/thk\/api\/v1\/config\/continue-education\/.*/
          const _url = api.url.replace(/\//g, '\\/').replace(/\$\{.*?\}/g, '.*')
          mockStr += `Mock.mock(/${_url}/, '${api.method}', ${matchPath}.${api.name})\n`
        })
      })
    }
  })

  const finaStr = `${firstLine}${extraStr}${imortStr}${mockStr}`

  fs.access(mockRootPath, (err) => {
    if (err) {
      // 若目标目录不存在，则创建
      fs.mkdirSync(mockRootPath, { recursive: true })
    }
    // 写入目标目录
    const targetFile = path.join(mockRootPath, 'index.js')
    fs.writeFileSync(targetFile, `${finaStr}\n`)

    // 格式化
    // console.log(`格式化 ${targetFile}`)
    exec(`prettier --write ${targetFile}`)
  })
}
