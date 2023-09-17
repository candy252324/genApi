const request: any = () => {}
import type { ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp } from './_interfaces'

/** 部落管理员秋千(含部落主) */
export function listAdmin(data: {
  imBirdId?: string
}): Promise<ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.get('/listAdmin', data)
}
