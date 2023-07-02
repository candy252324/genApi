import { Http } from '../../httpJs/index'

/**
 * 获取当前的租户信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantAcquirePresentTenantInfo(config) {
  return Http.get('/api/tenant/acquirePresentTenantInfo', config)
}

/**
 * 查询当前用户的租户列表
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantAcquireTenantList(config) {
  return Http.get('/api/tenant/acquireTenantList', config)
}

/**
 * 渠道企业解绑租户
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantChannelUnbind(data, config) {
  return Http.post('/api/tenant/channel/unbind', data, config)
}

/**
 * 切换租户
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantSwitchTenant(data, config) {
  return Http.get('/api/tenant/switchTenant', data, config)
}

/**
 * 查询当前用户未绑定的企业租户列表
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantUnboundList(config) {
  return Http.get('/api/tenant/unbound/list', config)
}
