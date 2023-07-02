import { Http } from '../../httpJs/index'

/**
 * 企业商机列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessRecommendPageEnterpriseBusiness(data, config) {
  return Http.post(
    '/api/businessRecommend/pageEnterpriseBusiness',
    data,
    config
  )
}

/**
 * 人才商机列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessRecommendPagePersonBusiness(data, config) {
  return Http.post('/api/businessRecommend/pagePersonBusiness', data, config)
}

/**
 * 项目商机列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function businessRecommendPageProjectBusiness(data, config) {
  return Http.post('/api/businessRecommend/pageProjectBusiness', data, config)
}
