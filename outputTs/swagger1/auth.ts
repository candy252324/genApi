import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseListAuthEnterpriseOrgInfoResp,
  ApiResponseVoid,
  ApiResponseListlong,
} from './_interfaces'

/** 授权中心 查询当前租户的企业组织授权简略信息列表 */
export function apiAuthEnterpriseAuthOrgInfos(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListAuthEnterpriseOrgInfoResp> {
  return Http.post('/api/auth/enterprise/auth/org/infos', data, config)
}

/** 批量操作用户 授权/取消授权 */
export function apiAuthEnterpriseAuthUsers(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/auth/enterprise/auth/users', data, config)
}

/** 查询某业务类型下，员工是否有授权 */
export function apiAuthEnterpriseAuthUsersAuthstatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListlong> {
  return Http.post('/api/auth/enterprise/auth/users/auth-status', data, config)
}
