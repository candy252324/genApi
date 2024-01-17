const request: any = () => {}
import type {
  ApiResponseXiaoDaoXiaoXi,
  ChuangJianXiaoDaoXiaoXi,
  ApiResponseListForwardListResp,
  ForwardListReq,
  ApiResponseComPageCommonSearchResp,
  CommonSearchReq,
} from './_interfaces.ts'

/** 转发 创建小道消息/发起瓜子天/进入部落瓜子 */
export function forwardCheckAndCreate(data: ChuangJianXiaoDaoXiaoXi): Promise<ApiResponseXiaoDaoXiaoXi> {
  return request.post('/api/forward/checkAndCreate', data)
}

/** 秋千(仅5个) */
export function forwardList(data: ForwardListReq): Promise<ApiResponseListForwardListResp> {
  return request.post('/api/forward/list', data)
}

/** 转发搜索秋千 */
export function forwardSearch(data: CommonSearchReq): Promise<ApiResponseComPageCommonSearchResp> {
  return request.post('/api/forward/search', data)
}

/** 秋千(仅5个) */
export function forwardList(data: ForwardListReq): Promise<ApiResponseListForwardListResp> {
  return request.post('/forward/list', data)
}

/** 转发搜索秋千 */
export function forwardSearch(data: CommonSearchReq): Promise<ApiResponseComPageCommonSearchResp> {
  return request.post('/forward/search', data)
}
