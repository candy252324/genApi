# api 自动生成工具

注：目前只支持解析 swagger 2.0 接口文档。

## 安装

```shell
npm install @cxxgo/genapi -D
```

## 使用

#### 1. 配置文件生成

```shell
# 在当前命令执行路径下生成 apiConfig 配置文件
genapi init
```

可选参数:

- `--force`： 是否覆盖本地配置文件。

  如果本地已经存在`apiConfig.ts` 或 `apiConfig.js` 配置文件，执行 `genapi init --force` 将会生成新的配置文件覆盖本地配置文件。

#### 2. 生成 api

```shell
# 根据 apiConfig 中的配置自动生成api
genapi now
```

可选参数:

- `--config <configPath>`： 自定义配置文件路径。

  执行 `genapi now` 时，默认将当前目录下的 `apiConfig.ts` 或 `apiConfig.js` 当做配置文件。

  当然也可以手动指定，如：`genapi now -c ./xxx/myApiConf.ts`， 指定配置文件路径为 `./xxx/myApiConf.ts`。

- `--no-mock`： 是否不生成 mock 数据。

  执行 `genapi now` 除了会生成 api 数据外，还会默认在 node_modules 目录下生成 mock 数据。
  `genapi now --no-mock` 则不生成 mock 数据，可以一定程度上减少命令执行时间 。

#### 3. 启动 mock 服务

```shell
# 启动本地 mock 服务，默认端口 8090
genapi mock-server
```

### apiConfig.js 配置说明

```js
module.exports = {
  apiList: [
    {
      swaggerUrl: 'http://xxx', // swagger json 在线地址或本地文件路径
      outputDir: './api', // 输出路径
      gen: true, // 是否生成
      exclude: [/\/test/, '/api/inner/log'], // 无需生成的接口, 优先级比 include 高
      include: /\/user/, // 需要生成的接口，优先级比 exclude 低
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
  fileExt: 'ts', // 文件后缀, 可选值：ts 或 js， 默认 ts
}
```

支持每个 swagger 站点配置不同的`httpTpl`、 `fileName` 和 `apiBody` 生成规则：

```js
module.exports = {
  apiList: [
    {
      swaggerUrl: 'http://xxx1',
      outputDir: './api1',
      gen: true,
    },
    {
      swaggerUrl: 'http://xxx2',
      outputDir: './api2',
      gen: true,
      httpTpl: 'const myRequest:any=()=>{}', // 配置不同的 httpTpl
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

执行 `genapi now` 除了会在项目目录中生成 api 外，还会自动在 `/node_modules/@cxxgo/genapi/mock` 目录下生成 mock 数据。使用方式有两种：

> 注：如不需要生成 mock, 需显示的配置`mock:false`。

#### mock 使用方式 1

在项目入口文件中 `import '@cxxgo/genapi/mock/index'`

这种方式基于 [better-mock](https://www.npmjs.com/package/better-mock), XHR 和 fetch 请求均可以拦截。

#### mock 使用方式 2

执行 `genapi mock-server`, 会启动 `http://locahost:8090` 的本地服务，直接访问这个地址即可

#### mock 数据生成规则配置

工具本身有内置的 mock 生成规则，当然你也可以有自己的规则，配置规则和 [mockjs](http://mockjs.com/examples.html#String) 完全一致。

以下 mock 规则配置示例：

```js
// apiConfig.js
module.exports = {
  mock: {
    port: 8090, // mock 服务端口号，默认 8090
    rewrite: (path) => `/event-center${path}`, // mock 服务接口重写规则
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
