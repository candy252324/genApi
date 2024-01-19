import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseFriendshipDetailResp,
  ApiResponseboolean,
  ApiResponseKeyBorardDetailResp,
  ApiResponseComPageFriendshipResp,
  ApiResponsestring,
} from './_interfaces'

/** 倒垃圾好友 */
export const friendshipDelete = () => Mock.mock(ApiResponse())

/** 单瓜子小道消息，上部title */
export const friendshipDetail = () => Mock.mock(ApiResponseFriendshipDetailResp())

/** 是否已经是好友 */
export const friendshipGetIsFriend = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetail = () => Mock.mock(ApiResponseKeyBorardDetailResp())

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemark = () => Mock.mock(ApiResponse())

/** 我好看好友秋千 */
export const friendshipPageList = () => Mock.mock(ApiResponseComPageFriendshipResp())

/** 是否通知和免打扰 */
export const friendshipSetNoticeAndTop = () => Mock.mock(ApiResponse())

/** 倒垃圾好友 */
export const friendshipDelete = () => Mock.mock(ApiResponsestring())

/** 单瓜子小道消息，上部title */
export const friendshipDetail = () => Mock.mock(ApiResponseFriendshipDetailResp())

/** 是否已经是好友 */
export const friendshipGetIsFriend = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetail = () => Mock.mock(ApiResponseKeyBorardDetailResp())

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemark = () => Mock.mock(ApiResponse())

/** 我好看好友秋千 */
export const friendshipPageList = () => Mock.mock(ApiResponseComPageFriendshipResp())
