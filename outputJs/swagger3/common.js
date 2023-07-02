import { Http } from '../../httpJs/index'

/**
 * 绑定设备
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonBind(data, config) {
  return Http.post('/api/common/bind', data, config)
}

/**
 * 聚合搜索
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSearch(data, config) {
  return Http.post('/api/common/search', data, config)
}

/**
 * 按照类型搜索
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSearchType(data, config) {
  return Http.post('/api/common/search/type', data, config)
}

/**
 * 搜索人员添加好友前
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSearchBeforeAddFriend(data, config) {
  return Http.post('/api/common/searchBeforeAddFriend', data, config)
}

/**
 * 绑定设备
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSwitchChannel(data, config) {
  return Http.post('/api/common/switchChannel', data, config)
}

/**
 * 切换用户时用户列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSwitchUserList(data, config) {
  return Http.post('/api/common/switchUserList', data, config)
}

/**
 * 绑定设备
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonBind(data, config) {
  return Http.post('/common/bind', data, config)
}

/**
 * 聚合搜索
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSearch(data, config) {
  return Http.post('/common/search', data, config)
}

/**
 * 按照类型搜索
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSearchType(data, config) {
  return Http.post('/common/search/type', data, config)
}

/**
 * 搜索人员添加好友前
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSearchBeforeAddFriend(data, config) {
  return Http.post('/common/searchBeforeAddFriend', data, config)
}

/**
 * 绑定设备
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSwitchChannel(data, config) {
  return Http.post('/common/switchChannel', data, config)
}

/**
 * 切换用户时用户列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function commonSwitchUserList(data, config) {
  return Http.post('/common/switchUserList', data, config)
}
