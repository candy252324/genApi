import {ApiResponse,HuiHua,List,ForwardListResp,ComPage,CommonSearchResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 转发 创建会话/发起聊天/进入群聊 */
export function apiForwardCheckAndCreate  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<HuiHua>>{
  return Http.post('/api/forward/checkAndCreate', data, config)
}

/** 列表(仅5个) */
export function apiForwardList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<ForwardListResp>>>{
  return Http.post('/api/forward/list', data, config)
}

/** 转发搜索列表 */
export function apiForwardSearch  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<ComPage<CommonSearchResp>>>{
  return Http.post('/api/forward/search', data, config)
}

/** 列表(仅5个) */
export function forwardList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<ForwardListResp>>>{
  return Http.post('/forward/list', data, config)
}

/** 转发搜索列表 */
export function forwardSearch  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<ComPage<CommonSearchResp>>>{
  return Http.post('/forward/search', data, config)
}
