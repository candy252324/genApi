import { Http } from '../../httpJs/index'

/**
 * 群信息详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupDetail(data, config) {
  return Http.post('/api/group/detail', data, config)
}

/**
 * 群主解散群[二期]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupDissolve(data, config) {
  return Http.post('/api/group/dissolve', data, config)
}

/**
 * 群设置
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupGroupSetting(data, config) {
  return Http.post('/api/group/groupSetting', data, config)
}

/**
 * 修改群名称
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupModifyGroupName(data, config) {
  return Http.post('/api/group/modifyGroupName', data, config)
}

/**
 * 分页获取群列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupPageList(data, config) {
  return Http.post('/api/group/pageList', data, config)
}

/**
 * 创建群
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupSave(data, config) {
  return Http.post('/api/group/save', data, config)
}

/**
 * 转让群[二期]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupTransfer(data, config) {
  return Http.post('/api/group/transfer', data, config)
}

/**
 * 群信息详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupDetail(data, config) {
  return Http.post('/group/detail', data, config)
}

/**
 * 群设置
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupGroupSetting(data, config) {
  return Http.post('/group/groupSetting', data, config)
}

/**
 * 修改群名称
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupModifyGroupName(data, config) {
  return Http.post('/group/modifyGroupName', data, config)
}

/**
 * 分页获取群列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupPageList(data, config) {
  return Http.post('/group/pageList', data, config)
}

/**
 * 创建群
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupSave(data, config) {
  return Http.post('/group/save', data, config)
}
