import Mock from 'better-mock'
import { ApiResponseVoid, ApiResponseComPageJiQiRenGenJinJiLuXiangYing } from './_interfaces'

/** 跟进 */
export const customerFollowFollow = () => Mock.mock(ApiResponseVoid())

/** 回访记录 */
export const customerFollowList = () => Mock.mock(ApiResponseComPageJiQiRenGenJinJiLuXiangYing())
