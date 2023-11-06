import { ApiResponseVoid, ApiResponseComPageJiQiRenGenJinJiLuXiangYing } from './_interfaces'
import Mock from 'better-mock'

/** 跟进 */
export const customerFollowFollow = () => Mock.mock(ApiResponseVoid())

/** 回访记录 */
export const customerFollowList = () => Mock.mock(ApiResponseComPageJiQiRenGenJinJiLuXiangYing())
