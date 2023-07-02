import { Http } from '../../httpJs/index'

/**
 * 手机号列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function phoneList(data, config) {
  return Http.post('/api/phone/list', data, config)
}
