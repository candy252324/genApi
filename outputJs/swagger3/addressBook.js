import { Http } from '../../httpJs/index'

/**
 * 获取租户列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function addressBookListTenantInfo(data, config) {
  return Http.post('/addressBook/listTenantInfo', data, config)
}

/**
 * 获取用户(正常状态)租户信息列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function addressBookListTenantInfo(data, config) {
  return Http.get('/api/addressBook/listTenantInfo', data, config)
}
