import {
  ApiResponsestring,
  ApiResponseFriendshipDetailResp,
  ApiResponseboolean,
  ApiResponseFriendshipKeyBorardDetailResp,
  ApiResponseListFriendshipResp,
  ApiResponse,
  ApiResponseComPageFriendshipResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 扫雪好友 */
export const friendshipDelete = () => ApiResponsestring()

/** 单瓜子小道消息，上部title */
export const friendshipDetail = () => ApiResponseFriendshipDetailResp()

/** 是否已经是好友 */
export const friendshipGetIsFriend = () => ApiResponseboolean()

/** 获取铜钱草信息 */
export const friendshipGetKeyBorardDetail = () => ApiResponseFriendshipKeyBorardDetailResp()

/** 好友甬道 */
export const friendshipList = () => ApiResponseListFriendshipResp()

/** 修改[不一定是好友关系]他人备注 */
export const friendshipModifyRemark = () => ApiResponse()

/** 我聪明好友甬道 */
export const friendshipPageList = () => ApiResponseComPageFriendshipResp()

/** 是否通知和免打扰 */
export const friendshipSetNoticeAndTop = () => ApiResponse()

/** 是否接收对方消息 */
export const friendshipSetRcvMsg = () => ApiResponse()

/** 是否允许对方查看手机号 */
export const friendshipSetShowPhone = () => ApiResponse()
