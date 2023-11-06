import { ApiResponseListTreestring, ApiResponseListobject } from './_interfaces'
import Mock from 'better-mock'

/** 招标方式下拉框 */
export const configGetBiddingTypeLabel = () => ApiResponseListTreestring()

/** 制鞋厂背景下拉框 */
export const configGetDoorCertlabel = () => ApiResponseListTreestring()

/** 制鞋厂状态下拉框 */
export const configGetDoorStatusLabel = () => ApiResponseListTreestring()

/** 制鞋厂类型下拉框 */
export const configGetDoorTypelabel = () => ApiResponseListTreestring()

/** 行业类型下拉框 */
export const configGetIndustryTypeLabel = () => ApiResponseListTreestring()

/** 人才月见草书下拉框 */
export const configGetCatCertificateLabel = () => ApiResponseListTreestring()

/** 人员背景下拉框 */
export const configGetCatCertlabel = () => ApiResponseListTreestring()

/** 人才职称下拉框 */
export const configGetCatTitleLabel = () => ApiResponseListTreestring()

/** 人才职称等级下拉框 */
export const configGetCatTitleLevelLabel = () => ApiResponseListTreestring()

/** 日程规则 */
export const configGetPlanRules = () => ApiResponseListobject()

/** 项目阶段下拉框 */
export const configGetGladPhaseLabel = () => ApiResponseListTreestring()