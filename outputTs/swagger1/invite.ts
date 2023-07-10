import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponsestring,
  ShenHeTongGuo,
  RefuseJoinReq,
  ApiResponseJianChaYaoQingMa,
  FileSystemResource,
  QueryInviteEmployeeReq,
  ApiResponseListShengChengYaoQing,
  ShengChengYaoQing,
  ApiResponseInviteJoinEchoResp,
  ApiResponseInviteLoginResp,
  InviteLoginReq,
  ApiResponseYaoQingZhuCe,
  YaoQingZhuCe0,
  ApiResponseComPageInviteEmployeeResp,
  ApiResponseInviteSetResp,
  ApiResponseboolean,
  AddOrUpdateInviteSetReq,
} from './_interfaces'

/** 取消屏蔽用户 */
export function apiInviteAuditCancelShieldId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get('/api/invite/audit/cancelShield/${id}', data, config)
}

/** 审核通过 */
export function apiInviteAuditPass(
  data: ShenHeTongGuo,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.post('/api/invite/audit/pass', data, config)
}

/** 拒绝加入 */
export function apiInviteAuditRefuse(
  data: RefuseJoinReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.post('/api/invite/audit/refuse', data, config)
}

/** 屏蔽用户 */
export function apiInviteAuditShieldId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get('/api/invite/audit/shield/${id}', data, config)
}

/** 检查邀请码 */
export function apiInviteCheckInviteCode(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseJianChaYaoQingMa> {
  return Http.get('/api/invite/checkInviteCode', data, config)
}

/** 导入未激活成员列表 */
export function apiInviteExport(
  data: QueryInviteEmployeeReq,
  config?: AxiosRequestConfig
): AxiosPromise<FileSystemResource> {
  return Http.post('/api/invite/export', data, config)
}

/** 邀请成员-生成邀请码 */
export function apiInviteGenerateInviteShare(
  data: ShengChengYaoQing,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListShengChengYaoQing> {
  return Http.post('/api/invite/generateInviteShare', data, config)
}

/** 扫码或点击链接回显数据 */
export function apiInviteInviteJoinEchoData(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseInviteJoinEchoResp> {
  return Http.get('/api/invite/inviteJoinEchoData', data, config)
}

/** 扫码或点击链接登录注册 */
export function apiInviteInviteLogin(
  data: InviteLoginReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseInviteLoginResp> {
  return Http.post('/api/invite/inviteLogin', data, config)
}

/** 邀请码加入企业 */
export function apiInviteInviteRegister(
  data: YaoQingZhuCe0,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseYaoQingZhuCe> {
  return Http.post('/api/invite/inviteRegister', data, config)
}

/** 邀请记录查询 */
export function apiInvitePageApplyType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageInviteEmployeeResp> {
  return Http.post('/api/invite/page/${applyType}', data, config)
}

/** 邀请设置查询 */
export function apiInviteQuerySetting(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseInviteSetResp> {
  return Http.get('/api/invite/querySetting', config)
}

/** 邀请设置修改 */
export function apiInviteUpdatesetting(
  data: AddOrUpdateInviteSetReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/invite/updatesetting', data, config)
}
