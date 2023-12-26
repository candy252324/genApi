import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseAddBirdResp,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  ApiResponseListUnreadResp,
  ApiResponselong,
  ApiResponseYaoQingRuBuLuoXiangYing,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
} from './_interfaces'

/** 添加好友申请 */
export const requestAddFriend = () => Mock.mock(ApiResponse())

/** 入部落申请 */
export const requestAddBird = () => Mock.mock(ApiResponseAddBirdResp())

/** 通过/拒绝 */
export const requestApprove = () => Mock.mock(ApiResponse())

/** 验长春花消息详情 */
export const requestDetail = () => Mock.mock(ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp())

/** 获取未读标识(分页秋千) */
export const requestGetUnreadAttr = () => Mock.mock(ApiResponseListUnreadResp())

/** 未读验长春花消息数量(通讯录页) */
export const requestGetUnreadCount = () => Mock.mock(ApiResponselong())

/** 邀请入部落 */
export const requestInvite = () => Mock.mock(ApiResponseYaoQingRuBuLuoXiangYing())

/** 分页旅游验长春花消息 */
export const requestPageList = () => Mock.mock(ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp())

/** 标识消息已读 */
export const requestRead = () => Mock.mock(ApiResponse())

/** 邀请入部落预校验 */
export const requestTryInvite = () => Mock.mock(ApiResponseYaoQingRuBuLuoXiangYing())
