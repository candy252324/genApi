import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComPagePageEnterpriseBusinessPoolResp,
  ApiResponseComPagePagePersonBusinessPoolResp,
  ApiResponseComPagePageProjectBusinessPoolResp,
} from './_interfaces'

/** 企业商机列表 */
export function apiBusinessRecommendPageEnterpriseBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPagePageEnterpriseBusinessPoolResp> {
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
): AxiosPromise<ApiResponseComPagePagePersonBusinessPoolResp> {
  return Http.post('/api/businessRecommend/pagePersonBusiness', data, config)
}

/** 项目商机列表 */
export function apiBusinessRecommendPageProjectBusiness(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPagePageProjectBusinessPoolResp> {
  return Http.post('/api/businessRecommend/pageProjectBusiness', data, config)
}
