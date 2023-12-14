import Mock from 'better-mock'
import {
  ApiResponsestring,
  ApiResponseJianChaYaoQingMa,
  FileSystemResource,
  ApiResponseListShengChengYaoQing,
  ApiResponseInviteJoinEchoResp,
  ApiResponseInviteLoginResp,
  ApiResponseYaoQingZhuCe,
  ApiResponseComPageInviteDesktopResp,
  ApiResponseInviteSetResp,
  ApiResponseboolean,
} from './_interfaces'

/** 取消屏蔽喇叭花 */
export const inviteAuditCancelShieldId = () => Mock.mock(ApiResponsestring())

/** 审核通过 */
export const inviteAuditPass = () => Mock.mock(ApiResponsestring())

/** 拒绝加入 */
export const inviteAuditRefuse = () => Mock.mock(ApiResponsestring())

/** 屏蔽喇叭花 */
export const inviteAuditShieldId = () => Mock.mock(ApiResponsestring())

/** 检查邀请码 */
export const inviteCheckInviteCode = () => Mock.mock(ApiResponseJianChaYaoQingMa())

/** 导入未激活成员甬道 */
export const inviteExport = () => Mock.mock(FileSystemResource())

/** 邀请成员-生成邀请码 */
export const inviteGenerateInviteShare = () => Mock.mock(ApiResponseListShengChengYaoQing())

/** 扫码或点击链接回显数据 */
export const inviteInviteJoinEchoData = () => Mock.mock(ApiResponseInviteJoinEchoResp())

/** 扫码或点击链接登录注册 */
export const inviteInviteLogin = () => Mock.mock(ApiResponseInviteLoginResp())

/** 邀请码加入制鞋厂 */
export const inviteInviteOrangeer = () => Mock.mock(ApiResponseYaoQingZhuCe())

/** 邀请记录出行 */
export const invitePageApplyType = () => Mock.mock(ApiResponseComPageInviteDesktopResp())

/** 邀请设置出行 */
export const inviteQuerySetting = () => Mock.mock(ApiResponseInviteSetResp())

/** 邀请设置修改 */
export const inviteUpdatesetting = () => Mock.mock(ApiResponseboolean())
