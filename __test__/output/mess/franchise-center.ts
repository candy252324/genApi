const request: any = () => {}
import type { ApiResponseListListlong } from './_interfaces.ts'

/** 查询合作类型根据结算规则ID */
export function franchisecenterApiFeeRuleGetCooperateTypeIdsByFeeId(data: {
  feeId?: string
}): Promise<ApiResponseListListlong> {
  return request.get('/franchise-center/api/feeRule/getCooperateTypeIdsByFeeId', data)
}
