import {Http} from '../../httpJs/index';

/**
 * 审核-执行审核
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function v1AuditRelation  (data, config) {
  return Http.put('/api/v1/audit/relation', data, config)
}

/**
 * 关联审核列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function v1AuditRelationPage  (data, config) {
  return Http.post('/api/v1/audit/relation/page', data, config)
}

/**
 * 关联审核-统计
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function v1AuditRelationTotal  (data, config) {
  return Http.post('/api/v1/audit/relation/total', data, config)
}
