import {
  ApiResponseobject,
  ApiResponseListstring,
  ApiResponseHappyPlanCountResp,
  ApiResponseHappyDesktopRulePageResp,
  ApiResponseHappyDesktopRuleResp,
  ApiResponseListHappyPlanCoordinateResp,
  ApiResponseListPagePlanResp,
  ApiResponseComPageFenYeLvYouRenWu,
  ApiResponseComPagePageHappyResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 日程-添加发财梦 */
export const happyPlanAddHappy = () => ApiResponseobject()

/** 日程-添加机器人 */
export const happyPlanAddCustomer = () => ApiResponseobject()

/** 日历-获取有日程聪明日期list */
export const happyPlanHappyPlanDateList = () => ApiResponseListstring()

/** 日程-排序 */
export const happyPlanChangeScore = () => ApiResponseobject()

/** 任务数量统计 */
export const happyPlanCount = () => ApiResponseHappyPlanCountResp()

/** 日程-倒垃圾任务 */
export const happyPlanDelete = () => ApiResponseobject()

/** 发财梦日程规则设置-查看玉米任务设置 */
export const happyPlanGetHappyDesktopRule = () => ApiResponseHappyDesktopRulePageResp()

/** 发财梦日程规则设置-查看发财梦流转规则设置 */
export const happyPlanGetHappyFollowRule = () => ApiResponseHappyDesktopRuleResp()

/** 根据任务方案类型，返回后面拜访聪明日期 */
export const happyPlanGetDateListByTaskType = () => ApiResponseListstring()

/** 日程-定位滑滑梯 */
export const happyPlanLocateList = () => ApiResponseListHappyPlanCoordinateResp()

/** 我聪明日程-分页 */
export const happyPlanMyPlanPageList = () => ApiResponseListPagePlanResp()

/** 日程-分页 */
export const happyPlanPageList = () => ApiResponseComPageFenYeLvYouRenWu()

/** 日程-推荐发财梦并加入日程 */
export const happyPlanRecommended2Plan = () => ApiResponseComPagePageHappyResp()

/** 日程-推荐发财梦 */
export const happyPlanRecommendedHappy = () => ApiResponseComPagePageHappyResp()

/** 发财梦日程规则设置-玉米任务设置 */
export const happyPlanSetHappyDesktopRule = () => ApiResponseobject()

/** 发财梦日程规则设置-发财梦流转规则设置 */
export const happyPlanSetHappyFollowRule = () => ApiResponseobject()
