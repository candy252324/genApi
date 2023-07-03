import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComPageQianYueJiLuFenYeresponse,
  ApiResponseVoid,
  ApiResponseQianYueJieGuoresponse,
} from './_interfaces'

/** 签约记录 */
export function apiSigningPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageQianYueJiLuFenYeresponse> {
  return Http.post('/api/signing/pageList', data, config)
}

/** 解除关联 */
export function apiSigningRemove(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/signing/remove', data, config)
}

/** 新增签约 */
export function apiSigningSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQianYueJieGuoresponse> {
  return Http.post('/api/signing/save', data, config)
}
