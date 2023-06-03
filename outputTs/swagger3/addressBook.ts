
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 获取租户列表 */
export function addressBookListTenantInfo  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/addressBook/listTenantInfo', data, config)
}

/** 获取用户(正常状态)租户信息列表 */
export function addressBookListTenantInfo  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/addressBook/listTenantInfo', data, config)
}
