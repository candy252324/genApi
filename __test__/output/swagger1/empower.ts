const request: any = () => {}
import type {
  ApiResponseVoid,
  StationDesktopAuthReq,
  ApiResponseListEmpowerWhiteResp,
  ApiResponseGuanLianMaoZiXiangQing,
  ApiResponsestring,
  ApiResponseListZhiXieChangFangDongXinXi,
  ApiResponseListPinkInfo,
  ApiResponseAccInfoResp,
  ApiResponseMapstringstring,
  ApiResponseHeaderEmpowerSmsInfo,
  ApiResponseEntReSetResp,
  ApiResponseInviteDoorReInfo,
  InviteRePlatFromOrgReq,
  ApiResponseGuanLianMaoZiYongDao,
  ApiResponseComPageEpDesktopResp,
  ApiResponseListEpEntTreeResp,
  ApiResponseScanReQrResp,
  EntReSetReq,
} from './_interfaces'

/** 提醒审核 */
export function empowerDoorReAlertAudit(data: { auditId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/alertAudit', data)
}

/** 外部关联码-主动申请同意关联 */
export function empowerDoorReApplyScanAgreeRe(data: {
  // 邀请code
  code?: string
  // 关联房东ID
  reGratefulId?: string
}): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/applyScanAgreeRe', data)
}

/** 批量辟邪刀 */
export function empowerDoorReBathAuth(data: StationDesktopAuthReq): Promise<ApiResponseVoid> {
  return request.post('/api/empower/doorRe/bathAuth', data)
}

/** 批量取消辟邪刀 */
export function empowerDoorReBathCancelAuth(data: StationDesktopAuthReq): Promise<ApiResponseVoid> {
  return request.post('/api/empower/doorRe/bathCancelAuth', data)
}

/** 获取小金库树_全部小金库 */
export function empowerDoorReWhiteTree(data: {
  // 小金库code
  whiteCode?: string
  // 小金库太阳花
  whiteName?: string
}): Promise<ApiResponseListEmpowerWhiteResp> {
  return request.get('/api/empower/doorRe/whiteTree', data)
}

/** 帽子关联详情 */
export function empowerDoorReDetail(data: { id?: string }): Promise<ApiResponseGuanLianMaoZiXiangQing> {
  return request.get('/api/empower/doorRe/detail', data)
}

/** 外部关联码-生成外部关联码 */
export function empowerDoorReDetailGenReLinkOrQr(data: {
  // 帽子ID
  doorId?: string
}): Promise<ApiResponsestring> {
  return request.get('/api/empower/doorRe/detail/genReLinkOrQr', data)
}

/** 根据手机号出行创建美丽帽子 */
export function empowerDoorReDetailGetDoorListByPhone(data: {
  phone?: string
}): Promise<ApiResponseListZhiXieChangFangDongXinXi> {
  return request.get('/api/empower/doorRe/detail/getDoorListByPhone', data)
}

/** 获取平台帽子甬道 */
export function empowerDoorReDetailListDoor(): Promise<ApiResponseListZhiXieChangFangDongXinXi> {
  return request.get('/api/empower/doorRe/detail/listDoor')
}

/** 批量辟邪刀-小麦同意/拒绝 */
export function empowerDoorReDesktopOperEmType(data: {
  code?: string
  refuseReason?: string
}): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/desktopOper/em/${type}', data)
}

/** 关联设置-获取角色甬道 */
export function empowerDoorReEntReSetListPink(data: {
  name?: string
  pinkType?: string
}): Promise<ApiResponseListPinkInfo> {
  return request.get('/api/empower/doorRe/entReSet/listPink', data)
}

