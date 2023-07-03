
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {ApiResponse} from './_interfaces'

/** 管理员删除群成员 */
export function delete1  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/delete', data, config)
}
