import {Http} from '../../httpJs/index';

/**
 * 认领个人信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function pageHomeClaimClaimId  (data, config) {
  return Http.get('/api/pageHome/claim/${claimId}', data, config)
}

/**
 * 排除个人信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function pageHomeExcludeClaimId  (data, config) {
  return Http.get('/api/pageHome/exclude/${claimId}', data, config)
}

/**
 * 查询认领操作结果
 * @param {*} config 可选，如：{headers:{}}
 */
export function pageHomeJudge(config){
  return Http.get('/api/pageHome/judge', config)
}

/**
 * 查询认证结果
 * @param {*} config 可选，如：{headers:{}}
 */
export function pageHomeQuery(config){
  return Http.get('/api/pageHome/query', config)
}
