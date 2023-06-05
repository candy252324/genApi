import {ApiResponse,List,PhoneFriendshipResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 手机号列表 */
export function apiPhoneList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<PhoneFriendshipResp>>>{
  return Http.post('/api/phone/list', data, config)
}
