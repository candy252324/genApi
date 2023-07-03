import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseobject,
  ApiResponseComPageContactResp,
  ApiResponseComPageHuiHuaLieBiaoXiangYing,
  ApiResponseHuiHua,
} from './_interfaces'

/** 清空会话 */
export function apiChatClearChat(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/chat/clearChat', data, config)
}

/** 创建会话/发起聊天/进入群聊 */
export function apiChatCreate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/chat/create', data, config)
}

/** 常用联系人 */
export function apiChatOftenContact(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageContactResp> {
  return Http.post('/api/chat/oftenContact', data, config)
}

/** 会话列表 */
export function apiChatPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageHuiHuaLieBiaoXiangYing> {
  return Http.post('/api/chat/pageList', data, config)
}

/** 最近联系人 */
export function apiChatRecentContact(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageContactResp> {
  return Http.post('/api/chat/recentContact', data, config)
}

/** 会话列表 */
export function apiChatUnreadList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageHuiHuaLieBiaoXiangYing> {
  return Http.post('/api/chat/unreadList', data, config)
}

/** 清空会话 */
export function chatClearChat(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/chat/clearChat', data, config)
}

/** 创建会话/发起聊天/进入群聊 */
export function chatCreate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseHuiHua> {
  return Http.post('/chat/create', data, config)
}

/** 常用联系人 */
export function chatOftenContact(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageContactResp> {
  return Http.post('/chat/oftenContact', data, config)
}

/** 会话列表 */
export function chatPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageHuiHuaLieBiaoXiangYing> {
  return Http.post('/chat/pageList', data, config)
}

/** 最近联系人 */
export function chatRecentContact(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageContactResp> {
  return Http.post('/chat/recentContact', data, config)
}
