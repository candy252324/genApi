
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 添加token到缓存 */
export function tokenAddTokenToShangyunCache  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/token/addTokenToShangyunCache', data, config)
}

/** 校验token */
export function tokenCheckToken  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/token/checkToken', data, config)
}

/** 删除session */
export function tokenRemoveSessionInShangyun  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/token/removeSessionInShangyun', data, config)
}
