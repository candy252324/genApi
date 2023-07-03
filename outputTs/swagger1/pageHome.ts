import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  ApiResponseQueryJudgeClaimResp,
  ApiResponseListQueryPersonPageHomeResp,
} from './_interfaces'

/** 认领个人信息 */
export function apiPageHomeClaimClaimId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/pageHome/claim/${claimId}', data, config)
}

/** 排除个人信息 */
export function apiPageHomeExcludeClaimId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/pageHome/exclude/${claimId}', data, config)
}

/** 查询认领操作结果 */
export function apiPageHomeJudge(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQueryJudgeClaimResp> {
  return Http.get('/api/pageHome/judge', config)
}

/** 查询认证结果 */
export function apiPageHomeQuery(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListQueryPersonPageHomeResp> {
  return Http.get('/api/pageHome/query', config)
}
