import { Http } from '../../httpJs/index'

/**
 * 分页查询
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function operateLogPageList(data, config) {
  return Http.post('/api/operateLog/pageList', data, config)
}
