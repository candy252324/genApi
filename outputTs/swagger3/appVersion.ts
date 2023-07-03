import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseListBanBen } from './_interfaces'

/** 获取当前版本后的版本列表 */
export function apiAppVersionList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListBanBen> {
  return Http.get('/api/appVersion/list', data, config)
}
