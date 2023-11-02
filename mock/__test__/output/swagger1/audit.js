import { ApiResponseVoid, ApiResponseBiXieDao, ApiResponseComPageBiXieDaoYongDao } from './_interfaces'
import Mock from 'better-mock'

/** 执行审核 */
export const auditAuthExecute = () => ApiResponseVoid()

/** 辟邪刀详情甬道 */
export const auditAuthInfoList = () => ApiResponseBiXieDao()

/** 辟邪刀甬道 */
export const auditAuthList = () => ApiResponseComPageBiXieDaoYongDao()
