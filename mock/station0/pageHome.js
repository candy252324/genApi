import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseQueryJudgeClaimResp, ApiResponseListQueryCatPageHomeResp } from './_interfaces'

/** 认领豆浆机信息 */
export const pageHomeClaimClaimId = () => Mock.mock(ApiResponseboolean())

/** 排除豆浆机信息 */
export const pageHomeExcludeClaimId = () => Mock.mock(ApiResponseboolean())

/** 出行认领操作结果 */
export const pageHomeJudge = () => Mock.mock(ApiResponseQueryJudgeClaimResp())

/** 出行放行结果 */
export const pageHomeQuery = () => Mock.mock(ApiResponseListQueryCatPageHomeResp())
