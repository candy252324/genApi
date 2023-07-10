import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseCorpWechatAuthUrlResp,
  ApiResponseChannelUserResp,
  ShouQuanRuCan,
  ApiResponseAgentConfigResp,
  InitAgengConfigReq,
  ApiResponse,
} from './_interfaces'

/** 获取应用授权链接 */
export function apiCorpWechatAppAuthLink(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCorpWechatAuthUrlResp> {
  return Http.get('/api/corpWechat/appAuthLink', config)
}

/** 获取渠道用户信息 */
export function apiCorpWechatAuthUser(
  data: ShouQuanRuCan,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseChannelUserResp> {
  return Http.post('/api/corpWechat/authUser', data, config)
}

/** 初始化企微agent_config */
export function apiCorpWechatInitAgent(
  data: InitAgengConfigReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAgentConfigResp> {
  return Http.post('/api/corpWechat/initAgent', data, config)
}

/** 用户登陆授权链接 */
export function apiCorpWechatOauth2(
  data: ShouQuanRuCan,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCorpWechatAuthUrlResp> {
  return Http.post('/api/corpWechat/oauth2', data, config)
}

/** 同步组织架构 */
export function apiCorpWechatSyncDoc(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/corpWechat/syncDoc', config)
}
