import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import { ResOfApiRequestMsgSave } from './_interfaces'

/** 请求回复消息保存 */
export function apiRequestMsgSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestMsgSave> {
  return Http.post('/api/requestMsg/save', data, config)
}
