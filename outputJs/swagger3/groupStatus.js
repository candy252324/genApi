import { Http } from '../../httpJs/index'

/**
 * 本群状态
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function groupStatus(data, config) {
  return Http.post('/groupStatus', data, config)
}
