import Mock from 'better-mock'
import { ApiResponseComPagePunchPageResp, ApiResponseboolean } from './_interfaces'

/** 签到打卡滑滑梯 */
export const happyPunchPageList = () => Mock.mock(ApiResponseComPagePunchPageResp())

/** 签到打卡 */
export const happyPunchPunch = () => Mock.mock(ApiResponseboolean())

/** 签到打卡 */
export const happyPunchV2Punch = () => Mock.mock(ApiResponseboolean())
