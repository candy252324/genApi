const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const Mock = require('better-mock')
const { mockPath } = require('./index')

fs.readFile(path.resolve(__dirname, './data.cache.json'), 'utf-8', (err, data) => {
  if (err) {
    reject()
    throw new Error(err)
  }
  createServer(JSON.parse(data))
})

function createServer(allApiData) {
  console.log('开始创建server---------')
  const server = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*', // 设置 post 请求允许跨域
      'Access-Control-Allow-Origin': '*', // 设置 get 请求允许跨域
    })

    // {
    //   url: '/api/chat/pageList',
    //   method: 'post',
    //   outputInterface: 'ApiResponseUnReadComPageHuiHuaLieBiaoXiangYing',
    //   namespace: 'chat',
    //   outputDir: '/src/api'
    // }
    let obj = {}
    // 找到 url 相同的api
    ;(allApiData || []).forEach((item) => {
      ;(item.apiList || []).forEach((it) => {
        ;(it.apis || []).forEach((theOne) => {
          if (theOne.url === req.url) {
            obj.url = theOne.url
            obj.method = theOne.method
            obj.outputInterface = theOne.outputInterface
            obj.namespace = it.namespace
            obj.outputDir = item.outputDir
          }
        })
      })
    })
    try {
      const { outputDir, outputInterface } = obj
      const cmdInterfacePath = path.join(mockPath, outputDir, './_interfaces.cmd.js') // 'D:\____own____\genApi\mock' +  '/src/api'
      const interface = require(cmdInterfacePath)
      const interfaceFn = interface[outputInterface] // interface.GreenBookGratefulInfoResp
      const mockObj = Mock.mock(interfaceFn()) // Mock.mock(interface.GreenBookGratefulInfoResp())
      res.end(JSON.stringify(mockObj))
    } catch (error) {
      console.log(error)
      res.end(JSON.stringify(error))
    }
  })

  server.listen(8000)
}
