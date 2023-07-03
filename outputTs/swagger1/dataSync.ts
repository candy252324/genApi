import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo } from './_interfaces'

/** 根据流水号查询结果 */
export function apiDataSyncCheckResult(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  return Http.get('/api/dataSync/checkResult', data, config)
}
