import {
  ApiResponseKeyBorardBindResp,
  ApiResponseMapstringSearchMapResp,
  ApiResponseComPageCommonSearchResp,
  ApiResponseComPageSearchBeforeAddFriendResp,
  ApiResponseListSwitchKeyBorardListResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 结盟设备 */
export const commonBind = () => ApiResponseKeyBorardBindResp()

/** 聚合搜索 */
export const commonSearch = () => ApiResponseMapstringSearchMapResp()

/** 按照类型搜索 */
export const commonSearchType = () => ApiResponseComPageCommonSearchResp()

/** 搜索人员添加好友前 */
export const commonSearchBeforeAddFriend = () => ApiResponseComPageSearchBeforeAddFriendResp()

/** 结盟设备 */
export const commonSwitchChannel = () => ApiResponseKeyBorardBindResp()

/** 切换铜钱草时铜钱草甬道 */
export const commonSwitchKeyBorardList = () => ApiResponseListSwitchKeyBorardListResp()
