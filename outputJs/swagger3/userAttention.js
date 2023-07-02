import { Http } from '../../httpJs/index'

/**
 * 取消关注
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userAttentionRemove(data, config) {
  return Http.get('/api/userAttention/remove', data, config)
}

/**
 * 新增特别关注
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userAttentionSave(data, config) {
  return Http.get('/api/userAttention/save', data, config)
}
