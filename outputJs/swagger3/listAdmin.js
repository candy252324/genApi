import { Http } from '../../httpJs/index'

/**
 * 群管理员列表(含群主)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function listAdmin(data, config) {
  return Http.get('/listAdmin', data, config)
}
