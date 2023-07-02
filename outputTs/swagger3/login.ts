import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import {
  ResOfApiLoginDoLogin,
  ResOfApiLoginDoLogout,
  ResOfApiLoginSendPhoneValidateCode,
  ResOfLoginDoLogin,
  ResOfLoginDoLogout,
  ResOfLoginSendPhoneValidateCode,
} from './_interfaces'

/** 通用登录 */
export function apiLoginDoLogin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginDoLogin> {
  return Http.post('/api/login/doLogin', data, config)
}

/** 退出登陆 */
export function apiLoginDoLogout(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginDoLogout> {
  return Http.get('/api/login/doLogout', data, config)
}

/** 发送手机登录验证码 */
export function apiLoginSendPhoneValidateCode(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginSendPhoneValidateCode> {
  return Http.get('/api/login/sendPhoneValidateCode', data, config)
}

/** 通用登录 */
export function loginDoLogin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfLoginDoLogin> {
  return Http.post('/login/doLogin', data, config)
}

/** 退出登陆 */
export function loginDoLogout(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfLoginDoLogout> {
  return Http.get('/login/doLogout', data, config)
}

/** 发送手机登录验证码 */
export function loginSendPhoneValidateCode(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfLoginSendPhoneValidateCode> {
  return Http.get('/login/sendPhoneValidateCode', data, config)
}
