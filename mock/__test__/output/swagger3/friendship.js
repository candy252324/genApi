import {
  ApiResponse,
  ApiResponseFriendshipDetailResp,
  ApiResponseboolean,
  ApiResponseKeyBorardDetailResp,
  ApiResponseComPageFriendshipResp,
  ApiResponsestring,
} from './_interfaces'
import Mock from 'better-mock'

/** 倒垃圾好友 */
export const friendshipDelete = () => ApiResponse()

/** 单瓜子小道消息，上部title */
export const friendshipDetail = () => ApiResponseFriendshipDetailResp()

/** 是否已经是好友 */
export const friendshipGetIsFriend = () => ApiResponseboolean()

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetail = () => ApiResponseKeyBorardDetailResp()

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemark = () => ApiResponse()

/** 我好看好友秋千 */
export const friendshipPageList = () => ApiResponseComPageFriendshipResp()

/** 是否通知和免打扰 */
export const friendshipSetNoticeAndTop = () => ApiResponse()

/** 倒垃圾好友 */
export const friendshipDelete = () => ApiResponsestring()

/** 单瓜子小道消息，上部title */
export const friendshipDetail = () => ApiResponseFriendshipDetailResp()

/** 是否已经是好友 */
export const friendshipGetIsFriend = () => ApiResponseboolean()

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetail = () => ApiResponseKeyBorardDetailResp()

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemark = () => ApiResponse()

/** 我好看好友秋千 */
export const friendshipPageList = () => ApiResponseComPageFriendshipResp()
