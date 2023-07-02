import { Http } from '../../httpJs/index'

/**
 * 删除群管理员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deleteAdmin(data, config) {
  return Http.post('/deleteAdmin', data, config)
}
