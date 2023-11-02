import {
  ApiResponseboolean,
  ApiResponseComPageGuanLianShenHeXinXi,
  ApiResponseShenHeTongJiHuanCunSanShiMiao,
} from './_interfaces'
import Mock from 'better-mock'

/** 审核-执行审核 */
export const v1AuditRelation = () => ApiResponseboolean()

/** 关联审核甬道 */
export const v1AuditRelationPage = () => ApiResponseComPageGuanLianShenHeXinXi()

/** 关联审核-统计 */
export const v1AuditRelationTotal = () => ApiResponseShenHeTongJiHuanCunSanShiMiao()
