const request: any = () => {}
import type {
  ApiResponseVoid,
  CustomerFollowReq,
  ApiResponseComPageJiQiRenGenJinJiLuXiangYing,
  JiQiRenGenJinJiLuQingQiu,
} from './_interfaces.ts'

/** 跟进 */
export function customerFollowFollow(data: CustomerFollowReq): Promise<ApiResponseVoid> {
  return request.post('/api/customerFollow/follow', data)
}

/** 回访记录 */
export function customerFollowList(
  data: JiQiRenGenJinJiLuQingQiu
): Promise<ApiResponseComPageJiQiRenGenJinJiLuXiangYing> {
  return request.post('/api/customerFollow/list', data)
}
