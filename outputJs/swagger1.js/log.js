import {Http} from '../../httpJs/index';

/**
 * 登录日志
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function logList  (data, config) {
  return Http.get('/api/log/list', data, config)
}
