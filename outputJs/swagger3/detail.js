import { Http } from '../../httpJs/index'

/**
 * 我在本群信息详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function detail(data, config) {
  return Http.post('/detail', data, config)
}
