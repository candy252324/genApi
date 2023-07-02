import { Http } from '../../httpJs/index'

/**
 * 查询用户密码未设置是否提醒
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterJudgePassWordIsSet(config) {
  return Http.get('/api/loginRegister/JudgePassWordIsSet', config)
}

/**
 * 支付小程序手机号授权登录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterAliMpAutoLogin(data, config) {
  return Http.post('/api/loginRegister/aliMpAutoLogin', data, config)
}

/**
 * 仅测试-清除手机验证码次数
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterClearCodeVerificationEnum(data, config) {
  return Http.get(
    '/api/loginRegister/clearCode/${verificationEnum}',
    data,
    config
  )
}

/**
 * 仅测试-清除手机号重复发送时间限制
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterClearTimeLimitVerificationEnum(data, config) {
  return Http.get(
    '/api/loginRegister/clearTimeLimit/${verificationEnum}',
    data,
    config
  )
}

/**
 * 通用登录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterComLogin(data, config) {
  return Http.post('/api/loginRegister/comLogin', data, config)
}

/**
 * 退出登录
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterLoginout(config) {
  return Http.get('/api/loginRegister/loginout', config)
}

/**
 * 仅测试-密码加密
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterPasswordCry(data, config) {
  return Http.get('/api/loginRegister/passwordCry', data, config)
}

/**
 * 注册用户-手机号密码注册
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterRegister(data, config) {
  return Http.post('/api/loginRegister/register', data, config)
}

/**
 * 找回密码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterRetrievePassword(data, config) {
  return Http.post('/api/loginRegister/retrievePassword', data, config)
}

/**
 * 发送手机验证码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterSendPhoneValidateCodeVerificationEnum(
  data,
  config
) {
  return Http.get(
    '/api/loginRegister/sendPhoneValidateCode/${verificationEnum}',
    data,
    config
  )
}

/**
 * 设置密码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function loginRegisterSetPassWord(data, config) {
  return Http.post('/api/loginRegister/setPassWord', data, config)
}
