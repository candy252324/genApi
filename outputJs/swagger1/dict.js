import { Http } from '../../httpJs/index'

/**
 * 查询字典
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function dictQueryType(data, config) {
  return Http.get('/api/dict/query/${type}', data, config)
}
