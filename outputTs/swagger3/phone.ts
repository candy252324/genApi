
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 手机号列表 */
export function phoneList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/phone/list', data, config)
}
