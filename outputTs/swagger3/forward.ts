import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseHuiHua,
  ApiResponseListForwardListResp,
  ApiResponseComPageCommonSearchResp,
  CommonSearchReq,
  ForwardListReq,
} from './_interfaces'

/** 转发 创建会话/发起聊天/进入群聊 */
export function apiForwardCheckAndCreate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseHuiHua> {
  return Http.post('/api/forward/checkAndCreate', data, config)
}

/** 列表(仅5个) */
export function apiForwardList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListForwardListResp> {
  return Http.post('/api/forward/list', data, config)
}

/** 转发搜索列表 */
export function apiForwardSearch(
  data: CommonSearchReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageCommonSearchResp> {
  return Http.post('/api/forward/search', data, config)
}

/** 列表(仅5个) */
export function forwardList(
  data: ForwardListReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListForwardListResp> {
  return Http.post('/forward/list', data, config)
}

/** 转发搜索列表 */
export function forwardSearch(
  data: CommonSearchReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageCommonSearchResp> {
  return Http.post('/forward/search', data, config)
}
