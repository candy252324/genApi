import {ApiResponse} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 管理员删除群成员 */
export function delete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/delete', data, config)
}
