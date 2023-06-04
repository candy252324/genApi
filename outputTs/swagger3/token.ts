
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


import {ResOfTokenAddTokenToShangyunCache,ResOfTokenCheckToken,ResOfTokenRemoveSessionInShangyun} from './_interfaces'

/** 添加token到缓存 */
export function tokenAddTokenToShangyunCache  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfTokenAddTokenToShangyunCache>{
  return Http.post('/token/addTokenToShangyunCache', data, config)
}

/** 校验token */
export function tokenCheckToken  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfTokenCheckToken>{
  return Http.post('/token/checkToken', data, config)
}

/** 删除session */
export function tokenRemoveSessionInShangyun  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfTokenRemoveSessionInShangyun>{
  return Http.post('/token/removeSessionInShangyun', data, config)
}
