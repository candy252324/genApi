import { ApiResponseDengLuXiangYingShiTi, ApiResponse, ApiResponsestring } from './_interfaces'
import Mock from 'mockjs'

/** 通用登录 */
export const loginDoLogin = () => ApiResponseDengLuXiangYingShiTi()

/** 退出登陆 */
export const loginDoLogout = () => ApiResponse()

/** 发送手机登录验长春花码 */
export const loginSendPhoneValidateCode = () => ApiResponsestring()
