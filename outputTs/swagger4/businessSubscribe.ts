import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  BusinessSubscribeInfoReq,
  ApiResponseBusinessSubscribeInfoResp,
} from './_interfaces'

/** 商机订阅规则编辑 */
export function apiBusinessSubscribeEdit(
  data: BusinessSubscribeInfoReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/businessSubscribe/edit', data, config)
}

/** 商机订阅规则详情 */
export function apiBusinessSubscribeInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseBusinessSubscribeInfoResp> {
  return Http.get('/api/businessSubscribe/info', config)
}
