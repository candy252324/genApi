import {Http} from '../../httpJs/index';

/**
 * 获取企业租户信息详情
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantEnterpriseAcquireInfo(config){
  return Http.get('/api/tenantEnterprise/acquireInfo', config)
}

/**
 * 修改企业租户信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tenantEnterpriseUpdateInfo  (data, config) {
  return Http.post('/api/tenantEnterprise/updateInfo', data, config)
}
