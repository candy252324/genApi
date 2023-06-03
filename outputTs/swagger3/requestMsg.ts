
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 请求回复消息保存 */
export function requestMsgSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/requestMsg/save', data, config)
}
