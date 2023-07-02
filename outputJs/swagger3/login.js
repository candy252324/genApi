import { Http } from '../../httpJs/index'

/**
 * 通用登录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginDoLogin(data, config) {
  return Http.post('/api/login/doLogin', data, config)
}

/**
 * 退出登陆
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginDoLogout(data, config) {
  return Http.get('/api/login/doLogout', data, config)
}

/**
 * 发送手机登录验证码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginSendPhoneValidateCode(data, config) {
  return Http.get('/api/login/sendPhoneValidateCode', data, config)
}

/**
 * 通用登录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginDoLogin(data, config) {
  return Http.post('/login/doLogin', data, config)
}

/**
 * 退出登陆
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginDoLogout(data, config) {
  return Http.get('/login/doLogout', data, config)
}

/**
 * 发送手机登录验证码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginSendPhoneValidateCode(data, config) {
  return Http.get('/login/sendPhoneValidateCode', data, config)
}
