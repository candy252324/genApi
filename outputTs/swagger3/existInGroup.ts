import {ApiResponse,boolean} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 是否是群成员 */
export function existInGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<boolean>>{
  return Http.post('/existInGroup', data, config)
}
