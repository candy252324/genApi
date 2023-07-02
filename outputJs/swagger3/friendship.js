import { Http } from '../../httpJs/index'

/**
 * 删除好友
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipDelete(data, config) {
  return Http.post('/api/friendship/delete', data, config)
}

/**
 * 单聊会话，上部title
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipDetail(data, config) {
  return Http.post('/api/friendship/detail', data, config)
}

/**
 * 是否已经是好友
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipGetIsFriend(data, config) {
  return Http.post('/api/friendship/getIsFriend', data, config)
}

/**
 * 获取用户信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipGetUserDetail(data, config) {
  return Http.post('/api/friendship/getUserDetail', data, config)
}

/**
 * 修改[不一定是好友关系]他人备注
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipModifyRemark(data, config) {
  return Http.post('/api/friendship/modifyRemark', data, config)
}

/**
 * 我的好友列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipPageList(data, config) {
  return Http.post('/api/friendship/pageList', data, config)
}

/**
 * 是否通知和免打扰
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipSetNoticeAndTop(data, config) {
  return Http.post('/api/friendship/setNoticeAndTop', data, config)
}

/**
 * 删除好友
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipDelete(data, config) {
  return Http.post('/friendship/delete', data, config)
}

/**
 * 单聊会话，上部title
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipDetail(data, config) {
  return Http.post('/friendship/detail', data, config)
}

/**
 * 是否已经是好友
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipGetIsFriend(data, config) {
  return Http.post('/friendship/getIsFriend', data, config)
}

/**
 * 获取用户信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipGetUserDetail(data, config) {
  return Http.post('/friendship/getUserDetail', data, config)
}

/**
 * 修改[不一定是好友关系]他人备注
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipModifyRemark(data, config) {
  return Http.post('/friendship/modifyRemark', data, config)
}

/**
 * 我的好友列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function friendshipPageList(data, config) {
  return Http.post('/friendship/pageList', data, config)
}
