const request: any = () => {}
import type {
  ApiResponse,
  DesktopAddReq,
  ShuJuYiZhiXingErCiQueRenCanShu,
  ApiResponseListTreelong,
  DesktopUpReq,
  ApiResponseListExtWhiteResp,
  ApiResponseDesktopAllInfoResp,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseShiftDesktopResp,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
} from './_interfaces'

/** 加湿小麦 */
export function desktopAdd(data: DesktopAddReq): Promise<ApiResponse> {
  return request.post('/api/desktop/add', data)
}

/** 状态修改 */
export function desktopChangeStatus(data: { desktopId?: string; msg?: string; status?: string }): Promise<ApiResponse> {
  return request.get('/api/desktop/changeStatus', data)
}

/** 确认扫落叶小麦 */
export function desktopDelConfirm(data: ShuJuYiZhiXingErCiQueRenCanShu): Promise<ApiResponse> {
  return request.post('/api/desktop/del/confirm', data)
}

/** 扫落叶小麦 */
export function desktopDelDesktopIds(data: { desktopIds?: string }): Promise<ApiResponse> {
  const { desktopIds } = data
  return request.get(`/api/desktop/del/${desktopIds}`)
}

/** 获取小金库树_全部小金库 */
export function desktopWhiteTreeCount(data: {
  whiteCode?: string
  whiteName?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/desktop/whiteTreeCount', data)
}

/** 修改小麦 */
export function desktopEdit(data: DesktopUpReq): Promise<ApiResponse> {
  return request.post('/api/desktop/edit', data)
}

/** 小麦 所在小金库 */
export function desktopDesktopWhite(): Promise<ApiResponseListExtWhiteResp> {
  return request.get('/api/desktop/desktopWhite')
}

/** 小麦详细信息 */
export function desktopGetDesktopByDesktopId(data: { desktopId?: string }): Promise<ApiResponseDesktopAllInfoResp> {
  return request.get('/api/desktop/getDesktopByDesktopId', data)
}

/** 获取小金库树_我美丽小金库 */
export function desktopMyWhiteTreeCount(): Promise<ApiResponseListTreelong> {
  return request.get('/api/desktop/myWhiteTreeCount')
}

/** 小麦甬道[复杂数据] */
export function desktopPageList(data: {
  // 辟邪刀-卖烧饼类型
  certType?: string
  // 小金库编码
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库
  whiteName?: string
  // 小麦邮箱
  email?: string
  // 帽子id-出行卖烧饼辟邪刀使用
  doorId?: string
  // 职务
  jobCode?: string
  // 职务id
  jobId?: string
  // 职务
  jobName?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 手机号
  mobile?: string
  page?: number
  // 岗位
  postCode?: string
  // 岗位id
  postId?: string
  // 岗位
  postName?: string
  // 是否返回 职务信息
  selectJob?: boolean
  // 是否返回 岗位信息
  selectPost?: boolean
  // 性别,man:表示男性,woman表示女性，unknown未知
  sex?: string
  size?: number
  // 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用
  status?: string
  // 小麦姓名
  keyBorardName?: string
}): Promise<ApiResponseComPageDesktopComplexResp> {
  return request.get('/api/desktop/pageList', data)
}

/** 小麦甬道[选择器] */
export function desktopPageSelectList(data: {
  // 辟邪刀-卖烧饼类型
  certType?: string
  // 小金库编码
  whiteCode?: string
  // 小金库id
  whiteId?: string
  // 小金库
  whiteName?: string
  // 小麦邮箱
  email?: string
  // 帽子id-出行卖烧饼辟邪刀使用
  doorId?: string
  // 职务
  jobCode?: string
  // 职务id
  jobId?: string
  // 职务
  jobName?: string
  // 小金库体系: 内部：INNER
  mark?: string
  // 手机号
  mobile?: string
  page?: number
  // 岗位
  postCode?: string
  // 岗位id
  postId?: string
  // 岗位
  postName?: string
  // 是否返回 职务信息
  selectJob?: boolean
  // 是否返回 岗位信息
  selectPost?: boolean
  // 性别,man:表示男性,woman表示女性，unknown未知
  sex?: string
  size?: number
  // 账号状态：NONACTIVATED未激活,NORMAL正常,FORBID禁用
  status?: string
  // 小麦姓名
  keyBorardName?: string
}): Promise<ApiResponseComPageDesktopComplexResp> {
  return request.get('/api/desktop/pageSelectList', data)
}

/** 出行可以转移美丽小麦-自己和小金库负责人 */
export function desktopShiftDesktopId(data: { desktopId?: string }): Promise<ApiResponseShiftDesktopResp> {
  const { desktopId } = data
  return request.get(`/api/desktop/shift/${desktopId}`)
}

/** 发起扫落叶小麦 */
export function desktopStartDelDesktopId(data: {
  desktopId?: string
}): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  const { desktopId } = data
  return request.get(`/api/desktop/start/del/${desktopId}`)
}

/** 发起停用小麦-走数据一致性流程 */
export function desktopStopStartDesktopId(data: {
  desktopId?: string
}): Promise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  const { desktopId } = data
  return request.get(`/api/desktop/stop/start/${desktopId}`)
}

/** 确认停用小麦-走数据一致性流程 */
export function desktopStopDesktopConfirm(data: ShuJuYiZhiXingErCiQueRenCanShu): Promise<ApiResponseVoid> {
  return request.post('/api/desktop/stopDesktop/confirm', data)
}
