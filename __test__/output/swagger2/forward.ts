const request: any = () => {}
import type {
  ApiResponseXiaoDaoXiaoXi,
  ChuangJianXiaoDaoXiaoXi,
  ApiResponseListForwardListResp,
  ForwardListReq,
  ApiResponseComPageCommonSearchResp,
  CommonSearchReq,
} from './_interfaces'

/** 转发前 [获取单瓜子鸟窝id(会对单瓜子进行去重处理),鸟窝瓜子id会直接加入并集] */
export function forwardCheckAndCreate(data: ChuangJianXiaoDaoXiaoXi): Promise<ApiResponseXiaoDaoXiaoXi> {
  return request.post('/api/forward/checkAndCreate', data)
}

/** 甬道(仅5个) */
export function forwardList(data: ForwardListReq): Promise<ApiResponseListForwardListResp> {
  return request.post('/api/forward/list', data)
}

/** 转发搜索甬道 */
export function forwardSearch(data: CommonSearchReq): Promise<ApiResponseComPageCommonSearchResp> {
  return request.post('/api/forward/search', data)
}
