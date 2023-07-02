import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiAuditAuthExecute,
  ResOfApiAuditAuthInfoList,
  ResOfApiAuditAuthList,
} from './_interfaces'

/** 执行审核 */
export function apiAuditAuthExecute(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiAuditAuthExecute> {
  return Http.put('/api/audit/auth/execute', data, config)
}

/** 授权审核详情列表 */
export function apiAuditAuthInfoList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiAuditAuthInfoList> {
  return Http.get('/api/audit/auth/infoList', data, config)
}

/** 授权审核列表 */
export function apiAuditAuthList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiAuditAuthList> {
  return Http.get('/api/audit/auth/list', data, config)
}
