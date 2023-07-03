import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseZuHuXinXi,
  ApiResponseListZuHuXinXi,
  ApiResponseboolean,
} from './_interfaces'

/** 获取当前的租户信息 */
export function apiTenantAcquirePresentTenantInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseZuHuXinXi> {
  return Http.get('/api/tenant/acquirePresentTenantInfo', config)
}

/** 查询当前用户的租户列表 */
export function apiTenantAcquireTenantList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListZuHuXinXi> {
  return Http.get('/api/tenant/acquireTenantList', config)
}

/** 渠道企业解绑租户 */
export function apiTenantChannelUnbind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/tenant/channel/unbind', data, config)
}

/** 切换租户 */
export function apiTenantSwitchTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/tenant/switchTenant', data, config)
}

/** 查询当前用户未绑定的企业租户列表 */
export function apiTenantUnboundList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListZuHuXinXi> {
  return Http.get('/api/tenant/unbound/list', config)
}
