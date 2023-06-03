import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 绑定设备 */
export function commonBind  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/common/bind', data, config)
}

/** 聚合搜索 */
export function commonSearch  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/common/search', data, config)
}

/** 按照类型搜索 */
export function commonSearchType  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/common/search/type', data, config)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/common/searchBeforeAddFriend', data, config)
}

/** 绑定设备 */
export function commonSwitchChannel  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/common/switchChannel', data, config)
}

/** 切换用户时用户列表 */
export function commonSwitchUserList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/common/switchUserList', data, config)
}

/** 绑定设备 */
export function commonBind  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/common/bind', data, config)
}

/** 聚合搜索 */
export function commonSearch  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/common/search', data, config)
}

/** 按照类型搜索 */
export function commonSearchType  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/common/search/type', data, config)
}

/** 搜索人员添加好友前 */
export function commonSearchBeforeAddFriend  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/common/searchBeforeAddFriend', data, config)
}

/** 绑定设备 */
export function commonSwitchChannel  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/common/switchChannel', data, config)
}

/** 切换用户时用户列表 */
export function commonSwitchUserList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/common/switchUserList', data, config)
}
