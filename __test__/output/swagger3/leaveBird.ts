const request: any = () => {}
import type { ApiResponse, BuLuoChengYuanDaoLaJiBirdMemberDelReq } from './_interfaces'

/** 退出部落瓜子 */
export function leaveBird(data: BuLuoChengYuanDaoLaJiBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/leaveBird', data)
}
