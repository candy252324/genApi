import Mock from 'better-mock'
import {
  ApiResponseComPageXiLanHuaLieBiao,
  ApiResponseListListlong,
  ApiResponseListJobCategoryConfigResp,
  ApiResponseVoid,
} from './_interfaces'

/** 这个接口注释、入参注释、出参注释 都有换行符 ，导致报错 */
export const emocenterApiEnterpriseList = () => Mock.mock(ApiResponseComPageXiLanHuaLieBiao())

/** 这个接口处理后的 parsedData 里的type为空，导出出现形如 'data|1-20': [()] 的错误mock数据 */
export const emocenterApiFeeRuleGetCooperateTypeIdsByFeeId = () => Mock.mock(ApiResponseListListlong())

/** 这个接口出参树形结构，同样的children 结构导致 mock 函数死循环了 */
export const emocenterApiAdminJobCategoryByParentIds = () => Mock.mock(ApiResponseListJobCategoryConfigResp())

/** 这个接口的入参既有 in query,又有 in body */
export const emocenterApiSearchRecordDeleteByKeywords = () => Mock.mock(ApiResponseVoid())

/** 这个接口的入参既有 in path, 又有 in body */
export const emocenterApiEmpowerEnterpriseReUpEntReSetEnterpriseId = () => Mock.mock(ApiResponseVoid())

/** 返回数值是个数组而非对象 */
export const emocenterEffectiveDept = () => Mock.mock('')
