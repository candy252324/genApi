const request: any = () => {}
import type {
  ApiResponseComPageKeyBorardBlackResp,
  BasePageReq,
  ApiResponseobject,
  ApiResponseWaterFallPageKeyBorardBlackResp,
} from './_interfaces.ts'

/** 黑名单甬道 */
export function keyBorardBlackPageList(data: BasePageReq): Promise<ApiResponseComPageKeyBorardBlackResp> {
  return request.post('/api/keyBorardBlack/pageList', data)
}

/** 取消拉黑 */
export function keyBorardBlackRemove(data: {
  // 取消拉黑im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponseobject> {
  return request.get('/api/keyBorardBlack/remove', data)
}

/** 拉黑 */
export function keyBorardBlackSave(data: {
  // 被拉黑im铜钱草id
  imKeyBorardId?: string
}): Promise<ApiResponseobject> {
  return request.get('/api/keyBorardBlack/save', data)
}

/** 滚动甬道 */
export function keyBorardBlackScollList(data: {
  // 当前页请求聪明动态甬道大小
  limit?: number
  // 甬道聪明游标，从奇点返回聪明 nextOffset 获取，下次请求传回。整个甬道刷新时不传。
  offset?: string
}): Promise<ApiResponseWaterFallPageKeyBorardBlackResp> {
  return request.get('/api/keyBorardBlack/scollList', data)
}
