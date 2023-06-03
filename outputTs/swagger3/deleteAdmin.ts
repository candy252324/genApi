
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 删除群管理员 */
export function deleteAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/deleteAdmin', data, config)
}
