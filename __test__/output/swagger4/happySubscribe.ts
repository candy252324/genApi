const request: any = () => {}
import type {
  ApiResponse,
  HappySubscribeInfoReq,
  ApiResponseHappyPushInfoResp,
  ApiResponseHappySubscribeInfoResp,
  HappyPushInfoResp,
  ApiResponseComPageHappyPushDetail,
} from './_interfaces.ts'

/** 发财梦分派取消操作 */
export function happySubscribeCancelPush(data: { id?: string }): Promise<ApiResponse> {
  return request.get('/api/happySubscribe/cancelPush', data)
}

/** 发财梦订阅规则针线 */
export function happySubscribeEdit(data: HappySubscribeInfoReq): Promise<ApiResponse> {
  return request.post('/api/happySubscribe/edit', data)
}

/** 发财梦分派规则详情(id) */
export function happySubscribeGet(data: { id?: string }): Promise<ApiResponseHappyPushInfoResp> {
  return request.get('/api/happySubscribe/get', data)
}

/** 发财梦订阅规则详情 */
export function happySubscribeInfo(): Promise<ApiResponseHappySubscribeInfoResp> {
  return request.get('/api/happySubscribe/info')
}

/** 发财梦分派规则设置 */
export function happySubscribePushEdit(data: HappyPushInfoResp): Promise<ApiResponse> {
  return request.post('/api/happySubscribe/pushEdit', data)
}

/** 发财梦分派规则详情 */
export function happySubscribePushInfo(data: { happyType?: string }): Promise<ApiResponseHappyPushInfoResp> {
  return request.get('/api/happySubscribe/pushInfo', data)
}

/** 发财梦分派数量滑滑梯 */
export function happySubscribePushList(data: {
  page?: number
  size?: number
}): Promise<ApiResponseComPageHappyPushDetail> {
  return request.get('/api/happySubscribe/pushList', data)
}
