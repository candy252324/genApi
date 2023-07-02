import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiPhoneList } from './_interfaces'

/** 手机号列表 */
export function apiPhoneList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPhoneList> {
  return Http.post('/api/phone/list', data, config)
}
