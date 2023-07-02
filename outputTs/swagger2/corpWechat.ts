import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiCorpWechatAppAuthLink,
  ResOfApiCorpWechatAuthUser,
  ResOfApiCorpWechatInitAgent,
  ResOfApiCorpWechatOauth2,
  ResOfApiCorpWechatSyncDoc,
  ResOfApiCorpWechatWebLoginAuthUser,
  ResOfApiCorpWechatWebLoginOauth2,
} from './_interfaces'

/** 获取应用授权链接 */
export function apiCorpWechatAppAuthLink(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatAppAuthLink> {
  return Http.get('/api/corpWechat/appAuthLink', config)
}

/** 获取渠道用户信息 */
export function apiCorpWechatAuthUser(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatAuthUser> {
  return Http.post('/api/corpWechat/authUser', data, config)
}

/** 初始化企微agent_config */
export function apiCorpWechatInitAgent(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatInitAgent> {
  return Http.post('/api/corpWechat/initAgent', data, config)
}

/** 用户登陆授权链接 */
export function apiCorpWechatOauth2(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatOauth2> {
  return Http.post('/api/corpWechat/oauth2', data, config)
}

/** 同步组织架构 */
export function apiCorpWechatSyncDoc(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatSyncDoc> {
  return Http.get('/api/corpWechat/syncDoc', config)
}

/** webLogin获取企业微信用户信息 */
export function apiCorpWechatWebLoginAuthUser(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatWebLoginAuthUser> {
  return Http.post('/api/corpWechat/webLogin/authUser', data, config)
}

/** webLogin用户登陆授权链接 */
export function apiCorpWechatWebLoginOauth2(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCorpWechatWebLoginOauth2> {
  return Http.post('/api/corpWechat/webLogin/oauth2', data, config)
}
