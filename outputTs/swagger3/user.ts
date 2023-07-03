import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseListZuHuXinXi,
  ApiResponseUserRespDuiXiang,
  ApiResponseQueryLastMessageResp,
} from './_interfaces'

/** 注销账号 */
export function apiUserCancel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/user/cancel', data, config)
}

/** 获取注销账号短信验证码 */
export function apiUserGetCancelSmsCode(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/user/getCancelSmsCode', data, config)
}

/** 当前channel下是否已经选择租户 */
export function apiUserHasSelectTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/user/hasSelectTenant', data, config)
}

/** 获取用户(正常状态)租户信息列表 */
export function apiUserListTenantInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListZuHuXinXi> {
  return Http.get('/api/user/listTenantInfo', data, config)
}

/** 修改用户头像 */
export function apiUserModifyAvatar(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/user/modifyAvatar', data, config)
}

/** 修改用户邮箱 */
export function apiUserModifyEmail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/user/modifyEmail', data, config)
}

/** 用户个人信息 */
export function apiUserPersonInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseUserRespDuiXiang> {
  return Http.get('/api/user/personInfo', data, config)
}

/** 查询版本类型 */
export function apiUserQueryAppVersion(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQueryLastMessageResp> {
  return Http.get('/api/user/queryAppVersion', data, config)
}

/** 切换/设置主企业 */
export function apiUserSetDefaultEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/user/setDefaultEnterprise', data, config)
}

/** 是否需要验证(添加我为好友) */
export function apiUserSetIsApprove(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/user/setIsApprove', data, config)
}

/** 设置邀请我加入外部群时是否需要确认 */
export function apiUserSetIsGroupApprove(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/user/setIsGroupApprove', data, config)
}

/** 是否通知 */
export function apiUserSetIsNotice(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/user/setIsNotice', data, config)
}

/** 添加我为好友的方式 */
export function apiUserSetRequestChannel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/user/setRequestChannel', data, config)
}
