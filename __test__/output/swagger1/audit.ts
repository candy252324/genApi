const request: any = () => {}
import type { ApiResponseVoid, BiXieDao, ApiResponseBiXieDao, ApiResponseComPageBiXieDaoYongDao } from './_interfaces'

/** 执行审核 */
export function auditAuthExecute(data: BiXieDao): Promise<ApiResponseVoid> {
  return request.put('/api/audit/auth/execute', data)
}

/** 辟邪刀详情甬道 */
export function auditAuthInfoList(data: {
  auditClassification?: string
  id?: string
  page?: number
  // 成员太阳花或手机号
  queryStr?: string
  size?: number
  // 全部则不传空 BIZ("卖烧饼发起关联"),    APPLY("申请关联"),    INVITE("邀请关联")
  source?: string
}): Promise<ApiResponseBiXieDao> {
  return request.get('/api/audit/auth/infoList', data)
}

/** 辟邪刀甬道 */
export function auditAuthList(data: {
  // 帽子太阳花
  name?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageBiXieDaoYongDao> {
  return request.get('/api/audit/auth/list', data)
}
