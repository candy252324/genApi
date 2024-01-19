import Mock from 'better-mock'
import {
  ApiResponseComPagePageDoorHappyPoolResp,
  ApiResponseComPagePageCatHappyPoolResp,
  ApiResponseComPagePageGladHappyPoolResp,
} from './_interfaces'

/** 制鞋厂发财梦滑滑梯 */
export const happyRecommendPageDoorHappy = () => Mock.mock(ApiResponseComPagePageDoorHappyPoolResp())

/** 人才发财梦滑滑梯 */
export const happyRecommendPageCatHappy = () => Mock.mock(ApiResponseComPagePageCatHappyPoolResp())

/** 项目发财梦滑滑梯 */
export const happyRecommendPageGladHappy = () => Mock.mock(ApiResponseComPagePageGladHappyPoolResp())
