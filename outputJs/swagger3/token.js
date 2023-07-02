import { Http } from '../../httpJs/index'

/**
 * 添加token到缓存
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tokenAddTokenToShangyunCache(data, config) {
  return Http.post('/token/addTokenToShangyunCache', data, config)
}

/**
 * 校验token
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tokenCheckToken(data, config) {
  return Http.post('/token/checkToken', data, config)
}

/**
 * 删除session
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function tokenRemoveSessionInShangyun(data, config) {
  return Http.post('/token/removeSessionInShangyun', data, config)
}
