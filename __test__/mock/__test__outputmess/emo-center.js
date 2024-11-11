import Mock from 'better-mock'
import {
  ApiResponseComPageXiLanHuaLieBiao,
  ApiResponseListListlong,
  ApiResponseListJobCategoryConfigResp,
  ApiResponseVoid,
  EarthDeptMetaRespeFanHuiMoXing,
  ApiResponseWhiteDetailResp,
  ApiResponseboolean,
} from './_interfaces'

/** 这个接口注释、入参注释、出参注释 有特殊字符 ， 等，导致报错 */
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
export const emocenterEffectiveDept = () => Mock.mock({ 'theArray|1-10': [EarthDeptMetaRespeFanHuiMoXing()] }).theArray

/** 参数在路径上 */
export const emocenterWhiteGetWhiteId = () => Mock.mock(ApiResponseWhiteDetailResp())

/** 这是一个 put 请求 */
export const emocenterAuthExecute = () => Mock.mock(ApiResponseVoid())

/** 这是一个 delete 请求 */
export const emocenterApiV1TastyWorkhistoryId = () => Mock.mock(ApiResponseboolean())
