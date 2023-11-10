const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const Mock = require('better-mock')
const { mockPath } = require('./index')

createServer()
function createServer() {
  const server = http.createServer()

  server.on('request', async (req, res) => {
    const _url = req.url.split('?')[0]
    const _method = req.method

    const allApiData = await getApiData()
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
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
          if (
            isSameApi(
              { url: theOne.url.split('?')[0], method: theOne.method },
              { url: req.url.split('?')[0], method: req.method }
            )
          ) {
            obj.url = theOne.url
            obj.method = theOne.method
            obj.outputInterface = theOne.outputInterface
            obj.namespace = it.namespace
            obj.outputDir = item.outputDir
          }
        })
      })
    })
    if (Object.keys(obj).length) {
      try {
        const { outputDir, outputInterface } = obj
        const cmdInterfacePath = path.join(mockPath, outputDir, './_interfaces.cmd.js') // 'D:\____own____\genApi\mock' +  '/src/api'
        delete require.cache[require.resolve(cmdInterfacePath)] // 删除require缓存, 保证拿到最新的mock数据
        const interface = require(cmdInterfacePath)
        const interfaceFn = interface[outputInterface] // interface.GreenBookGratefulInfoResp
        const mockObj = Mock.mock(interfaceFn()) // Mock.mock(interface.GreenBookGratefulInfoResp())
        res.end(JSON.stringify(mockObj))
      } catch (error) {
        console.log(`${_url} 接口出错`, error)
        res.end('接口解析出错')
      }
    } else {
      if (_method.toLowerCase() === 'options') {
        res.end()
      } else {
        console.log('没有找到对应的api', _url)
        res.end('没有找到对应的api')
      }
    }
  })

  server.listen(8090, () => {
    console.log('\x1B[32m%s\x1B[0m', 'mock 服务启动成功: http://localhost:8090')
  })
}

/** 读取 api 数据 */
function getApiData() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, './data.cache.json'), 'utf-8', (err, data) => {
      if (err) {
        reject()
        throw new Error(err)
      }
      resolve(JSON.parse(data))
    })
  })
}

/** 判断是否是同一个api */
function isSameApi(theOne, req) {
  const { url, method } = theOne
  const { url: _url, method: _method } = req
  const methodIsSame = method && _method && method.toLowerCase() === _method.toLowerCase()

  if (!methodIsSame) {
    return false
  }
  if (url === _url) {
    return true
  }

  // url示例:  /wygtech-hr/api/v1/person/bank-record/${id}
  // _url示例: /wygtech-hr/api/v1/person/bank-record/123456
  if (url.indexOf('${') !== -1) {
    // 将 '/wygtech-hr/api/v1/person/bank-record/${id}'  处理成 '/wygtech-hr/api/v1/person/bank-record/(.*)?'
    const regStr = url.replace(/\$\{(.*)?\}/g, '(.*)?')
    const reg = new RegExp(regStr) //   /\/wygtech-hr\/api\/v1\/person\/bank-record\/(.*)?/
    return reg.test(url)
  }
  return false
}
