
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 添加群管理员 */
export function saveAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/saveAdmin', data, config)
}
