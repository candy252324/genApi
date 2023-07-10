import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  HaoYouFriendshipReq,
  ApiResponseFriendshipDetailResp,
  ApiResponseboolean,
  FriendshipDetailReq,
  ApiResponseUserDetailResp,
  XiuGaiBeiZhuModifyfriendRemarkReq,
  ApiResponseComPageFriendshipResp,
  ApiResponsestring,
} from './_interfaces'

/** 删除好友 */
export function apiFriendshipDelete(
  data: HaoYouFriendshipReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/friendship/delete', data, config)
}

/** 单聊会话，上部title */
export function apiFriendshipDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseFriendshipDetailResp> {
  return Http.post('/api/friendship/detail', data, config)
}

/** 是否已经是好友 */
export function apiFriendshipGetIsFriend(
  data: FriendshipDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/friendship/getIsFriend', data, config)
}

/** 获取用户信息 */
export function apiFriendshipGetUserDetail(
  data: FriendshipDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseUserDetailResp> {
  return Http.post('/api/friendship/getUserDetail', data, config)
}

/** 修改[不一定是好友关系]他人备注 */
export function apiFriendshipModifyRemark(
  data: XiuGaiBeiZhuModifyfriendRemarkReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/friendship/modifyRemark', data, config)
}

/** 我的好友列表 */
export function apiFriendshipPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageFriendshipResp> {
  return Http.post('/api/friendship/pageList', data, config)
}

/** 是否通知和免打扰 */
export function apiFriendshipSetNoticeAndTop(
  data: HaoYouFriendshipReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/friendship/setNoticeAndTop', data, config)
}

/** 删除好友 */
export function friendshipDelete(
  data: HaoYouFriendshipReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.post('/friendship/delete', data, config)
}

/** 单聊会话，上部title */
export function friendshipDetail(
  data: FriendshipDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseFriendshipDetailResp> {
  return Http.post('/friendship/detail', data, config)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend(
  data: FriendshipDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/friendship/getIsFriend', data, config)
}

/** 获取用户信息 */
export function friendshipGetUserDetail(
  data: FriendshipDetailReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseUserDetailResp> {
  return Http.post('/friendship/getUserDetail', data, config)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark(
  data: XiuGaiBeiZhuModifyfriendRemarkReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/friendship/modifyRemark', data, config)
}

/** 我的好友列表 */
export function friendshipPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageFriendshipResp> {
  return Http.post('/friendship/pageList', data, config)
}
