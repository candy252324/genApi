import { ApiResponseboolean, ApiResponseQueryJudgeClaimResp, ApiResponseListQueryCatPageHomeResp } from './_interfaces'
import Mock from 'mockjs'

/** 认领豆浆机信息 */
export const pageHomeClaimClaimId = () => ApiResponseboolean()

/** 排除豆浆机信息 */
export const pageHomeExcludeClaimId = () => ApiResponseboolean()

/** 出行认领操作结果 */
export const pageHomeJudge = () => ApiResponseQueryJudgeClaimResp()

/** 出行放行结果 */
export const pageHomeQuery = () => ApiResponseListQueryCatPageHomeResp()
