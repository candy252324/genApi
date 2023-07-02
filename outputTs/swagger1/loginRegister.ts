import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiLoginRegisterJudgePassWordIsSet,
  ResOfApiLoginRegisterAliMpAutoLogin,
  ResOfApiLoginRegisterClearCodeVerificationEnum,
  ResOfApiLoginRegisterClearTimeLimitVerificationEnum,
  ResOfApiLoginRegisterComLogin,
  ResOfApiLoginRegisterLoginout,
  ResOfApiLoginRegisterPasswordCry,
  ResOfApiLoginRegisterRegister,
  ResOfApiLoginRegisterRetrievePassword,
  ResOfApiLoginRegisterSendPhoneValidateCodeVerificationEnum,
  ResOfApiLoginRegisterSetPassWord,
} from './_interfaces'

/** 查询用户密码未设置是否提醒 */
export function apiLoginRegisterJudgePassWordIsSet(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterJudgePassWordIsSet> {
  return Http.get('/api/loginRegister/JudgePassWordIsSet', config)
}

/** 支付小程序手机号授权登录 */
export function apiLoginRegisterAliMpAutoLogin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterAliMpAutoLogin> {
  return Http.post('/api/loginRegister/aliMpAutoLogin', data, config)
}

/** 仅测试-清除手机验证码次数 */
export function apiLoginRegisterClearCodeVerificationEnum(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterClearCodeVerificationEnum> {
  return Http.get(
    '/api/loginRegister/clearCode/${verificationEnum}',
    data,
    config
  )
}

/** 仅测试-清除手机号重复发送时间限制 */
export function apiLoginRegisterClearTimeLimitVerificationEnum(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterClearTimeLimitVerificationEnum> {
  return Http.get(
    '/api/loginRegister/clearTimeLimit/${verificationEnum}',
    data,
    config
  )
}

/** 通用登录 */
export function apiLoginRegisterComLogin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterComLogin> {
  return Http.post('/api/loginRegister/comLogin', data, config)
}

/** 退出登录 */
export function apiLoginRegisterLoginout(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterLoginout> {
  return Http.get('/api/loginRegister/loginout', config)
}

/** 仅测试-密码加密 */
export function apiLoginRegisterPasswordCry(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterPasswordCry> {
  return Http.get('/api/loginRegister/passwordCry', data, config)
}

/** 注册用户-手机号密码注册 */
export function apiLoginRegisterRegister(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterRegister> {
  return Http.post('/api/loginRegister/register', data, config)
}

/** 找回密码 */
export function apiLoginRegisterRetrievePassword(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterRetrievePassword> {
  return Http.post('/api/loginRegister/retrievePassword', data, config)
}

/** 发送手机验证码 */
export function apiLoginRegisterSendPhoneValidateCodeVerificationEnum(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterSendPhoneValidateCodeVerificationEnum> {
  return Http.get(
    '/api/loginRegister/sendPhoneValidateCode/${verificationEnum}',
    data,
    config
  )
}

/** 设置密码 */
export function apiLoginRegisterSetPassWord(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiLoginRegisterSetPassWord> {
  return Http.post('/api/loginRegister/setPassWord', data, config)
}
