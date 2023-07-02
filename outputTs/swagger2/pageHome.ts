import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiPageHomeClaimClaimId,
  ResOfApiPageHomeExcludeClaimId,
  ResOfApiPageHomeJudge,
  ResOfApiPageHomeQuery,
} from './_interfaces'

/** 认领个人信息 */
export function apiPageHomeClaimClaimId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPageHomeClaimClaimId> {
  return Http.get('/api/pageHome/claim/${claimId}', data, config)
}

/** 排除个人信息 */
export function apiPageHomeExcludeClaimId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPageHomeExcludeClaimId> {
  return Http.get('/api/pageHome/exclude/${claimId}', data, config)
}

/** 查询认领操作结果 */
export function apiPageHomeJudge(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPageHomeJudge> {
  return Http.get('/api/pageHome/judge', config)
}

/** 查询认证结果 */
export function apiPageHomeQuery(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPageHomeQuery> {
  return Http.get('/api/pageHome/query', config)
}
