import {Http} from '../../httpJs/index';

/**
 * 获取个人租户信息详情
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantPersonAcquireInfo(config){
  return Http.get('/api/tenantPerson/acquireInfo', config)
}

/**
 * 修改密码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantPersonUpdateAccPassword  (data, config) {
  return Http.post('/api/tenantPerson/updateAccPassword', data, config)
}

/**
 * 修改租户个人信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantPersonUpdateInfo  (data, config) {
  return Http.post('/api/tenantPerson/updateInfo', data, config)
}
