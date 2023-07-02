import { Http } from '../../httpJs/index'

/**
 * 获取当前版本后的版本列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function appVersionList(data, config) {
  return Http.get('/api/appVersion/list', data, config)
}
