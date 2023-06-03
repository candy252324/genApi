import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 注销账号 */
export function userCancel  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/user/cancel', data, config)
}

/** 获取注销账号短信验证码 */
export function userGetCancelSmsCode  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/getCancelSmsCode', data, config)
}

/** 当前channel下是否已经选择租户 */
export function userHasSelectTenant  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/hasSelectTenant', data, config)
}

/** 获取用户(正常状态)租户信息列表 */
export function userListTenantInfo  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/listTenantInfo', data, config)
}

/** 修改用户头像 */
export function userModifyAvatar  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/user/modifyAvatar', data, config)
}

/** 修改用户邮箱 */
export function userModifyEmail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/user/modifyEmail', data, config)
}

/** 用户个人信息 */
export function userPersonInfo  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/personInfo', data, config)
}

/** 查询版本类型 */
export function userQueryAppVersion  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/queryAppVersion', data, config)
}

/** 切换/设置主企业 */
export function userSetDefaultEnterprise  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/user/setDefaultEnterprise', data, config)
}

/** 是否需要验证(添加我为好友) */
export function userSetIsApprove  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/setIsApprove', data, config)
}

/** 设置邀请我加入外部群时是否需要确认 */
export function userSetIsGroupApprove  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/setIsGroupApprove', data, config)
}

/** 是否通知 */
export function userSetIsNotice  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/user/setIsNotice', data, config)
}

/** 添加我为好友的方式 */
export function userSetRequestChannel  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/user/setRequestChannel', data, config)
}
