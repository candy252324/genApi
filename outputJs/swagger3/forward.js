import { Http } from '../../httpJs/index'

/**
 * 转发 创建会话/发起聊天/进入群聊
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function forwardCheckAndCreate(data, config) {
  return Http.post('/api/forward/checkAndCreate', data, config)
}

/**
 * 列表(仅5个)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function forwardList(data, config) {
  return Http.post('/api/forward/list', data, config)
}

/**
 * 转发搜索列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function forwardSearch(data, config) {
  return Http.post('/api/forward/search', data, config)
}

/**
 * 列表(仅5个)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function forwardList(data, config) {
  return Http.post('/forward/list', data, config)
}

/**
 * 转发搜索列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function forwardSearch(data, config) {
  return Http.post('/forward/search', data, config)
}
