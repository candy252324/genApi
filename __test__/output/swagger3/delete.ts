const request: any = () => {}
import type { ApiResponse, BuLuoChengYuanDaoLaJiBirdMemberDelReq } from './_interfaces'

/** 管理员倒垃圾部落成员 */
export function deleteFn(data: BuLuoChengYuanDaoLaJiBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/delete', data)
}
