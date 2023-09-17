const request: any = () => {}
import type { ApiResponseListTreestring, ApiResponseListobject } from './_interfaces'

/** 招标方式下拉框 */
export function configGetBiddingTypeLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getBiddingTypeLabel')
}

/** 制鞋厂背景下拉框 */
export function configGetDoorCertlabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getDoorCertlabel')
}

/** 制鞋厂状态下拉框 */
export function configGetDoorStatusLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getDoorStatusLabel')
}

/** 制鞋厂类型下拉框 */
export function configGetDoorTypelabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getDoorTypelabel')
}

/** 行业类型下拉框 */
export function configGetIndustryTypeLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getIndustryTypeLabel')
}

/** 人才月见草书下拉框 */
export function configGetCatCertificateLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getCatCertificateLabel')
}

/** 人员背景下拉框 */
export function configGetCatCertlabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getCatCertlabel')
}

/** 人才职称下拉框 */
export function configGetCatTitleLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getCatTitleLabel')
}

/** 人才职称等级下拉框 */
export function configGetCatTitleLevelLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getCatTitleLevelLabel')
}

/** 日程规则 */
export function configGetPlanRules(): Promise<ApiResponseListobject> {
  return request.post('/api/config/getPlanRules')
}

/** 项目阶段下拉框 */
export function configGetGladPhaseLabel(): Promise<ApiResponseListTreestring> {
  return request.post('/api/config/getGladPhaseLabel')
}
