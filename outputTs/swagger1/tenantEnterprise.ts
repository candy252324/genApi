import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiTenantEnterpriseAcquireInfo,
  ResOfApiTenantEnterpriseUpdateInfo,
} from './_interfaces'

/** 获取企业租户信息详情 */
export function apiTenantEnterpriseAcquireInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantEnterpriseAcquireInfo> {
  return Http.get('/api/tenantEnterprise/acquireInfo', config)
}

/** 修改企业租户信息 */
export function apiTenantEnterpriseUpdateInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantEnterpriseUpdateInfo> {
  return Http.post('/api/tenantEnterprise/updateInfo', data, config)
}
