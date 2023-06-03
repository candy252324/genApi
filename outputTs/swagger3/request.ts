
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 添加好友申请 */
export function requestAddFriend  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/addFriend', data, config)
}

/** 入群申请 */
export function requestAddGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/addGroup', data, config)
}

/** 通过/拒绝 */
export function requestApprove  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/approve', data, config)
}

/** 验证消息详情 */
export function requestDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/request/detail', data, config)
}

/** 获取未读标识(分页列表) */
export function requestGetUnreadAttr  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/getUnreadAttr', data, config)
}

/** 未读验证消息数量(通讯录页) */
export function requestGetUnreadCount  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/request/getUnreadCount', data, config)
}

/** 邀请入群 */
export function requestInvite  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/invite', data, config)
}

/** 分页查询验证消息 */
export function requestPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/pageList', data, config)
}

/** 标识消息已读 */
export function requestRead  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/read', data, config)
}

/** 邀请入群预校验 */
export function requestTryInvite  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/request/tryInvite', data, config)
}
