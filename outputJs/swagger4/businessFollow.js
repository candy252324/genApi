import { Http } from '../../httpJs/index'

/**
 * 员工列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessFollowEmployeeList(data, config) {
  return Http.post('/api/businessFollow/employeeList', data, config)
}

/**
 * 跟进
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessFollowFollow(data, config) {
  return Http.post('/api/businessFollow/follow', data, config)
}

/**
 * 重新跟进
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessFollowFollowAgain(data, config) {
  return Http.post('/api/businessFollow/followAgain', data, config)
}

/**
 * 不再跟进
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessFollowGiveUp(data, config) {
  return Http.post('/api/businessFollow/giveUp', data, config)
}

/**
 * 跟进记录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessFollowList(data, config) {
  return Http.post('/api/businessFollow/list', data, config)
}

/**
 * 转让
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessFollowTransfer(data, config) {
  return Http.post('/api/businessFollow/transfer', data, config)
}
