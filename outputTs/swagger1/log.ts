import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseComPageLogLoginResp } from './_interfaces'

/** 登录日志 */
export function apiLogList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageLogLoginResp> {
  return Http.get('/api/log/list', data, config)
}
