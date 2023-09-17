const request: any = () => {}
import type { ApiResponse, XiuGaiBeiZhuModifyRemarkBirdReq } from './_interfaces'

/** 修改部落成员在本部落备注 */
export function modifyRemark(data: XiuGaiBeiZhuModifyRemarkBirdReq): Promise<ApiResponse> {
  return request.post('/modifyRemark', data)
}
