import { Http } from '../../httpJs/index'

/**
 * 确认收到消息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageAck(data, config) {
  return Http.post('/api/message/ack', data, config)
}

/**
 * 清除历史消息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageClear(data, config) {
  return Http.post('/api/message/clear', data, config)
}

/**
 * 消息删除
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageDelete(data, config) {
  return Http.post('/api/message/delete', data, config)
}

/**
 * 消息详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageDetail(data, config) {
  return Http.post('/api/message/detail', data, config)
}

/**
 * 分页查询历史消息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageHistoryPageList(data, config) {
  return Http.post('/api/message/history/pageList', data, config)
}

/**
 * 分页搜索消息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageSearchPageList(data, config) {
  return Http.post('/api/message/search/pageList', data, config)
}

/**
 * [用户企业信息]获取用户(正常状态)租户信息列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function messageTestSendMQ(data, config) {
  return Http.post('/api/message/testSendMQ', data, config)
}
