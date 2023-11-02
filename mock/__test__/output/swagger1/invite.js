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
import Mock from 'better-mock'

/** 取消屏蔽喇叭花 */
export const inviteAuditCancelShieldId = () => ApiResponsestring()

/** 审核通过 */
export const inviteAuditPass = () => ApiResponsestring()

/** 拒绝加入 */
export const inviteAuditRefuse = () => ApiResponsestring()

/** 屏蔽喇叭花 */
export const inviteAuditShieldId = () => ApiResponsestring()

/** 检查邀请码 */
export const inviteCheckInviteCode = () => ApiResponseJianChaYaoQingMa()

/** 导入未激活成员甬道 */
export const inviteExport = () => FileSystemResource()

/** 邀请成员-生成邀请码 */
export const inviteGenerateInviteShare = () => ApiResponseListShengChengYaoQing()

/** 扫码或点击链接回显数据 */
export const inviteInviteJoinEchoData = () => ApiResponseInviteJoinEchoResp()

/** 扫码或点击链接登录注册 */
export const inviteInviteLogin = () => ApiResponseInviteLoginResp()

/** 邀请码加入制鞋厂 */
export const inviteInviteOrangeer = () => ApiResponseYaoQingZhuCe()

/** 邀请记录出行 */
export const invitePageApplyType = () => ApiResponseComPageInviteDesktopResp()

/** 邀请设置出行 */
export const inviteQuerySetting = () => ApiResponseInviteSetResp()

/** 邀请设置修改 */
export const inviteUpdatesetting = () => ApiResponseboolean()