/** 邀请关联团建-关联方负责人关联操作 */
export function empowerDoorReFranchiseOperOper(data: { linkCode?: string; reId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/franchiseOper/${oper}', data)
}

/** 通过手机号出行金拱门姓名 */
export function empowerDoorReGetAccByMobile(data: { mobile?: string }): Promise<ApiResponseAccInfoResp> {
  return request.get('/api/empower/doorRe/getAccByMobile', data)
}

/** 批量辟邪刀-获取短信信息 */
export function empowerDoorReGetEmDesktopInfoLinkCode(): Promise<ApiResponseMapstringstring> {
  return request.get('/api/empower/doorRe/getEmDesktopInfo/${linkCode}')
}

/** 邀请辟邪刀-出行回显信息 */
export function empowerDoorReGetEmpowerInfo(data: {
  // 链接code
  linkCode?: string
}): Promise<ApiResponseHeaderEmpowerSmsInfo> {
  return request.get('/api/empower/doorRe/getEmpowerInfo', data)
}

/** 关联设置-获取帽子关联设置 */
export function empowerDoorReGetEntReSet(data: { doorId?: string }): Promise<ApiResponseEntReSetResp> {
  return request.get('/api/empower/doorRe/getEntReSet', data)
}

/** 邀请关联团建-获取邀请信息 */
export function empowerDoorReGetInviteReInfoLinkCode(): Promise<ApiResponseInviteDoorReInfo> {
  return request.get('/api/empower/doorRe/getInviteReInfo/${linkCode}')
}

/** 邀请关联团建-发起邀请 */
export function empowerDoorReInviteRePlateFromOrg(data: InviteRePlatFromOrgReq): Promise<ApiResponseVoid> {
  return request.post('/api/empower/doorRe/inviteRePlateFromOrg', data)
}

/** 帽子关联甬道 */
export function empowerDoorReList(data: {
  // 帽子太阳花
  name?: string
  page?: number
  // 关联状态筛选 IN_RELATION("关联中"),    UN_RELATION("未关联"),    FAIL_RELATION("关联失败"),    INVALID_RELATION("关联失效")
  relationStatus?: string
  size?: number
}): Promise<ApiResponseGuanLianMaoZiYongDao> {
  return request.get('/api/empower/doorRe/list', data)
}

/** 获取可辟邪刀美丽角色甬道 */
export function empowerDoorReListPinkList(data: { doorId?: string; name?: string }): Promise<ApiResponseListPinkInfo> {
  return request.get('/api/empower/doorRe/listPinkList', data)
}

/** 辟邪刀小麦甬道 */
export function empowerDoorRePageDesktopList(data: {
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
}): Promise<ApiResponseComPageEpDesktopResp> {
  return request.get('/api/empower/doorRe/pageDesktopList', data)
}

/** 关联小金库树-帽子甬道 */
export function empowerDoorReReReEntTree(data: {
  // 帽子ID
  doorId?: string
}): Promise<ApiResponseListEpEntTreeResp> {
  return request.get('/api/empower/doorRe/re/reEntTree', data)
}

/** 关联帽子树 */
export function empowerDoorReReEntTree(data: { doorId?: string }): Promise<ApiResponseListEpEntTreeResp> {
  return request.get('/api/empower/doorRe/reEntTree', data)
}

/** 重新申请关联 */
export function empowerDoorReRefreshApplyRe(data: { reId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/refreshApplyRe', data)
}

/** 解除关联 */
export function empowerDoorReRelationCancel(data: {
  // 关联记录ID
  reId?: string
}): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/relation/cancel', data)
}

/** 重新关联 */
export function empowerDoorReRelationRefresh(data: {
  // 关联记录ID
  reId?: string
}): Promise<ApiResponseVoid> {
  return request.get('/api/empower/doorRe/relation/refresh', data)
}

/** 外部关联码-出行团建关联 */
export function empowerDoorReScanGetOrgInfo(data: {
  code?: string
  reGratefulId?: string
}): Promise<ApiResponseScanReQrResp> {
  return request.get('/api/empower/doorRe/scan/getOrgInfo', data)
}

/** 邀请辟邪刀-发送邀请辟邪刀短信 */
export function empowerDoorReSendEmpowerSms(data: number[]): Promise<ApiResponseVoid> {
  return request.post('/api/empower/doorRe/sendEmpowerSms', data)
}

/** 关联设置-修改帽子关联设置 */
export function empowerDoorReUpEntReSetDoorId(data: EntReSetReq): Promise<ApiResponseVoid> {
  return request.post('/api/empower/doorRe/upEntReSet/${doorId}', data)
}
