import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiAppVersionList } from './_interfaces'

/** 获取当前版本后的版本列表 */
export function apiAppVersionList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiAppVersionList> {
  return Http.get('/api/appVersion/list', data, config)
}
