import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiDataSyncCheckResult } from './_interfaces'

/** 根据流水号查询结果 */
export function apiDataSyncCheckResult(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDataSyncCheckResult> {
  return Http.get('/api/dataSync/checkResult', data, config)
}
