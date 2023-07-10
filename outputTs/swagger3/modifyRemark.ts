import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponse, XiuGaiBeiZhuModifyRemarkGroupReq } from './_interfaces'

/** 修改群成员在本群备注 */
export function modifyRemark(
  data: XiuGaiBeiZhuModifyRemarkGroupReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/modifyRemark', data, config)
}
