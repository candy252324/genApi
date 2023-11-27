export interface IApiStation {
  /** swagger 地址(可以是服务端地址也可以是 swagger json 本地文件路径) */
  swaggerUrl: string
  /** 输出到哪个目录中, cjh todo 校验 */
  outputDir: string
  /** 是否生成(默认为 true) */
  tag?: boolean
  /** 无需生成的接口 */
  ignore?: RegExp
  /** 接口前缀 cjh todo */
  prefix?: string
  /** 文件头部引入内容 */
  httpTpl?: string
  /** 单个站点配置定制化的文件名称生成规则（需包含后缀，如无后缀默处理成.ts）*/
  fileName?: string | Function
  /** 单个站点配置定制化的 api 结构 */
  apiBody?: Function
}

export interface IMock {
  /** 本地启动的 mock 服务端口号 */
  port?: number
  /** 自定义 mock 生成规则 */
  fieldRules?: {
    [key: string]: any
  }
}

export interface IApiConfig {
  /** 接口列表 */
  apiList: IApiStation[]
  /** 文件头部引入内容 */
  httpTpl?: string
  /** api 结构 */
  apiBody: Function
  /** 文件名称生成规则 */
  fileName?: Function
  mock?: boolean | IMock
}

export interface IParams {
  /** 参数名 */
  name: string
  /** 参数注释 */
  description: string // 注释
  in: 'header' | 'body' | 'query' | 'path' // 可能值： body ,header, query, path...
  /** 是否是简单 js 类型 */
  isSimpleJsType: boolean //   cjh todo
  /** 是否是数组 */
  isArray: boolean
  /** 入参类型，string, number, boolean, UserInterface */
  type
}

export interface IApiModel {
  /** 接口路径 */
  url: string
  /** 请求方法 */
  method: string
  /** 接口名称, 如 getUserList */
  name: string
  /** 接口注释 */
  summary: string
  /** 接口入参 */
  parameters: IParams[]
  /** 接口出参 interface */
  outputInterface: string
  /** 接口所属文件名称（不包含后缀，如 user）*/
  fileName: string
  /** 后缀（ts 或 js, 不包含点号） */
  ext: string
}

export interface IInterface {
  // 原始 key 处理后结果，如： ApiResponse
  name: string
  /** 是否是数组 */
  isArray?: boolean
  /** 是否是简单 js 类型, 如 number、string 等 */
  isSimpleJsType?: boolean
  /** 如 string, number, boolean , UserInterface */
  type?: string
  /** 注释 */
  description?: string
  properties?: IInterface[]
}

export interface IParsered extends IApiStation {
  /** swagger 站点标记，如 station0 station1 */
  stationFlag: string
  apis: IApiModel[]
  interfaces: IInterface[]
}

export interface IApiGroup {
  /** api 所属文件名称， 如 user */
  fileName: string
  /** 后缀（ts 或 js, 不包含点号） */
  ext: string
  /** 该文件名内所有的接口 */
  apis: IApiModel[]
}
