import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiDictQueryType } from './_interfaces'

/** 查询字典 */
export function apiDictQueryType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDictQueryType> {
  return Http.get('/api/dict/query/${type}', data, config)
}
