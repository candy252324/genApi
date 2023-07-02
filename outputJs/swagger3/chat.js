import { Http } from '../../httpJs/index'

/**
 * 清空会话
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatClearChat(data, config) {
  return Http.post('/api/chat/clearChat', data, config)
}

/**
 * 创建会话/发起聊天/进入群聊
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatCreate(data, config) {
  return Http.post('/api/chat/create', data, config)
}

/**
 * 常用联系人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatOftenContact(data, config) {
  return Http.post('/api/chat/oftenContact', data, config)
}

/**
 * 会话列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatPageList(data, config) {
  return Http.post('/api/chat/pageList', data, config)
}

/**
 * 最近联系人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatRecentContact(data, config) {
  return Http.post('/api/chat/recentContact', data, config)
}

/**
 * 会话列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatUnreadList(data, config) {
  return Http.post('/api/chat/unreadList', data, config)
}

/**
 * 清空会话
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatClearChat(data, config) {
  return Http.post('/chat/clearChat', data, config)
}

/**
 * 创建会话/发起聊天/进入群聊
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatCreate(data, config) {
  return Http.post('/chat/create', data, config)
}

/**
 * 常用联系人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatOftenContact(data, config) {
  return Http.post('/chat/oftenContact', data, config)
}

/**
 * 会话列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatPageList(data, config) {
  return Http.post('/chat/pageList', data, config)
}

/**
 * 最近联系人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function chatRecentContact(data, config) {
  return Http.post('/chat/recentContact', data, config)
}
