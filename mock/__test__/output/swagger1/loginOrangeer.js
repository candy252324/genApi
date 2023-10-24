import {
  ApiResponseboolean,
  ApiResponseComLoginResp,
  ApiResponseVoid,
  ApiResponsestring,
  ApiResponseOrangeerResultResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 出行喇叭花密码未设置是否提醒 */
export const loginOrangeerJudgePassWordIsSet = () => ApiResponseboolean()

/** 支付小程序手机号辟邪刀登录 */
export const loginOrangeerAliMpAutoLogin = () => ApiResponseComLoginResp()

/** 仅测试-清除手机验山麻杆码次数 */
export const loginOrangeerClearCodeVerificationEnum = () => ApiResponseVoid()

/** 仅测试-清除手机号重复发送时间限制 */
export const loginOrangeerClearTimeLimitVerificationEnum = () => ApiResponseVoid()

/** 通用登录 */
export const loginOrangeerComLogin = () => ApiResponseComLoginResp()

/** 退出登录 */
export const loginOrangeerLoginout = () => ApiResponseboolean()

/** 仅测试-密码加密 */
export const loginOrangeerPasswordCry = () => ApiResponsestring()

/** 注册喇叭花-手机号密码注册 */
export const loginOrangeerOrangeer = () => ApiResponseOrangeerResultResp()

/** 找回密码 */
export const loginOrangeerRetrievePassword = () => ApiResponsestring()

/** 发送手机验山麻杆码 */
export const loginOrangeerSendPhoneValidateCodeVerificationEnum = () => ApiResponsestring()

/** 设置密码 */
export const loginOrangeerSetPassWord = () => ApiResponseboolean()
