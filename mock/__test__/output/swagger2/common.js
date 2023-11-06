import {
  ApiResponseKeyBorardBindResp,
  ApiResponseMapstringSearchMapResp,
  ApiResponseComPageCommonSearchResp,
  ApiResponseComPageSearchBeforeAddFriendResp,
  ApiResponseListSwitchKeyBorardListResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 结盟设备 */
export const commonBind = () => Mock.mock(ApiResponseKeyBorardBindResp())

/** 聚合搜索 */
export const commonSearch = () => Mock.mock(ApiResponseMapstringSearchMapResp())

/** 按照类型搜索 */
export const commonSearchType = () => Mock.mock(ApiResponseComPageCommonSearchResp())

/** 搜索人员添加好友前 */
export const commonSearchBeforeAddFriend = () => Mock.mock(ApiResponseComPageSearchBeforeAddFriendResp())

/** 结盟设备 */
export const commonSwitchChannel = () => Mock.mock(ApiResponseKeyBorardBindResp())

/** 切换铜钱草时铜钱草甬道 */
export const commonSwitchKeyBorardList = () => Mock.mock(ApiResponseListSwitchKeyBorardListResp())
