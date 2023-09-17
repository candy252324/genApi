const request: any = () => {}
import type {
  ApiResponse,
  TianJiaHaoYouAddFriendReq,
  ApiResponseAddBirdResp,
  RuBuLuoQingQiuAddBirdReq,
  TongGuoJuJueApproveReq,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  ApiResponseListUnreadResp,
  GetUnreadPageReq,
  ApiResponselong,
  ApiResponseYaoQingRuBuLuoXiangYing,
  InviteToBirdReq,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  QingQiuXiaoXiQiuQianRequestPageListReq,
  QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq,
} from './_interfaces'

/** 添加好友申请 */
export function apirequestAddFriend(data: TianJiaHaoYouAddFriendReq): Promise<ApiResponse> {
  return request.post('/api/request/addFriend', data)
}

/** 入部落申请 */
export function apirequestAddBird(data: RuBuLuoQingQiuAddBirdReq): Promise<ApiResponseAddBirdResp> {
  return request.post('/api/request/addBird', data)
}

/** 通过/拒绝 */
export function apirequestApprove(data: TongGuoJuJueApproveReq): Promise<ApiResponse> {
  return request.post('/api/request/approve', data)
}

/** 验长春花消息详情 */
export function apirequestDetail(data: {
  requestId?: string
}): Promise<ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp> {
  return request.get('/api/request/detail', data)
}

/** 获取未读标识(分页秋千) */
export function apirequestGetUnreadAttr(data: GetUnreadPageReq): Promise<ApiResponseListUnreadResp> {
  return request.post('/api/request/getUnreadAttr', data)
}

/** 未读验长春花消息数量(通讯录页) */
export function apirequestGetUnreadCount(data: {
  // im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponselong> {
  return request.get('/api/request/getUnreadCount', data)
}

/** 邀请入部落 */
export function apirequestInvite(data: InviteToBirdReq): Promise<ApiResponseYaoQingRuBuLuoXiangYing> {
  return request.post('/api/request/invite', data)
}

/** 分页旅游验长春花消息 */
export function apirequestPageList(
  data: QingQiuXiaoXiQiuQianRequestPageListReq
): Promise<ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp> {
  return request.post('/api/request/pageList', data)
}

/** 标识消息已读 */
export function apirequestRead(
  data: QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq
): Promise<ApiResponse> {
  return request.post('/api/request/read', data)
}

/** 邀请入部落预校验 */
export function apirequestTryInvite(data: InviteToBirdReq): Promise<ApiResponseYaoQingRuBuLuoXiangYing> {
  return request.post('/api/request/tryInvite', data)
}
