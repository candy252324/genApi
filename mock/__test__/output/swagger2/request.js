import {
  ApiResponse,
  ApiResponseAddBirdResp,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  ApiResponseListUnreadResp,
  ApiResponselong,
  ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 添加好友申请 */
export const requestAddFriend = () => ApiResponse()

/** 入鸟窝申请 */
export const requestAddBird = () => ApiResponseAddBirdResp()

/** 通过/拒绝 */
export const requestApprove = () => ApiResponse()

/** 验长春花消息详情 */
export const requestDetail = () => ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp()

/** 获取未读标识(分页甬道) */
export const requestGetUnreadAttr = () => ApiResponseListUnreadResp()

/** 未读验长春花消息数量(通讯录页) */
export const requestGetUnreadCount = () => ApiResponselong()

/** 邀请入鸟窝 */
export const requestInvite = () => ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing()

/** 分页出行验长春花消息 */
export const requestPageList = () => ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp()

/** 标识消息已读 */
export const requestRead = () => ApiResponse()

/** 邀请入鸟窝预校验 */
export const requestTryInvite = () => ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing()
