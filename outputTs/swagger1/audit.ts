import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseVoid,
  ApiResponseShouQuanShenHe,
  ApiResponseComPageShouQuanShenHeLieBiao,
} from './_interfaces'

/** 执行审核 */
export function apiAuditAuthExecute(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.put('/api/audit/auth/execute', data, config)
}

/** 授权审核详情列表 */
export function apiAuditAuthInfoList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShouQuanShenHe> {
  return Http.get('/api/audit/auth/infoList', data, config)
}

/** 授权审核列表 */
export function apiAuditAuthList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageShouQuanShenHeLieBiao> {
  return Http.get('/api/audit/auth/list', data, config)
}
