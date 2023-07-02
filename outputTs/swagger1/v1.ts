import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiV1AuditRelation,
  ResOfApiV1AuditRelationPage,
  ResOfApiV1AuditRelationTotal,
} from './_interfaces'

/** 审核-执行审核 */
export function apiV1AuditRelation(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiV1AuditRelation> {
  return Http.put('/api/v1/audit/relation', data, config)
}

/** 关联审核列表 */
export function apiV1AuditRelationPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiV1AuditRelationPage> {
  return Http.post('/api/v1/audit/relation/page', data, config)
}

/** 关联审核-统计 */
export function apiV1AuditRelationTotal(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiV1AuditRelationTotal> {
  return Http.post('/api/v1/audit/relation/total', data, config)
}
