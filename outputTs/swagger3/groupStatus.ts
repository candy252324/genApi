import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseMemberGroupStatusResp } from './_interfaces'

/** 本群状态 */
export function groupStatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseMemberGroupStatusResp> {
  return Http.post('/groupStatus', data, config)
}
