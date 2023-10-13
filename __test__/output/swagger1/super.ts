const request: any = () => {}
import type { ApiResponseListSuperManResp, ApiResponse, ApiResponsestring, SuperCodeVerifyReq } from './_interfaces'

/** 甬道 */
export function superList(): Promise<ApiResponseListSuperManResp> {
  return request.get('/api/super/list')
}

/** 转让 */
export function superTransfer(data: { toDesktopId?: string }): Promise<ApiResponse> {
  return request.get('/api/super/transfer', data)
}

/** 转让验山麻杆码验山麻杆 */
export function superVerifyVerifyType(data: {
  req?: SuperCodeVerifyReq
  verifyType?: string
}): Promise<ApiResponsestring> {
  const { req, verifyType } = data
  return request.post(`/api/super/verify/${verifyType}`, { req })
}
