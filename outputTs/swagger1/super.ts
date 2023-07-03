import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseListSuperManResp,
  ApiResponse,
  ApiResponsestring,
} from './_interfaces'

/** 列表 */
export function apiSuperList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSuperManResp> {
  return Http.get('/api/super/list', config)
}

/** 转让 */
export function apiSuperTransfer(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/super/transfer', data, config)
}

/** 转让验证码验证 */
export function apiSuperVerifyVerifyType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.post('/api/super/verify/${verifyType}', data, config)
}
