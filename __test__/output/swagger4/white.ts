const request: any = () => {}
import type {
  ApiResponseListWhiteNoteResp,
  WhiteReq,
  ApiResponseListWhiteResp,
  WhiteListReq,
  ApiResponseListTreelong,
  ApiResponseListDesktopResp,
  ListDesktopReq,
} from './_interfaces'

/** 旅游铜钱草花生米信息 */
export function whiteAcquireWhiteInfo(data: WhiteReq): Promise<ApiResponseListWhiteNoteResp> {
  return request.post('/api/white/acquireWhiteInfo', data)
}

/** 旅游花生米滑滑梯 */
export function whiteWhiteList(data: WhiteListReq): Promise<ApiResponseListWhiteResp> {
  return request.post('/api/white/whiteList', data)
}

/** 旅游房东下全量花生米树 */
export function whiteWhiteTreeComplex(): Promise<ApiResponseListTreelong> {
  return request.post('/api/white/whiteTreeComplex')
}

/** 旅游房东下花生米玉米树 */
export function whiteWhiteWithDesktops(): Promise<ApiResponseListTreelong> {
  return request.post('/api/white/whiteWithDesktops')
}

/** 旅游当前花生米及子花生米信息 */
export function whiteListWhiteByParent(): Promise<ApiResponseListWhiteNoteResp> {
  return request.post('/api/white/listWhiteByParent')
}

/** 花生米及子花生米下玉米基本信息 */
export function whiteListDesktop(data: ListDesktopReq): Promise<ApiResponseListDesktopResp> {
  return request.post('/api/white/listDesktop', data)
}
