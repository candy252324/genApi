const request: any = () => {}
import type { ApiResponse } from './_interfaces'

/** 初始化发财梦订阅数据 */
export function initHappySubscribe(): Promise<ApiResponse> {
  return request.post('/api/init/happySubscribe')
}
