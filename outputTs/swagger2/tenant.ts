import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiTenantAcquirePresentTenantInfo,
  ResOfApiTenantAcquireTenantList,
  ResOfApiTenantChannelAcquireChannelInfo,
  ResOfApiTenantChannelGetCorpTenant,
  ResOfApiTenantChannelSyncCorp,
  ResOfApiTenantChannelUnbind,
  ResOfApiTenantSwitchTenant,
  ResOfApiTenantUnboundList,
} from './_interfaces'

/** 获取当前的租户信息 */
export function apiTenantAcquirePresentTenantInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantAcquirePresentTenantInfo> {
  return Http.get('/api/tenant/acquirePresentTenantInfo', config)
}

/** 查询当前用户的租户列表 */
export function apiTenantAcquireTenantList(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantAcquireTenantList> {
  return Http.get('/api/tenant/acquireTenantList', config)
}

/** 获取租户绑定的渠道企业 */
export function apiTenantChannelAcquireChannelInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantChannelAcquireChannelInfo> {
  return Http.get('/api/tenant/channel/acquireChannelInfo', data, config)
}

/** 获取渠道企业绑定的租户 */
export function apiTenantChannelGetCorpTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantChannelGetCorpTenant> {
  return Http.get('/api/tenant/channel/getCorpTenant', data, config)
}

/** 同步渠道企业信息（组织架构和员工） */
export function apiTenantChannelSyncCorp(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantChannelSyncCorp> {
  return Http.get('/api/tenant/channel/syncCorp', data, config)
}

/** 渠道企业解绑租户 */
export function apiTenantChannelUnbind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantChannelUnbind> {
  return Http.post('/api/tenant/channel/unbind', data, config)
}

/** 切换租户 */
export function apiTenantSwitchTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantSwitchTenant> {
  return Http.get('/api/tenant/switchTenant', data, config)
}

/** 查询当前用户未绑定的企业租户列表 */
export function apiTenantUnboundList(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiTenantUnboundList> {
  return Http.get('/api/tenant/unbound/list', config)
}
