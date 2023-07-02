import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiTenantPersonAcquireInfo,
  ResOfApiTenantPersonUpdateAccPassword,
  ResOfApiTenantPersonUpdateInfo,
} from './_interfaces'

/** 获取个人租户信息详情 */
export function apiTenantPersonAcquireInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantPersonAcquireInfo> {
  return Http.get('/api/tenantPerson/acquireInfo', config)
}

/** 修改密码 */
export function apiTenantPersonUpdateAccPassword(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantPersonUpdateAccPassword> {
  return Http.post('/api/tenantPerson/updateAccPassword', data, config)
}

/** 修改租户个人信息 */
export function apiTenantPersonUpdateInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantPersonUpdateInfo> {
  return Http.post('/api/tenantPerson/updateInfo', data, config)
}
