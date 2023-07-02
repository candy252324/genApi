import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import {
  ResOfApiCommonBind,
  ResOfApiCommonSearch,
  ResOfApiCommonSearchType,
  ResOfApiCommonSearchBeforeAddFriend,
  ResOfApiCommonSwitchChannel,
  ResOfApiCommonSwitchUserList,
  ResOfCommonBind,
  ResOfCommonSearch,
  ResOfCommonSearchType,
  ResOfCommonSearchBeforeAddFriend,
  ResOfCommonSwitchChannel,
  ResOfCommonSwitchUserList,
} from './_interfaces'

/** 绑定设备 */
export function apiCommonBind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCommonBind> {
  return Http.post('/api/common/bind', data, config)
}

/** 聚合搜索 */
export function apiCommonSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCommonSearch> {
  return Http.post('/api/common/search', data, config)
}

/** 按照类型搜索 */
export function apiCommonSearchType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCommonSearchType> {
  return Http.post('/api/common/search/type', data, config)
}

/** 搜索人员添加好友前 */
export function apiCommonSearchBeforeAddFriend(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCommonSearchBeforeAddFriend> {
  return Http.post('/api/common/searchBeforeAddFriend', data, config)
}

/** 绑定设备 */
export function apiCommonSwitchChannel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCommonSwitchChannel> {
  return Http.post('/api/common/switchChannel', data, config)
}

/** 切换用户时用户列表 */
export function apiCommonSwitchUserList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCommonSwitchUserList> {
  return Http.post('/api/common/switchUserList', data, config)
}

/** 绑定设备 */
export function commonBind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfCommonBind> {
  return Http.post('/common/bind', data, config)
}

/** 聚合搜索 */
export function commonSearch(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfCommonSearch> {
  return Http.post('/common/search', data, config)
}

/** 按照类型搜索 */
export function commonSearchType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfCommonSearchType> {
  return Http.post('/common/search/type', data, config)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfCommonSearchBeforeAddFriend> {
  return Http.post('/common/searchBeforeAddFriend', data, config)
}

/** 绑定设备 */
export function commonSwitchChannel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfCommonSwitchChannel> {
  return Http.post('/common/switchChannel', data, config)
}

/** 切换用户时用户列表 */
export function commonSwitchUserList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfCommonSwitchUserList> {
  return Http.post('/common/switchUserList', data, config)
}
