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
    const quotationMark = pstr3 ? '`' : "'"
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
