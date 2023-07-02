import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiFriendshipDelete,
  ResOfApiFriendshipDetail,
  ResOfApiFriendshipGetIsFriend,
  ResOfApiFriendshipGetUserDetail,
  ResOfApiFriendshipModifyRemark,
  ResOfApiFriendshipPageList,
  ResOfApiFriendshipSetNoticeAndTop,
  ResOfFriendshipDelete,
  ResOfFriendshipDetail,
  ResOfFriendshipGetIsFriend,
  ResOfFriendshipGetUserDetail,
  ResOfFriendshipModifyRemark,
  ResOfFriendshipPageList,
} from './_interfaces'

/** 删除好友 */
export function apiFriendshipDelete(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipDelete> {
  return Http.post('/api/friendship/delete', data, config)
}

/** 单聊会话，上部title */
export function apiFriendshipDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipDetail> {
  return Http.post('/api/friendship/detail', data, config)
}

/** 是否已经是好友 */
export function apiFriendshipGetIsFriend(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipGetIsFriend> {
  return Http.post('/api/friendship/getIsFriend', data, config)
}

/** 获取用户信息 */
export function apiFriendshipGetUserDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipGetUserDetail> {
  return Http.post('/api/friendship/getUserDetail', data, config)
}

/** 修改[不一定是好友关系]他人备注 */
export function apiFriendshipModifyRemark(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipModifyRemark> {
  return Http.post('/api/friendship/modifyRemark', data, config)
}

/** 我的好友列表 */
export function apiFriendshipPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipPageList> {
  return Http.post('/api/friendship/pageList', data, config)
}

/** 是否通知和免打扰 */
export function apiFriendshipSetNoticeAndTop(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFriendshipSetNoticeAndTop> {
  return Http.post('/api/friendship/setNoticeAndTop', data, config)
}

/** 删除好友 */
export function friendshipDelete(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfFriendshipDelete> {
  return Http.post('/friendship/delete', data, config)
}

/** 单聊会话，上部title */
export function friendshipDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfFriendshipDetail> {
  return Http.post('/friendship/detail', data, config)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfFriendshipGetIsFriend> {
  return Http.post('/friendship/getIsFriend', data, config)
}

/** 获取用户信息 */
export function friendshipGetUserDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfFriendshipGetUserDetail> {
  return Http.post('/friendship/getUserDetail', data, config)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfFriendshipModifyRemark> {
  return Http.post('/friendship/modifyRemark', data, config)
}

/** 我的好友列表 */
export function friendshipPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfFriendshipPageList> {
  return Http.post('/friendship/pageList', data, config)
}
