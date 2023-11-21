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
  /** 接口所属文件名称， 如 user.ts */
  fileName: string
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
