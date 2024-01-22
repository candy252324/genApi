import Mock from 'better-mock'
import { ApiResponseComPageXiLanHuaLieBiao, ApiResponseListListlong } from './_interfaces'

/** 西蓝花列表 */
export const emocenterApiEnterpriseList = () => Mock.mock(ApiResponseComPageXiLanHuaLieBiao())

/** 查询合作类型根据武术规则ID */
export const emocenterApiFeeRuleGetCooperateTypeIdsByFeeId = () => Mock.mock(ApiResponseListListlong())
