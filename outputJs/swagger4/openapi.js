import { Http } from '../../httpJs/index'

/**
 * 项目商机签约详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function openapiBusinessProjectSignInfo(data, config) {
  return Http.get('/openapi/business/project/signInfo', data, config)
}
