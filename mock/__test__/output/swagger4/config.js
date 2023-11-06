import { ApiResponseListTreestring, ApiResponseListobject } from './_interfaces'
import Mock from 'better-mock'

/** 招标方式下拉框 */
export const configGetBiddingTypeLabel = () => Mock.mock(ApiResponseListTreestring())

/** 制鞋厂背景下拉框 */
export const configGetDoorCertlabel = () => Mock.mock(ApiResponseListTreestring())

/** 制鞋厂状态下拉框 */
export const configGetDoorStatusLabel = () => Mock.mock(ApiResponseListTreestring())

/** 制鞋厂类型下拉框 */
export const configGetDoorTypelabel = () => Mock.mock(ApiResponseListTreestring())

/** 行业类型下拉框 */
export const configGetIndustryTypeLabel = () => Mock.mock(ApiResponseListTreestring())

/** 人才月见草书下拉框 */
export const configGetCatCertificateLabel = () => Mock.mock(ApiResponseListTreestring())

/** 人员背景下拉框 */
export const configGetCatCertlabel = () => Mock.mock(ApiResponseListTreestring())

/** 人才职称下拉框 */
export const configGetCatTitleLabel = () => Mock.mock(ApiResponseListTreestring())

/** 人才职称等级下拉框 */
export const configGetCatTitleLevelLabel = () => Mock.mock(ApiResponseListTreestring())

/** 日程规则 */
export const configGetPlanRules = () => Mock.mock(ApiResponseListobject())

/** 项目阶段下拉框 */
export const configGetGladPhaseLabel = () => Mock.mock(ApiResponseListTreestring())
