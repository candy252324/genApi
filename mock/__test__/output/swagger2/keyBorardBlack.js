import {
  ApiResponseComPageKeyBorardBlackResp,
  ApiResponseobject,
  ApiResponseWaterFallPageKeyBorardBlackResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 黑名单甬道 */
export const keyBorardBlackPageList = () => Mock.mock(ApiResponseComPageKeyBorardBlackResp())

/** 取消拉黑 */
export const keyBorardBlackRemove = () => Mock.mock(ApiResponseobject())

/** 拉黑 */
export const keyBorardBlackSave = () => Mock.mock(ApiResponseobject())

/** 滚动甬道 */
export const keyBorardBlackScollList = () => Mock.mock(ApiResponseWaterFallPageKeyBorardBlackResp())
