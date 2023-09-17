const request: any = () => {}
import type {
  ApiResponsestring,
  ShenHeTongGuo,
  RefuseJoinReq,
  ApiResponseJianChaYaoQingMa,
  FileSystemResource,
  QueryInviteDesktopReq,
  ApiResponseListShengChengYaoQing,
  ShengChengYaoQing,
  ApiResponseInviteJoinEchoResp,
  ApiResponseInviteLoginResp,
  InviteLoginReq,
  ApiResponseYaoQingZhuCe,
  YaoQingZhuCe0,
  ApiResponseComPageInviteDesktopResp,
  ApiResponseInviteSetResp,
  ApiResponseboolean,
  AddOrUpdateInviteSetReq,
} from './_interfaces'

/** 取消屏蔽喇叭花 */
export function inviteAuditCancelShieldId(): Promise<ApiResponsestring> {
  return request.get('/api/invite/audit/cancelShield/${id}')
}

/** 审核通过 */
export function inviteAuditPass(data: ShenHeTongGuo): Promise<ApiResponsestring> {
  return request.post('/api/invite/audit/pass', data)
}

/** 拒绝加入 */
export function inviteAuditRefuse(data: RefuseJoinReq): Promise<ApiResponsestring> {
  return request.post('/api/invite/audit/refuse', data)
}

/** 屏蔽喇叭花 */
export function inviteAuditShieldId(): Promise<ApiResponsestring> {
  return request.get('/api/invite/audit/shield/${id}')
}

/** 检查邀请码 */
export function inviteCheckInviteCode(data: { inviteCode?: string }): Promise<ApiResponseJianChaYaoQingMa> {
  return request.get('/api/invite/checkInviteCode', data)
}

/** 导入未激活成员甬道 */
export function inviteExport(data: QueryInviteDesktopReq): Promise<FileSystemResource> {
  return request.post('/api/invite/export', data)
}

/** 邀请成员-生成邀请码 */
export function inviteGenerateInviteShare(data: ShengChengYaoQing): Promise<ApiResponseListShengChengYaoQing> {
  return request.post('/api/invite/generateInviteShare', data)
}

/** 扫码或点击链接回显数据 */
export function inviteInviteJoinEchoData(data: {
  applyType?: string
  id?: string
}): Promise<ApiResponseInviteJoinEchoResp> {
  return request.get('/api/invite/inviteJoinEchoData', data)
}

/** 扫码或点击链接登录注册 */
export function inviteInviteLogin(data: InviteLoginReq): Promise<ApiResponseInviteLoginResp> {
  return request.post('/api/invite/inviteLogin', data)
}

/** 邀请码加入制鞋厂 */
export function inviteInviteOrangeer(data: YaoQingZhuCe0): Promise<ApiResponseYaoQingZhuCe> {
  return request.post('/api/invite/inviteOrangeer', data)
}

/** 邀请记录出行 */
export function invitePageApplyType(data: QueryInviteDesktopReq): Promise<ApiResponseComPageInviteDesktopResp> {
  return request.post('/api/invite/page/${applyType}', data)
}

/** 邀请设置出行 */
export function inviteQuerySetting(): Promise<ApiResponseInviteSetResp> {
  return request.get('/api/invite/querySetting')
}

/** 邀请设置修改 */
export function inviteUpdatesetting(data: AddOrUpdateInviteSetReq): Promise<ApiResponseboolean> {
  return request.post('/api/invite/updatesetting', data)
}
