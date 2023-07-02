import { Http } from '../../httpJs/index'

/**
 * 商机订阅规则编辑
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessSubscribeEdit(data, config) {
  return Http.post('/api/businessSubscribe/edit', data, config)
}

/**
 * 商机订阅规则详情
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessSubscribeInfo(config) {
  return Http.get('/api/businessSubscribe/info', config)
}
