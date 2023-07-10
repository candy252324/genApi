import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  ApiResponseComPageGuanLianShenHeXinXi,
  ApiResponseShenHeTongJiHuanCunSanShiMiao,
  AuditRelationTotalReq,
} from './_interfaces'

/** 审核-执行审核 */
export function apiV1AuditRelation(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.put('/api/v1/audit/relation', data, config)
}

/** 关联审核列表 */
export function apiV1AuditRelationPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageGuanLianShenHeXinXi> {
  return Http.post('/api/v1/audit/relation/page', data, config)
}

/** 关联审核-统计 */
export function apiV1AuditRelationTotal(
  data: AuditRelationTotalReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShenHeTongJiHuanCunSanShiMiao> {
  return Http.post('/api/v1/audit/relation/total', data, config)
}
