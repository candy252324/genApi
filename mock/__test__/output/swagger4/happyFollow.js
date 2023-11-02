import {
  ApiResponseComPageTreelong,
  ApiResponseComPageDesktopListResp,
  ApiResponseboolean,
  ApiResponseHuaHuaTiQingQiu,
  ApiResponseComPageHuaHuaTiQingQiu,
} from './_interfaces'
import Mock from 'better-mock'

/** 花生米玉米树 */
export const happyFollowWhiteDesktopTree = () => ApiResponseComPageTreelong()

/** 玉米滑滑梯 */
export const happyFollowDesktopList = () => ApiResponseComPageDesktopListResp()

/** 跟进 */
export const happyFollowFollow = () => ApiResponseboolean()

/** 重新跟进 */
export const happyFollowFollowAgain = () => ApiResponseboolean()

/** 不再跟进 */
export const happyFollowGiveUp = () => ApiResponseboolean()

/** 跟进记录-详情 */
export const happyFollowInfo = () => ApiResponseHuaHuaTiQingQiu()

/** 跟进记录 */
export const happyFollowList = () => ApiResponseComPageHuaHuaTiQingQiu()

/** 转让 */
export const happyFollowTransfer = () => ApiResponseboolean()
