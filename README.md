# api 自动生成工具

### 使用方法

```shell
npm i @cxxgo/genapi -D

# 生成apiConfig.js配置文件
genapi init

# 生成 api
genapi now

```

### apiConfig.js 配置说明

```js
module.exports = {
  apiList: [
    {
      swaggerUrl: 'http://xxx', // swagger json 在线地址或本地文件路径
      outputDir: './api', // 输出路径
      tag: true, // 是否生成
      ignore: /\/test\//, // 路径带 /test/ 的接口不生成
    },
  ],
  httpTpl: 'const request:any=()=>{}', // 文件头部引入的内容
  // api 格式生成规则
  apiBody: ({ url, method, summary, name, parameters, outputInterface, pstr1, pstr2, pstr3 }) => {
    const quotationMark = pstr3 ? '`' : "'" // 引号
    return `
        /** ${summary || '无注释'} */
        export function ${name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
          ${pstr3 ? pstr3 : ''}
          return request.${method}(${quotationMark}${url}${quotationMark}, ${pstr2})
        }`
  },
  // 文件名称生成规则，可选，未配置会使用默认的生成规则
  fileName: ({ url }) => {
    const arr = url.split('/')
    return arr.find((item) => item && item !== 'api')
  },
}
```

支持每个 swagger 站点配置不同的 `fileName` 和 `apiBody` 生成规则：

```js
module.exports = {
  apiList: [
    {
      swaggerUrl: 'http://xxx1',
      outputDir: './api1',
      tag: true,
    },
    {
      swaggerUrl: 'http://xxx2',
      outputDir: './api2',
      tag: true,
      apiBody: () => {}, // 使用不同的 `apiBody` 生成规则
      fileName: () => {}, // 使用不同的`fileName`  生成规则
    },
  ],
  httpTpl: 'const request:any=()=>{}',
  apiBody: () => {},
  fileName: () => {},
}
```

### 生成 mock

在 apiConfig 配置文件中添加 mock 配置，用于给字段自定义 mock 规则。

注：如不需要生成 mock, 需显示的配置`mock:false`。

```js
// apiConfig.js
module.exports = {
  mock: {
    // 自定义mock规则
    fieldRule: {
      // 完全匹配，字段名为 code, 则生成的 mock 值为 200
      code: 200,
      // 完全匹配，字段名为 loginStatus, 则生成的 mock 值为 'ONLINE' 或 'OFFLINE' 或 ''
      loginStatus: 'ONLINE|OFFLINE|',
      // 完全匹配，字段名为 loginStatus2, 则生成的 mock 值为 'ONLINE' 或 'OFFLINE'
      loginStatus2: 'ONLINE|OFFLINE',
      // 正则匹配，若字段名匹配正则表达式 /fileAddress|imageAddress/， 则生成的 mock 值为一个随机的 url
      '/fileAddress|imageAddress/': "'@url'",
      // mock 值可以是一个函数
      total: () => {
        return "'@integer(5, 100)'"
      },
    },
  },
}
```
