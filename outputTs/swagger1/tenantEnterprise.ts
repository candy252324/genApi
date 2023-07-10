import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseQiYeZuHuXinXiXiangQing,
  ApiResponseboolean,
  QiYeZuHuXinXiXiangQing,
} from './_interfaces'

/** 获取企业租户信息详情 */
export function apiTenantEnterpriseAcquireInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQiYeZuHuXinXiXiangQing> {
  return Http.get('/api/tenantEnterprise/acquireInfo', config)
}

/** 修改企业租户信息 */
export function apiTenantEnterpriseUpdateInfo(
  data: QiYeZuHuXinXiXiangQing,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/tenantEnterprise/updateInfo', data, config)
}
