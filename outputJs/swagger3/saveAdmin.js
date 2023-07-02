import { Http } from '../../httpJs/index'

/**
 * 添加群管理员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function saveAdmin(data, config) {
  return Http.post('/saveAdmin', data, config)
}
