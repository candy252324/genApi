import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiBusinessRecommendPageEnterpriseBusiness,
  ResOfApiBusinessRecommendPagePersonBusiness,
  ResOfApiBusinessRecommendPageProjectBusiness,
} from './_interfaces'

/** 企业商机列表 */
export function apiBusinessRecommendPageEnterpriseBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessRecommendPageEnterpriseBusiness> {
  return Http.post(
    '/api/businessRecommend/pageEnterpriseBusiness',
    data,
    config
  )
}

/** 人才商机列表 */
export function apiBusinessRecommendPagePersonBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessRecommendPagePersonBusiness> {
  return Http.post('/api/businessRecommend/pagePersonBusiness', data, config)
}

/** 项目商机列表 */
export function apiBusinessRecommendPageProjectBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessRecommendPageProjectBusiness> {
  return Http.post('/api/businessRecommend/pageProjectBusiness', data, config)
}
