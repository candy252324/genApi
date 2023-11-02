import {
  ApiResponseComPageKeyBorardBlackResp,
  ApiResponseobject,
  ApiResponseWaterFallPageKeyBorardBlackResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 黑名单甬道 */
export const keyBorardBlackPageList = () => ApiResponseComPageKeyBorardBlackResp()

/** 取消拉黑 */
export const keyBorardBlackRemove = () => ApiResponseobject()

/** 拉黑 */
export const keyBorardBlackSave = () => ApiResponseobject()

/** 滚动甬道 */
export const keyBorardBlackScollList = () => ApiResponseWaterFallPageKeyBorardBlackResp()
