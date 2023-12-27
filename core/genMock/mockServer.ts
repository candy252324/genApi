import http from 'node:http'
import path from 'node:path'
import Mock from 'better-mock'
import { portIsOccupied } from '../utils'
import { MOCK_OUTPUT_DIR, MOCK_SERVER_PORT } from '../constant'
import { getParseredDataFromLocal } from '../parser/localData'
import { IMock } from '../types'

export async function createMockServer(mockConfig: IMock) {
  const port = await portIsOccupied(MOCK_SERVER_PORT)
  const server = http.createServer()

  server.on('request', async (req, res) => {
    const _url = req.url.split('?')[0]
    const _method = req.method

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    })

    if (_url === '/') {
      res.end('本地mock服务已启动！')
    } else if (_url === '/favicon.ico') {
      res.end()
    } else {
      const allApiData = getParseredDataFromLocal()
      const obj: { url: string; method: string; outputInterface: string; stationFlag: string } = {} as any
      // 找到 url 相同的api
      ;(allApiData || []).find((item) => {
        return (item.apis || []).find((theOne) => {
          if (
            isSameApi(
              { url: theOne.url.split('?')[0], method: theOne.method },
              { url: req.url.split('?')[0], method: req.method },
              mockConfig
            )
          ) {
            obj.url = theOne.url
            obj.method = theOne.method
            obj.outputInterface = theOne.outputInterface
            obj.stationFlag = item.stationFlag
            return true
          }
        })
      })

      if (Object.keys(obj).length) {
        try {
          const { stationFlag, outputInterface } = obj
          const cmdInterfacePath = path.join(MOCK_OUTPUT_DIR, stationFlag, './_interfaces.cmd.js') // 'D:\____own____\genApi\mock' +  'station0'
          delete require.cache[require.resolve(cmdInterfacePath)] // 删除require缓存, 保证拿到最新的mock数据
          const theInterface = require(cmdInterfacePath)
          const interfaceFn = theInterface[outputInterface] // interface.GreenBookGratefulInfoResp
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
    }
  })

  server.listen(port, () => {
    console.log('\x1B[32m%s\x1B[0m', `mock 服务启动成功: http://localhost:${port}`)
  })
}

/** 判断是否是同一个api */
function isSameApi(theOne: { url: string; method: string }, req, mockConfig: IMock) {
  const { url: reqUrl, method: reqMethod } = req
  const method = theOne.method
  let url = theOne.url
  if (mockConfig?.rewrite && typeof mockConfig.rewrite === 'function') {
    url = mockConfig.rewrite(url)
  }

  const methodIsSame = method && reqMethod && method.toLowerCase() === reqMethod.toLowerCase()

  if (!methodIsSame) {
    return false
  }
  if (url === reqUrl) {
    return true
  }

  // url示例:  /api/v1/person/bank-record/${id}
  // reqUrl示例: /api/v1/person/bank-record/123456
  if (url.indexOf('${') !== -1) {
    // 将 '/api/v1/person/bank-record/${id}'  处理成 '/api/v1/person/bank-record/(.*)?'
    const regStr = url.replace(/\$\{(.*)?\}/g, '(.*)?')
    const reg = new RegExp(regStr) //   /\/api\/v1\/person\/bank-record\/(.*)?/
    return reg.test(reqUrl)
  }
  return false
}
