const request: any = () => {}
import type { ApiResponse, RemoteAutoBirdReq, MessageProcessReq } from './_interfaces'

/** 模拟大数据建鸟窝 */
export function remoteBigdataAutoBird(data: RemoteAutoBirdReq): Promise<ApiResponse> {
  return request.post('/api/remote/bigdata/autoBird', data)
}

/** 模拟大数据建鸟窝 */
export function remoteBigdataMockAutoBird(data: number[]): Promise<ApiResponse> {
  return request.post('/api/remote/bigdata/mockAutoBird', data)
}

/** 处理结构化消息 */
export function remoteMessageProcess(data: MessageProcessReq): Promise<ApiResponse> {
  return request.post('/remote/message/process', data)
}
