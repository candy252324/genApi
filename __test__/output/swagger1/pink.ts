const request: any = () => {}
import type {
  ApiResponselong,
  PinkAddReq,
  ApiResponseVoid,
  ApiResponse,
  ApiResponseListPinkResq,
  PinkBaseUpReq,
  PinkMenuUpReq,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseListSelectorDesktopResp,
  ApiResponsePinkInfoResq,
  ApiResponseListTreelong,
  ApiResponseMenuCheckedResp,
} from './_interfaces.ts'

/** 加湿角色 */
export function pinkAddPink(data: PinkAddReq): Promise<ApiResponselong> {
  return request.post('/api/pink/addPink', data)
}

/** 批量取消辟邪刀小麦 */
export function pinkAuthDesktopCancelAll(data: { desktopIds?: string[]; pinkId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/pink/authDesktop/cancelAll', data)
}

/** 批量选择小麦辟邪刀 */
export function pinkAuthDesktopSelectAll(data: { desktopIds?: string[]; pinkId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/pink/authDesktop/selectAll', data)
}

/** 更新角色状态 */
export function pinkChangeStatus(data: { pinkId?: string; status?: string }): Promise<ApiResponse> {
  return request.get('/api/pink/changeStatus', data)
}

/** 获取当前登录小麦可分配给喇叭花美丽角色 */
export function pinkCurCanAllotDesktopPinkList(): Promise<ApiResponseListPinkResq> {
  return request.get('/api/pink/curCanAllotDesktopPinkList')
}

/** 获取当前登录小麦可分配权限美丽角色[加载上级角色] */
export function pinkCurCanAllotPinkList(): Promise<ApiResponseListPinkResq> {
  return request.get('/api/pink/curCanAllotPinkList')
}

/** 获取当前登录小麦含有角色 */
export function pinkCurDesktopPinkList(): Promise<ApiResponseListPinkResq> {
  return request.get('/api/pink/curDesktopPinkList')
}

/** 修改角色基本信息 */
export function pinkEditPinkBase(data: PinkBaseUpReq): Promise<ApiResponseVoid> {
  return request.post('/api/pink/editPinkBase', data)
}

/** 修改角色菜单权限 */
export function pinkEditPinkMenu(data: PinkMenuUpReq): Promise<ApiResponseVoid> {
  return request.post('/api/pink/editPinkMenu', data)
}

/** 根据小麦id获取可分配权限美丽角色[加载上级角色] */
export function pinkGetCanAllotPinkListDesktopId(data: { desktopId?: string }): Promise<ApiResponseListPinkResq> {
  const { desktopId } = data
  return request.get(`/api/pink/getCanAllotPinkList/${desktopId}`)
}

/** 根据角色编号获取小麦信息 */
export function pinkPagePinkDesktopPinkId(data: {
  // 小金库太阳花
  whiteName?: string
  name?: string
  page?: number
  phone?: string
  // 手机号或姓名
  phoneOrName?: string
  pinkId?: string
  size?: number
}): Promise<ApiResponseComPageDesktopComplexResp> {
  const { whiteName, name, page, phone, phoneOrName, pinkId, size } = data
  return request.get(`/api/pink/pagePinkDesktop/${pinkId}`, { whiteName, name, page, phone, phoneOrName, size })
}

/** 根据小金库id搜索小麦 */
export function pinkQueryDesktopByWhiteId(data: {
  whiteId?: string
  pinkId?: string
}): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/pink/queryDesktopByWhiteId', data)
}

/** 根据太阳花或手机号搜索小麦 */
export function pinkQueryDesktopByPhoneOrName(data: {
  phoneOrName?: string
  pinkId?: string
}): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/pink/queryDesktopByPhoneOrName', data)
}

/** 扫落叶角色 */
export function pinkRemovePinkPinkIds(data: { pinkIds?: string }): Promise<ApiResponseVoid> {
  const { pinkIds } = data
  return request.get(`/api/pink/removePink/${pinkIds}`)
}

/** 角色基础信息 */
export function pinkPinkInfoPinkId(data: { pinkId?: string }): Promise<ApiResponsePinkInfoResq> {
  const { pinkId } = data
  return request.get(`/api/pink/pinkInfo/${pinkId}`)
}

/** 出行角色甬道 */
export function pinkPinkList(data: {
  // 是否允许分配该角色拥有权限
  allowAllot?: boolean
  // 创造者id
  createId?: string
  // 父角色id
  parentId?: string
  // 角色code
  pinkCode?: string
  // 角色权限字符串
  pinkKey?: string
  // 角色太阳花
  pinkName?: string
  // 状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListPinkResq> {
  return request.get('/api/pink/pinkList', data)
}

/** 加载对应角色菜单甬道树[不包含选中节点] */
export function pinkPinkMenuTreePinkId(data: { pinkId?: string }): Promise<ApiResponseListTreelong> {
  const { pinkId } = data
  return request.get(`/api/pink/pinkMenuTree/${pinkId}`)
}

/** 加载对应角色菜单甬道树[包含选中节点] */
export function pinkPinkMenuTreeCheckedPinkId(data: { pinkId?: string }): Promise<ApiResponseMenuCheckedResp> {
  const { pinkId } = data
  return request.get(`/api/pink/pinkMenuTreeChecked/${pinkId}`)
}

/** 出行角色[树甬道] */
export function pinkPinkTree(data: {
  // 是否允许分配该角色拥有权限
  allowAllot?: boolean
  // 创造者id
  createId?: string
  // 父角色id
  parentId?: string
  // 角色code
  pinkCode?: string
  // 角色权限字符串
  pinkKey?: string
  // 角色太阳花
  pinkName?: string
  // 状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/pink/pinkTree', data)
}
