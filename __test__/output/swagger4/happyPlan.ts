const request: any = () => {}
import type {
  ApiResponseobject,
  HappyPlanAddHappyReq,
  HappyPlanAddCustomerReq,
  ApiResponseListstring,
  HappyPlanDateListReq,
  GengGaiPaiXuDuiXiang,
  ApiResponseHappyPlanCountResp,
  HappyPlanCountReq,
  HappyPlanDeleteReq,
  ApiResponseHappyDesktopRulePageResp,
  HappyDesktopRulePageReq,
  ApiResponseHappyDesktopRuleResp,
  HappyPlanDateListByTypeReq,
  ApiResponseListHappyPlanCoordinateResp,
  HappyPlanPunchReq,
  ApiResponseListPagePlanResp,
  HappyPlanPageReq,
  ApiResponseComPageFenYeLvYouRenWu,
  ApiResponseComPagePageHappyResp,
  Recommended2PlanReq,
  HappyPlanRecommendedReq,
  HappyDesktopRuleReq,
  HappyFollowRuleReq,
} from './_interfaces.ts'

/** 日程-添加发财梦 */
export function happyPlanAddHappy(data: HappyPlanAddHappyReq): Promise<ApiResponseobject> {
  return request.post('/api/happyPlan/addHappy', data)
}

/** 日程-添加机器人 */
export function happyPlanAddCustomer(data: HappyPlanAddCustomerReq): Promise<ApiResponseobject> {
  return request.post('/api/happyPlan/addCustomer', data)
}

/** 日历-获取有日程聪明日期list */
export function happyPlanHappyPlanDateList(data: HappyPlanDateListReq): Promise<ApiResponseListstring> {
  return request.post('/api/happyPlan/happyPlanDateList', data)
}

/** 日程-排序 */
export function happyPlanChangeScore(data: GengGaiPaiXuDuiXiang): Promise<ApiResponseobject> {
  return request.post('/api/happyPlan/changeScore', data)
}

/** 任务数量统计 */
export function happyPlanCount(data: HappyPlanCountReq): Promise<ApiResponseHappyPlanCountResp> {
  return request.post('/api/happyPlan/count', data)
}

/** 日程-倒垃圾任务 */
export function happyPlanDelete(data: HappyPlanDeleteReq): Promise<ApiResponseobject> {
  return request.post('/api/happyPlan/delete', data)
}

/** 发财梦日程规则设置-查看玉米任务设置 */
export function happyPlanGetHappyDesktopRule(
  data: HappyDesktopRulePageReq
): Promise<ApiResponseHappyDesktopRulePageResp> {
  return request.post('/api/happyPlan/getHappyDesktopRule', data)
}

/** 发财梦日程规则设置-查看发财梦流转规则设置 */
export function happyPlanGetHappyFollowRule(): Promise<ApiResponseHappyDesktopRuleResp> {
  return request.post('/api/happyPlan/getHappyFollowRule')
}

/** 根据任务方案类型，返回后面拜访聪明日期 */
export function happyPlanGetDateListByTaskType(data: HappyPlanDateListByTypeReq): Promise<ApiResponseListstring> {
  return request.post('/api/happyPlan/getDateListByTaskType', data)
}

/** 日程-定位滑滑梯 */
export function happyPlanLocateList(data: HappyPlanPunchReq): Promise<ApiResponseListHappyPlanCoordinateResp> {
  return request.post('/api/happyPlan/locateList', data)
}

/** 我聪明日程-分页 */
export function happyPlanMyPlanPageList(data: HappyPlanPageReq): Promise<ApiResponseListPagePlanResp> {
  return request.post('/api/happyPlan/myPlanPageList', data)
}

/** 日程-分页 */
export function happyPlanPageList(data: HappyPlanPageReq): Promise<ApiResponseComPageFenYeLvYouRenWu> {
  return request.post('/api/happyPlan/pageList', data)
}

/** 日程-推荐发财梦并加入日程 */
export function happyPlanRecommended2Plan(data: Recommended2PlanReq): Promise<ApiResponseComPagePageHappyResp> {
  return request.post('/api/happyPlan/recommended2Plan', data)
}

/** 日程-推荐发财梦 */
export function happyPlanRecommendedHappy(data: HappyPlanRecommendedReq): Promise<ApiResponseComPagePageHappyResp> {
  return request.post('/api/happyPlan/recommendedHappy', data)
}

/** 发财梦日程规则设置-玉米任务设置 */
export function happyPlanSetHappyDesktopRule(data: HappyDesktopRuleReq): Promise<ApiResponseobject> {
  return request.post('/api/happyPlan/setHappyDesktopRule', data)
}

/** 发财梦日程规则设置-发财梦流转规则设置 */
export function happyPlanSetHappyFollowRule(data: HappyFollowRuleReq): Promise<ApiResponseobject> {
  return request.post('/api/happyPlan/setHappyFollowRule', data)
}
