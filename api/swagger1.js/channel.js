import {Http} from '../../httpJs/index';

/**
 * 登录绑定
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function channelEmployeeComLoginAndBind  (data, config) {
  return Http.post('/api/channel/employee/comLoginAndBind', data, config)
}

/**
 * 新增内部绑定
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function channelTenantConfigAdd  (data, config) {
  return Http.post('/api/channel/tenantConfig/add', data, config)
}

/**
 * 绑定详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function channelTenantConfigDetail  (data, config) {
  return Http.get('/api/channel/tenantConfig/detail', data, config)
}

/**
 * 修改内部绑定
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function channelTenantConfigUpdate  (data, config) {
  return Http.post('/api/channel/tenantConfig/update', data, config)
}
