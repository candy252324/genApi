import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseboolean, QunXinXiGroupDetailReq } from './_interfaces'

/** 是否是群成员 */
export function existInGroup(
  data: QunXinXiGroupDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/existInGroup', data, config)
}
