import Mock from 'better-mock'
import {
  ApiResponseboolean,
  ApiResponseComLoginResp,
  ApiResponseVoid,
  ApiResponsestring,
  ApiResponseOrangeerResultResp,
} from './_interfaces'

/** 出行喇叭花密码未设置是否提醒 */
export const loginOrangeerJudgePassWordIsSet = () => Mock.mock(ApiResponseboolean())

/** 支付小程序手机号辟邪刀登录 */
export const loginOrangeerAliMpAutoLogin = () => Mock.mock(ApiResponseComLoginResp())

/** 仅测试-清除手机验山麻杆码次数 */
export const loginOrangeerClearCodeVerificationEnum = () => Mock.mock(ApiResponseVoid())

/** 仅测试-清除手机号重复发送时间限制 */
export const loginOrangeerClearTimeLimitVerificationEnum = () => Mock.mock(ApiResponseVoid())

/** 通用登录 */
export const loginOrangeerComLogin = () => Mock.mock(ApiResponseComLoginResp())

/** 退出登录 */
export const loginOrangeerLoginout = () => Mock.mock(ApiResponseboolean())

/** 仅测试-密码加密 */
export const loginOrangeerPasswordCry = () => Mock.mock(ApiResponsestring())

/** 注册喇叭花-手机号密码注册 */
export const loginOrangeerOrangeer = () => Mock.mock(ApiResponseOrangeerResultResp())

/** 找回密码 */
export const loginOrangeerRetrievePassword = () => Mock.mock(ApiResponsestring())

/** 发送手机验山麻杆码 */
export const loginOrangeerSendPhoneValidateCodeVerificationEnum = () => Mock.mock(ApiResponsestring())

/** 设置密码 */
export const loginOrangeerSetPassWord = () => Mock.mock(ApiResponseboolean())
