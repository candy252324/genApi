
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 通用登录 */
export function loginDoLogin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/login/doLogin', data, config)
}

/** 退出登陆 */
export function loginDoLogout  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/login/doLogout', data, config)
}

/** 发送手机登录验证码 */
export function loginSendPhoneValidateCode  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/login/sendPhoneValidateCode', data, config)
}

/** 通用登录 */
export function loginDoLogin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/login/doLogin', data, config)
}

/** 退出登陆 */
export function loginDoLogout  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/login/doLogout', data, config)
}

/** 发送手机登录验证码 */
export function loginSendPhoneValidateCode  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/login/sendPhoneValidateCode', data, config)
}
