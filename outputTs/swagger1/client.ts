import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseChannelUserResp,
  ApiResponseCorpWechatAuthUrlResp,
} from './_interfaces'

/** 获取渠道用户信息 */
export function apiClientCorpWechatAuthUser(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseChannelUserResp> {
  return Http.post('/api/client/corpWechat/authUser', data, config)
}

/** 用户登陆授权链接 */
export function apiClientCorpWechatOauth2(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCorpWechatAuthUrlResp> {
  return Http.post('/api/client/corpWechat/oauth2', data, config)
}
