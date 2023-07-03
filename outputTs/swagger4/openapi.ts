import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseProjectSignInfoResp } from './_interfaces'

/** 项目商机签约详情 */
export function openapiBusinessProjectSignInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseProjectSignInfoResp> {
  return Http.get('/openapi/business/project/signInfo', data, config)
}
