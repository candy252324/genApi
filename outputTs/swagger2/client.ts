import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiClientCorpWechatAuthUser,
  ResOfApiClientCorpWechatOauth2,
} from './_interfaces'

/** 获取渠道用户信息 */
export function apiClientCorpWechatAuthUser(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiClientCorpWechatAuthUser> {
  return Http.post('/api/client/corpWechat/authUser', data, config)
}

/** 用户登陆授权链接 */
export function apiClientCorpWechatOauth2(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiClientCorpWechatOauth2> {
  return Http.post('/api/client/corpWechat/oauth2', data, config)
}
