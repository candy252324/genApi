import { Http } from '../../httpJs/index'

/**
 * 添加好友申请
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestAddFriend(data, config) {
  return Http.post('/api/request/addFriend', data, config)
}

/**
 * 入群申请
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestAddGroup(data, config) {
  return Http.post('/api/request/addGroup', data, config)
}

/**
 * 通过/拒绝
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestApprove(data, config) {
  return Http.post('/api/request/approve', data, config)
}

/**
 * 验证消息详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestDetail(data, config) {
  return Http.get('/api/request/detail', data, config)
}

/**
 * 获取未读标识(分页列表)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestGetUnreadAttr(data, config) {
  return Http.post('/api/request/getUnreadAttr', data, config)
}

/**
 * 未读验证消息数量(通讯录页)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestGetUnreadCount(data, config) {
  return Http.get('/api/request/getUnreadCount', data, config)
}

/**
 * 邀请入群
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestInvite(data, config) {
  return Http.post('/api/request/invite', data, config)
}

/**
 * 分页查询验证消息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestPageList(data, config) {
  return Http.post('/api/request/pageList', data, config)
}

/**
 * 标识消息已读
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestRead(data, config) {
  return Http.post('/api/request/read', data, config)
}

/**
 * 邀请入群预校验
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestTryInvite(data, config) {
  return Http.post('/api/request/tryInvite', data, config)
}
