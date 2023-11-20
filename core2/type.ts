export interface IApi {
  /** swagger 地址(可以是服务端地址也可以是 swagger json 本地文件路径) */
  swaggerUrl: string
  /** 输出到哪个目录中 */
  outputDir: string
  /** 是否生成(默认为 true) */
  tag?: boolean
  /** 无需生成的接口 */
  ignore?: RegExp
  /** 接口前缀 cjh todo */
  prefix?: string
  /** 单个站点配置定制化的文件名称生成规则 cjh todo */
  fileName?: Function
  /** 单个站点配置定制化的 api 结构 */
  apiBody?: Function
}

export interface IMock {
  /** 本地启动的 mock 服务端口号 */
  port: number
  /** 自定义 mock 生成规则 */
  fieldRules: {
    [key: string]: any
  }
}

export interface IApiConfig {
  /** 接口列表 */
  apiList: IApi[]
  /** 文件头部引入内容 */
  httpTpl: string
  /** api 结构 */
  apiBody: Function
  /** 文件名称生成规则 */
  fileName?: Function
  mock?: boolean | IMock
}
