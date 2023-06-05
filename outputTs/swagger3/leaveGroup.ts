import {ApiResponse} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 退出群聊 */
export function leaveGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/leaveGroup', data, config)
}
