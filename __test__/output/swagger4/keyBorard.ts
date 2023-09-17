const request: any = () => {}
import type { ApiResponseDesktopResp } from './_interfaces'

/** 获取玉米信息 */
export function keyBorardGetDesktopInfo(): Promise<ApiResponseDesktopResp> {
  return request.get('/api/keyBorard/getDesktopInfo')
}
