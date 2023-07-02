import { Http } from '../../httpJs/index'

/**
 * 是否是群成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function existInGroup(data, config) {
  return Http.post('/existInGroup', data, config)
}
