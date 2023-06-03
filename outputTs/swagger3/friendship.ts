
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 删除好友 */
export function friendshipDelete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/delete', data, config)
}

/** 单聊会话，上部title */
export function friendshipDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/detail', data, config)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/getIsFriend', data, config)
}

/** 获取用户信息 */
export function friendshipGetUserDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/getUserDetail', data, config)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/modifyRemark', data, config)
}

/** 我的好友列表 */
export function friendshipPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/pageList', data, config)
}

/** 是否通知和免打扰 */
export function friendshipSetNoticeAndTop  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/friendship/setNoticeAndTop', data, config)
}

/** 删除好友 */
export function friendshipDelete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/friendship/delete', data, config)
}

/** 单聊会话，上部title */
export function friendshipDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/friendship/detail', data, config)
}

/** 是否已经是好友 */
export function friendshipGetIsFriend  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/friendship/getIsFriend', data, config)
}

/** 获取用户信息 */
export function friendshipGetUserDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/friendship/getUserDetail', data, config)
}

/** 修改[不一定是好友关系]他人备注 */
export function friendshipModifyRemark  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/friendship/modifyRemark', data, config)
}

/** 我的好友列表 */
export function friendshipPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/friendship/pageList', data, config)
}
