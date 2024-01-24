# api 自动生成工具

注：目前只支持解析 swagger 2.0 接口文档。

## 安装

```shell
npm install @cxxgo/genapi -D
```

## 使用

#### 1. 生成配置文件

```shell
# 生成 apiConfig 配置文件
genapi init
```

可选参数:

- `--force`： 是否覆盖本地配置文件。

  配置文件支持 `js` 和 `ts` 格式，如果本地已经存在`apiConfig.ts` 或 `apiConfig.js` 配置文件，执行 `genapi init --force` 将会生成新的配置文件覆盖本地配置文件。

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
# 启动本地 mock 服务，默认端口号 8090
genapi mock-server
```

## 配置文件说明

#### 1. 简单示例

以下为执行 `genapi init` 默认生成的 `apiConfig.ts` 配置：

```ts
import { type UserConfig } from '@cxxgo/genapi'

const config: UserConfig = {
  apiList: [
    {
      swaggerUrl: '', // 接口文档 json 地址
      outputDir: '/src/api', // 生成结果的输出路径
    },
  ],
  httpTpl: "import request from './request/index'", // 文件头部引入的内容，通常用于引入封装的请求方法
  // 自定义 api 结构
  apiBody: ({ url, method, summary, name, outputInterface, pstr1, pstr2, pstr3 }) => {
    const quotation = pstr3 ? '`' : "'" // 引号类型
    return `
        /** ${summary || '无注释'} */
        export function ${name}  (${pstr1}) :Promise<${outputInterface || undefined}>{
          ${pstr3 ? pstr3 : ''}
          return Http.${method}(${quotation}${url}${quotation}, ${pstr2})
        }`
  },
}

export default config
```

基于以上配置，假如现在有以下三个接口：

```
get:   /api/user/info/{id}
post:  /api/user/changePswd
get:   /api/dept/list
```

将生成以下格式的接口文件和数据：

```
|-src
  |-api
     _interfaces.ts  // 自动生成的类型文件，名称不支持自定义
     user.ts  // 接口文件
     dept.ts // 接口文件
```

src/api/user.ts 内容：

```ts
import { ExampleModel1, ExampleModel2, ExampleModel3 } from './_interfaces.ts'

/** 获取用户信息 */
// 注：'data: { id: string }' 这一串即 apiBody 中的 pstr1
export function userInfo(data: { id: string }): Promise<ExampleModel1> {
  const { id } = data // 注： 'const { id } = data' 这一串即 apiBody 中的 pstr3
  return request.get(`/api/user/info?${id}`)
}

/** 用户修改密码 */
export function userChangePswd(data: ExampleModel2): Promise<ExampleModel3> {
  return request.post('/api/user/changePswd', data) // 注：'data' 即 apiBody 中的 pstr2
}
```

src/api/dept.ts 内容：

```ts
import { ExampleModel4 } from './_interfaces.ts'

/** 获取部门列表 */
export function deptList(): Promise<ExampleModel4> {
  return request.get('/api/dept/list')
}
```

#### 2. 更多配置示例

```ts
import { type UserConfig } from '@cxxgo/genapi'
const config: UserConfig = {
  apiList: [
    {
      swaggerUrl: 'http://xxx1', // 接口文档 json 地址（可以是服务端地址，也可以是本地 json 文件路径, 如：'./data.json'）
      outputDir: './src/api1', // 生成结果的输出路
      gen: true, // 是否生成
      exclude: [/api\/test/, '/api/xxx/xxx'], // 无需生成的接口, 支持正则匹配和字符串完全匹配
    },
    {
      swaggerUrl: 'http://xxx2',
      outputDir: './src/api2',
      gen: true,
      include: [/api\/user/, '/api/dept/list'], // 只需生成的接口, 优先级比 exclude 低
      httpTpl:"const myRequest:any=()=>{}",  // 使用不同的 httpTpl
      pathRewrite: () => {}, // 使用不同的 `pathRewrite` 生成规则
      fileName: () => {}, // 使用不同的 `fileName` 生成规则
      apiName: () => {}, // 使用不同的 `apiName` 生成规则
      apiBody: () => {}, // 使用不同的 `apiBody` 生成规则
    },
  ],
  // 文件头部引入的内容，通常用于引入封装的请求方法
  httpTpl: 'const request:any=()=>{}',
  /**
   * 接口路径重写
   * @param url 接口原本路径
   **/
  pathRewrite: ({ url }) => {
    return `/prefix/${url}` // /xxx/xxx => /prefix/xxx/xxx
  },
  /**
   * 自定义接口所属文件名称生成规则
   * @param url 接口路径（pathRewrite 后的路径）
   * @param originUrl 接口路径（pathRewrite 后的路径）
   **/
  fileName: ({ url, originUrl }) => {},
  /**
   * 自定义接口所属文件名称生成规则
   * @param url 同上
   * @param originUrl 同上
   * @param method 请求方法（小写，如 get、post）
   **/
  apiName: ({ url, originUrl ，method,defaultApiName}) => {},
  // summary ： 接口注释，可能为空字符串
  // name ：接口名称，如果配了fileName 函数，那将是通过 fileName 函数处理后得到的名称，否则是工具默认生成的名称
  // outputInterface ：出参 interface
  /**
   * 自定义api结构
   * @param url 同上
   * @param originUrl 同上
   * @param method 同上
   * @param summary 后端写的接口注释，可能为空字符串
   * @param name 接口名称（如果配了fileName 函数，那将是通过 fileName 函数处理后得到的名称，否则是工具使用默认规则生成的名称）
   * @param outputInterface 接口输出数据模型
   * @param parameters 接口所有入参
   * @param pstr1 由 parameters 处理得到，值如 data: { id: string }，可能为空字符串
   * @param pstr2 由 parameters 处理得到，值如 data，可能为空字符串
   * @param pstr3 由 parameters 处理得到，当路径中存在参数时，会有值，值如 const { id } = data
   **/
  apiBody: ({ url, originUrl, method, summary, name, outputInterface, pstr1, pstr2, pstr3 }) => {
    return ''
  },
  //  mock 相关
  mock: {
    /**
     * mock 路径重写
     * @param url 接口路径（pathRewrite 后的路径）
     */
    rewrite: ({url}) => {
      return `/api/${url}`
    },
    port: 8090,  // mock 服务端口号， 默认 8090
    // 工具本身有内置的 mock 生成规则，当然你也可以使用 fieldRules 进行自定义
    fieldRules: {
      code: 200,   // 完全匹配，值为数字
      size: '20',     // 完全匹配，值为字符串
      created: '@datetime',       // 完全匹配，值为mock字符串， http://mockjs.com/examples.html
      // 完全匹配，值为函数
      total: () => {
        return +this.size * 10 || 100
      },
      '/url/': '@url',   // 正则匹配，值为mock字符串
      loginStatus: 'ONLINE|OFFLINE|',   // loginStatus 的 mock 结果为 'ONLINE' 或 'OFFLINE' 或 ''，若不期望生成空字符串，去除末尾的竖线即可
    },
  },
}
export default config
```

## 使用 mock 服务

**使用方式 1**

执行 `genapi mock-server`, 会启动 `http://locahost:8090` 的本地 mock 服务，直接访问这个地址即可

**使用方式 2**

在项目入口文件中 `import '@cxxgo/genapi/mock/index'`

(基于 [better-mock](https://www.npmjs.com/package/better-mock), XHR 和 fetch 请求均可以拦截)
