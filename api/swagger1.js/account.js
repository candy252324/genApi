import {Http} from '../../httpJs/index';

/**
 * 账号信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function accountAccQueryAcc(config){
  return Http.post('/api/account/acc/queryAcc', config)
}

/**
 * 加入公司
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function accountEnterpriseAddEnterprise  (data, config) {
  return Http.post('/api/account/enterprise/addEnterprise', data, config)
}

/**
 * 创建企业
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function accountEnterpriseCreateEnterprise  (data, config) {
  return Http.post('/api/account/enterprise/createEnterprise', data, config)
}

/**
 * 用户是否加入/拥有企业
 * @param {*} config 可选，如：{headers:{}}
 */
export function accountEnterpriseListUserEnterprise(config){
  return Http.get('/api/account/enterprise/listUserEnterprise', config)
}

/**
 * 分页查询全部企业列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function accountEnterprisePageAllEnterprise  (data, config) {
  return Http.post('/api/account/enterprise/pageAllEnterprise', data, config)
}
