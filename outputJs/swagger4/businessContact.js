import { Http } from '../../httpJs/index'

/**
 * 添加联系人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessContactAdd(data, config) {
  return Http.post('/api/businessContact/add', data, config)
}

/**
 * 删除联系人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessContactDeleteById(data, config) {
  return Http.post('/api/businessContact/deleteById', data, config)
}

/**
 * 联系人列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessContactList(data, config) {
  return Http.post('/api/businessContact/list', data, config)
}
