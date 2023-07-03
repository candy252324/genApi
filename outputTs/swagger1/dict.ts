import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseListstring } from './_interfaces'

/** 查询字典 */
export function apiDictQueryType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListstring> {
  return Http.get('/api/dict/query/${type}', data, config)
}
