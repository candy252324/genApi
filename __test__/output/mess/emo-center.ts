const request: any = () => {}
import type {
  ApiResponseComPageXiLanHuaLieBiao,
  ApiResponseListListlong,
  ApiResponseListJobCategoryConfigResp,
} from './_interfaces.ts'

/** 这个接口注释、入参注释、出参注释 都有换行符 ，导致报错 */
export function emocenterApiEnterpriseList(data: {
  // 市
  city?: string
  // UN_COOPERATE("未合作"), IN_COOPERATE("合作中"), EXPIRE_COOPERATE("合作到期"), TERMINATE_COOPERATING("终止合作中"), TERMINATE_LOG_OFF("终止待注销"), FORWARD_LOG_OFF("终止已注销"), EXPIRE_LOG_OFF("到期已注销"),
  cooperateStatus?: string
  // 西蓝花类型 合作种类一级分类
  cooperateTypeFirst?: string
  // 西蓝花性质 合作种类二级分类
  cooperateTypeSecond?: string
  // 西蓝花性质 合作种类三级分类
  cooperateTypeThird?: string
  // 西蓝花id
  id?: string
  // 字母
  letter?: string
}): Promise<ApiResponseComPageXiLanHuaLieBiao> {
  return request.get('/emo-center/api/enterprise/list', data)
}

/** 这个接口处理后的 parsedData 里的type为空，导出出现形如 'data|1-20': [()] 的错误mock数据 */
export function emocenterApiFeeRuleGetCooperateTypeIdsByFeeId(data: {
  feeId?: string
}): Promise<ApiResponseListListlong> {
  return request.get('/emo-center/api/feeRule/getCooperateTypeIdsByFeeId', data)
}

/** 这个接口出参树形结构，同样的children 结构导致 mock 函数死循环了 */
export function emocenterApiAdminJobCategoryByParentIds(data: {
  isEnable?: number
  parentIds?: string[]
}): Promise<ApiResponseListJobCategoryConfigResp> {
  return request.get('/emo-center/api/admin/jobCategory/byParentIds', data)
}
