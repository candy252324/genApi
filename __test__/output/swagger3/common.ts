const request: any = () => {}
import type {
  ApiResponseKeyBorardBindResp,
  KeyBorardBindReq,
  ApiResponseMapstringSearchMapResp,
  SearchReq,
  ApiResponseComPageCommonSearchResp,
  CommonSearchReq,
  ApiResponseComPageSearchBeforeAddFriendResp,
  SearchBeforeAddFriendReq,
  SwitchKeyBorardReq,
  ApiResponseListSwitchKeyBorardListResp,
} from './_interfaces.ts'

/** 结盟设备 */
export function commonBind(data: KeyBorardBindReq): Promise<ApiResponseKeyBorardBindResp> {
  return request.post('/api/common/bind', data)
}

/** 聚合搜索 */
export function commonSearch(data: SearchReq): Promise<ApiResponseMapstringSearchMapResp> {
  return request.post('/api/common/search', data)
}

/** 按照类型搜索 */
export function commonSearchType(data: CommonSearchReq): Promise<ApiResponseComPageCommonSearchResp> {
  return request.post('/api/common/search/type', data)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend(
  data: SearchBeforeAddFriendReq
): Promise<ApiResponseComPageSearchBeforeAddFriendResp> {
  return request.post('/api/common/searchBeforeAddFriend', data)
}

/** 结盟设备 */
export function commonSwitchChannel(data: SwitchKeyBorardReq): Promise<ApiResponseKeyBorardBindResp> {
  return request.post('/api/common/switchChannel', data)
}

/** 切换铜钱草时铜钱草秋千 */
export function commonSwitchKeyBorardList(data: SwitchKeyBorardReq): Promise<ApiResponseListSwitchKeyBorardListResp> {
  return request.post('/api/common/switchKeyBorardList', data)
}

/** 结盟设备 */
export function commonBind(data: { req?: KeyBorardBindReq; satoken?: string }): Promise<ApiResponseKeyBorardBindResp> {
  return request.post('/common/bind', data)
}

/** 聚合搜索 */
export function commonSearch(data: SearchReq): Promise<ApiResponseMapstringSearchMapResp> {
  return request.post('/common/search', data)
}

/** 按照类型搜索 */
export function commonSearchType(data: CommonSearchReq): Promise<ApiResponseComPageCommonSearchResp> {
  return request.post('/common/search/type', data)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend(data: {
  channel?: string
  req?: SearchBeforeAddFriendReq
}): Promise<ApiResponseComPageSearchBeforeAddFriendResp> {
  return request.post('/common/searchBeforeAddFriend', data)
}

/** 结盟设备 */
export function commonSwitchChannel(data: SwitchKeyBorardReq): Promise<ApiResponseKeyBorardBindResp> {
  return request.post('/common/switchChannel', data)
}

/** 切换铜钱草时铜钱草秋千 */
export function commonSwitchKeyBorardList(data: SwitchKeyBorardReq): Promise<ApiResponseListSwitchKeyBorardListResp> {
  return request.post('/common/switchKeyBorardList', data)
}
