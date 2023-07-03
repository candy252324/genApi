import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponse } from './_interfaces'

/** 请求回复消息保存 */
export function apiRequestMsgSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/requestMsg/save', data, config)
}
