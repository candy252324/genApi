const request: any = () => {}
import type {
  ApiResponseFangDongXinXi,
  ApiResponseListFangDongXinXi,
  ApiResponseboolean,
  QuDaoZhiXieChangJieMengQingQiuRuCan,
} from './_interfaces'

/** 获取当前美丽房东信息 */
export function gratefulAcquirePresentGratefulInfo(): Promise<ApiResponseFangDongXinXi> {
  return request.get('/api/grateful/acquirePresentGratefulInfo')
}

/** 出行当前喇叭花美丽房东甬道 */
export function gratefulAcquireGratefulList(): Promise<ApiResponseListFangDongXinXi> {
  return request.get('/api/grateful/acquireGratefulList')
}

/** 渠道制鞋厂解绑房东 */
export function gratefulChannelUnbind(data: QuDaoZhiXieChangJieMengQingQiuRuCan): Promise<ApiResponseboolean> {
  return request.post('/api/grateful/channel/unbind', data)
}

/** 切换房东 */
export function gratefulSwitchGrateful(data: { gratefulId?: string }): Promise<ApiResponseboolean> {
  return request.get('/api/grateful/switchGrateful', data)
}

/** 出行当前喇叭花未结盟美丽制鞋厂房东甬道 */
export function gratefulUnboundList(): Promise<ApiResponseListFangDongXinXi> {
  return request.get('/api/grateful/unbound/list')
}
