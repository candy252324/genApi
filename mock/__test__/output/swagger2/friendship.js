import {
  ApiResponsestring,
  ApiResponseFriendshipDetailResp,
  ApiResponseboolean,
  ApiResponseFriendshipKeyBorardDetailResp,
  ApiResponseListFriendshipResp,
  ApiResponse,
  ApiResponseComPageFriendshipResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 扫雪好友 */
export const friendshipDelete = () => Mock.mock(ApiResponsestring())

/** 单瓜子小道消息，上部title */
export const friendshipDetail = () => Mock.mock(ApiResponseFriendshipDetailResp())

/** 是否已经是好友 */
export const friendshipGetIsFriend = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetail = () => Mock.mock(ApiResponseFriendshipKeyBorardDetailResp())

/** 好友甬道 */
export const friendshipList = () => Mock.mock(ApiResponseListFriendshipResp())

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemark = () => Mock.mock(ApiResponse())

/** 我聪明好友甬道 */
export const friendshipPageList = () => Mock.mock(ApiResponseComPageFriendshipResp())

/** 是否通知和免打扰 */
export const friendshipSetNoticeAndTop = () => Mock.mock(ApiResponse())

/** 是否接收对方消息 */
export const friendshipSetRcvMsg = () => Mock.mock(ApiResponse())

/** 是否允许对方查看手机号 */
export const friendshipSetShowPhone = () => Mock.mock(ApiResponse())
