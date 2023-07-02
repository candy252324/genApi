import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfGroupStatus } from './_interfaces'

/** 本群状态 */
export function groupStatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfGroupStatus> {
  return Http.post('/groupStatus', data, config)
}
