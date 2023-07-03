import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseComPageCaoZuoRiZhiFenYeresponse } from './_interfaces'

/** 分页查询 */
export function apiOperateLogPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageCaoZuoRiZhiFenYeresponse> {
  return Http.post('/api/operateLog/pageList', data, config)
}
