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

执行 `genapi now` 除了会在项目目录中生成 api 外，还会自动在 `/node_modules/@cxxgo/genapi/mock` 目录下生成 mock 数据。

生成 mock 数据后，执行 `genapi mock-server`, 会启动 `http://locahost:8090` 的本地服务，直接访问这个地址即可。

工具本身有内置的 mock 生成规则，当然你也可以有自己的规则，配置规则和 [mockjs](http://mockjs.com/examples.html#String) 完全一致。

> 注：如不需要生成 mock, 需显示的配置`mock:false`。

以下 mock 规则配置示例：

```js
// apiConfig.js
module.exports = {
  mock: {
    // 根据字段自定义mock规则
    fieldRules: {
      // 完全匹配，值为数字
      code: 200,
      // 完全匹配，值为字符串
      size: '20',
      // 完全匹配，值为mock字符串
      created: '@datetime',
      // 完全匹配，值为函数
      total: () => {
        return +this.size * 10 || 100
      },
      // 正则匹配，值为mock字符串
      '/url/': '@url',
      // 正则匹配，值为正则, 改示例的含义是：字段 loginStatus 的值为 'ONLINE' 或 'OFFLINE' 或 ''，
      // 若不期望生成空字符串，去除末尾的竖线即可
      loginStatus: 'ONLINE|OFFLINE|',
    },
  },
}
```
