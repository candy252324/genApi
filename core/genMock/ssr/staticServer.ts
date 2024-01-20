import path from 'node:path'
import fs from 'node:fs'

const CWD = process.cwd()

/** 静态资源托管, 直接返回文件内容 */
export async function staticServer(reqUrl: string, res) {
  try {
    const fileUrl = path.join(CWD, reqUrl)
    // 读取资源的信息, fs.Stats对象
    const stat = await fs.promises.stat(fileUrl)

    if (stat.isFile()) {
      // 请求文件
      sendFile(res, fileUrl)
    } else {
      // 请求文件夹
      sendDirectory(res, fileUrl)
    }
  } catch (error) {
    // 访问的资源不存在
    if (error.code === 'ENOENT') {
      res.statusCode = 404
      res.end('file/directory does not exist')
    } else {
      res.statusCode = 500
      res.end('something wrong with the server')
    }
  }
}

export const sendFile = async (resp, pathname) => {
  // 使用promise-style的readFile API异步读取文件的数据，然后返回给客户端
  const data = await fs.promises.readFile(pathname)
  resp.end(data)
}

// cjh todo  目录嵌套资源访问有问题
export const sendDirectory = async (resp, pathname) => {
  // 使用promise-style的readdir API异步读取文件夹的目录信息，然后返回给客户端
  const fileList = await fs.promises.readdir(pathname, { withFileTypes: true })
  // 这里保存一下子资源相对于根目录的相对路径，用于后面客户端继续访问子资源
  const relativePath = path.relative(process.cwd(), pathname)

  // 构造返回的html结构体
  let content = '<ul>'
  fileList.forEach((file) => {
    content += `
      <li>
        <a href=${relativePath}/${file.name}>${file.name}${file.isDirectory() ? '/' : ''}
        </a>
      </li>`
  })

  content += '</ul>'
  // 返回当前的目录结构给客户端
  resp.end(`<h1>Content of ${relativePath || 'root directory'}:</h1>${content}`)
}
