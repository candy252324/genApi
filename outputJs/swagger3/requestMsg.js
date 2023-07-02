import { Http } from '../../httpJs/index'

/**
 * 请求回复消息保存
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function requestMsgSave(data, config) {
  return Http.post('/api/requestMsg/save', data, config)
}
