import {Http} from '../../httpJs/index';

/**
 * 列表
 * @param {*} config 可选，如：{headers:{}}
 */
export function superList(config){
  return Http.get('/api/super/list', config)
}

/**
 * 转让
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function superTransfer  (data, config) {
  return Http.get('/api/super/transfer', data, config)
}

/**
 * 转让验证码验证
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function superVerifyVerifyType  (data, config) {
  return Http.post('/api/super/verify/${verifyType}', data, config)
}
