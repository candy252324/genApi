import {Http} from '../../httpJs/index';

/**
 * 执行审核
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function auditAuthExecute  (data, config) {
  return Http.put('/api/audit/auth/execute', data, config)
}

/**
 * 授权审核详情列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function auditAuthInfoList  (data, config) {
  return Http.get('/api/audit/auth/infoList', data, config)
}

/**
 * 授权审核列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function auditAuthList  (data, config) {
  return Http.get('/api/audit/auth/list', data, config)
}
