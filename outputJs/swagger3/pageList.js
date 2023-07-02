import { Http } from '../../httpJs/index'

/**
 * 根据groupId分页查询成员列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function pageList(data, config) {
  return Http.post('/pageList', data, config)
}
