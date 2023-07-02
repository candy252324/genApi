import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiRequestAddFriend,
  ResOfApiRequestAddGroup,
  ResOfApiRequestApprove,
  ResOfApiRequestDetail,
  ResOfApiRequestGetUnreadAttr,
  ResOfApiRequestGetUnreadCount,
  ResOfApiRequestInvite,
  ResOfApiRequestPageList,
  ResOfApiRequestRead,
  ResOfApiRequestTryInvite,
} from './_interfaces'

/** 添加好友申请 */
export function apiRequestAddFriend(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestAddFriend> {
  return Http.post('/api/request/addFriend', data, config)
}

/** 入群申请 */
export function apiRequestAddGroup(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestAddGroup> {
  return Http.post('/api/request/addGroup', data, config)
}

/** 通过/拒绝 */
export function apiRequestApprove(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestApprove> {
  return Http.post('/api/request/approve', data, config)
}

/** 验证消息详情 */
export function apiRequestDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestDetail> {
  return Http.get('/api/request/detail', data, config)
}

/** 获取未读标识(分页列表) */
export function apiRequestGetUnreadAttr(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestGetUnreadAttr> {
  return Http.post('/api/request/getUnreadAttr', data, config)
}

/** 未读验证消息数量(通讯录页) */
export function apiRequestGetUnreadCount(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestGetUnreadCount> {
  return Http.get('/api/request/getUnreadCount', data, config)
}

/** 邀请入群 */
export function apiRequestInvite(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestInvite> {
  return Http.post('/api/request/invite', data, config)
}

/** 分页查询验证消息 */
export function apiRequestPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestPageList> {
  return Http.post('/api/request/pageList', data, config)
}

/** 标识消息已读 */
export function apiRequestRead(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestRead> {
  return Http.post('/api/request/read', data, config)
}

/** 邀请入群预校验 */
export function apiRequestTryInvite(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiRequestTryInvite> {
  return Http.post('/api/request/tryInvite', data, config)
}
