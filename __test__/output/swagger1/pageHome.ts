const request: any = () => {}
import type {
  ApiResponseboolean,
  ApiResponseQueryJudgeClaimResp,
  ApiResponseListQueryCatPageHomeResp,
} from './_interfaces'

/** 认领豆浆机信息 */
export function pageHomeClaimClaimId(data: { claimId?: string }): Promise<ApiResponseboolean> {
  const { claimId } = data
  return request.get(`/api/pageHome/claim/${claimId}`)
}

/** 排除豆浆机信息 */
export function pageHomeExcludeClaimId(data: { claimId?: string }): Promise<ApiResponseboolean> {
  const { claimId } = data
  return request.get(`/api/pageHome/exclude/${claimId}`)
}

/** 出行认领操作结果 */
export function pageHomeJudge(): Promise<ApiResponseQueryJudgeClaimResp> {
  return request.get('/api/pageHome/judge')
}

/** 出行放行结果 */
export function pageHomeQuery(): Promise<ApiResponseListQueryCatPageHomeResp> {
  return request.get('/api/pageHome/query')
}
