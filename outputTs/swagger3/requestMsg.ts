import {ApiResponse} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 请求回复消息保存 */
export function apiRequestMsgSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/requestMsg/save', data, config)
}
