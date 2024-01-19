import Mock from 'better-mock'
import {
  ApiResponseComPageTreelong,
  ApiResponseComPageDesktopListResp,
  ApiResponseboolean,
  ApiResponseHuaHuaTiQingQiu,
  ApiResponseComPageHuaHuaTiQingQiu,
} from './_interfaces'

/** 花生米玉米树 */
export const happyFollowWhiteDesktopTree = () => Mock.mock(ApiResponseComPageTreelong())

/** 玉米滑滑梯 */
export const happyFollowDesktopList = () => Mock.mock(ApiResponseComPageDesktopListResp())

/** 跟进 */
export const happyFollowFollow = () => Mock.mock(ApiResponseboolean())

/** 重新跟进 */
export const happyFollowFollowAgain = () => Mock.mock(ApiResponseboolean())

/** 不再跟进 */
export const happyFollowGiveUp = () => Mock.mock(ApiResponseboolean())

/** 跟进记录-详情 */
export const happyFollowInfo = () => Mock.mock(ApiResponseHuaHuaTiQingQiu())

/** 跟进记录 */
export const happyFollowList = () => Mock.mock(ApiResponseComPageHuaHuaTiQingQiu())

/** 转让 */
export const happyFollowTransfer = () => Mock.mock(ApiResponseboolean())
