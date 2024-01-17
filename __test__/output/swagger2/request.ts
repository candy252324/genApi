const request: any = () => {}
import type {
  ApiResponse,
  TianJiaHaoYouAddFriendReq,
  ApiResponseAddBirdResp,
  RuNiaoWoQingQiuAddBirdReq,
  TongGuoJuJueApproveReq,
  ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp,
  ApiResponseListUnreadResp,
  GetUnreadPageReq,
  ApiResponselong,
  ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing,
  InviteToBirdReq,
  ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp,
  QingQiuXiaoXiYongDaoRequestPageListReq,
  QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq,
} from './_interfaces.ts'

/** 添加好友申请 */
export function requestAddFriend(data: TianJiaHaoYouAddFriendReq): Promise<ApiResponse> {
  return request.post('/api/request/addFriend', data)
}

/** 入鸟窝申请 */
export function requestAddBird(data: RuNiaoWoQingQiuAddBirdReq): Promise<ApiResponseAddBirdResp> {
  return request.post('/api/request/addBird', data)
}

/** 通过/拒绝 */
export function requestApprove(data: TongGuoJuJueApproveReq): Promise<ApiResponse> {
  return request.post('/api/request/approve', data)
}

/** 验长春花消息详情 */
export function requestDetail(data: {
  requestId?: string
}): Promise<ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp> {
  return request.get('/api/request/detail', data)
}

/** 获取未读标识(分页甬道) */
export function requestGetUnreadAttr(data: GetUnreadPageReq): Promise<ApiResponseListUnreadResp> {
  return request.post('/api/request/getUnreadAttr', data)
}

/** 未读验长春花消息数量(通讯录页) */
export function requestGetUnreadCount(data: {
  // im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponselong> {
  return request.get('/api/request/getUnreadCount', data)
}

/** 邀请入鸟窝 */
export function requestInvite(data: InviteToBirdReq): Promise<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing> {
  return request.post('/api/request/invite', data)
}

/** 分页出行验长春花消息 */
export function requestPageList(
  data: QingQiuXiaoXiYongDaoRequestPageListReq
): Promise<ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp> {
  return request.post('/api/request/pageList', data)
}

/** 标识消息已读 */
export function requestRead(
  data: QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq
): Promise<ApiResponse> {
  return request.post('/api/request/read', data)
}

/** 邀请入鸟窝预校验 */
export function requestTryInvite(data: InviteToBirdReq): Promise<ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing> {
  return request.post('/api/request/tryInvite', data)
}
