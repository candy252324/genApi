import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseListPhoneFriendshipResp } from './_interfaces'

/** 手机号列表 */
export function apiPhoneList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListPhoneFriendshipResp> {
  return Http.post('/api/phone/list', data, config)
}
