import { Http } from '../../httpJs/index'

/**
 * 退出群聊
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function leaveGroup(data, config) {
  return Http.post('/leaveGroup', data, config)
}
