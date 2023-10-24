import {
  ApiResponseVoid,
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
  ApiResponseGuanLianMaoZiYongDao,
  ApiResponseComPageEpDesktopResp,
  ApiResponseListEpEntTreeResp,
  ApiResponseScanReQrResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 提醒审核 */
export const empowerDoorReAlertAudit = () => ApiResponseVoid()

/** 外部关联码-主动申请同意关联 */
export const empowerDoorReApplyScanAgreeRe = () => ApiResponseVoid()

/** 批量辟邪刀 */
export const empowerDoorReBathAuth = () => ApiResponseVoid()

/** 批量取消辟邪刀 */
export const empowerDoorReBathCancelAuth = () => ApiResponseVoid()

/** 获取小金库树_全部小金库 */
export const empowerDoorReWhiteTree = () => ApiResponseListEmpowerWhiteResp()

/** 帽子关联详情 */
export const empowerDoorReDetail = () => ApiResponseGuanLianMaoZiXiangQing()

/** 外部关联码-生成外部关联码 */
export const empowerDoorReDetailGenReLinkOrQr = () => ApiResponsestring()

/** 根据手机号出行创建美丽帽子 */
export const empowerDoorReDetailGetDoorListByPhone = () => ApiResponseListZhiXieChangFangDongXinXi()

/** 获取平台帽子甬道 */
export const empowerDoorReDetailListDoor = () => ApiResponseListZhiXieChangFangDongXinXi()

/** 批量辟邪刀-小麦同意/拒绝 */
export const empowerDoorReDesktopOperEmType = () => ApiResponseVoid()

/** 关联设置-获取角色甬道 */
export const empowerDoorReEntReSetListPink = () => ApiResponseListPinkInfo()

/** 邀请关联团建-关联方负责人关联操作 */
export const empowerDoorReFranchiseOperOper = () => ApiResponseVoid()

/** 通过手机号出行金拱门姓名 */
export const empowerDoorReGetAccByMobile = () => ApiResponseAccInfoResp()

/** 批量辟邪刀-获取短信信息 */
export const empowerDoorReGetEmDesktopInfoLinkCode = () => ApiResponseMapstringstring()

/** 邀请辟邪刀-出行回显信息 */
export const empowerDoorReGetEmpowerInfo = () => ApiResponseHeaderEmpowerSmsInfo()

/** 关联设置-获取帽子关联设置 */
export const empowerDoorReGetEntReSet = () => ApiResponseEntReSetResp()

/** 邀请关联团建-获取邀请信息 */
export const empowerDoorReGetInviteReInfoLinkCode = () => ApiResponseInviteDoorReInfo()

/** 邀请关联团建-发起邀请 */
export const empowerDoorReInviteRePlateFromOrg = () => ApiResponseVoid()

/** 帽子关联甬道 */
export const empowerDoorReList = () => ApiResponseGuanLianMaoZiYongDao()

/** 获取可辟邪刀美丽角色甬道 */
export const empowerDoorReListPinkList = () => ApiResponseListPinkInfo()

/** 辟邪刀小麦甬道 */
export const empowerDoorRePageDesktopList = () => ApiResponseComPageEpDesktopResp()

/** 关联小金库树-帽子甬道 */
export const empowerDoorReReReEntTree = () => ApiResponseListEpEntTreeResp()

/** 关联帽子树 */
export const empowerDoorReReEntTree = () => ApiResponseListEpEntTreeResp()

/** 重新申请关联 */
export const empowerDoorReRefreshApplyRe = () => ApiResponseVoid()

/** 解除关联 */
export const empowerDoorReRelationCancel = () => ApiResponseVoid()

/** 重新关联 */
export const empowerDoorReRelationRefresh = () => ApiResponseVoid()

/** 外部关联码-出行团建关联 */
export const empowerDoorReScanGetOrgInfo = () => ApiResponseScanReQrResp()

/** 邀请辟邪刀-发送邀请辟邪刀短信 */
export const empowerDoorReSendEmpowerSms = () => ApiResponseVoid()

/** 关联设置-修改帽子关联设置 */
export const empowerDoorReUpEntReSetDoorId = () => ApiResponseVoid()
