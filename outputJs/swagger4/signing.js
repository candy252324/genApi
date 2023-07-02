import { Http } from '../../httpJs/index'

/**
 * 签约记录
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function signingPageList(data, config) {
  return Http.post('/api/signing/pageList', data, config)
}

/**
 * 解除关联
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function signingRemove(data, config) {
  return Http.post('/api/signing/remove', data, config)
}

/**
 * 新增签约
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function signingSave(data, config) {
  return Http.post('/api/signing/save', data, config)
}
