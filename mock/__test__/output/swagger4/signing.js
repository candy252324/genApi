import {
  ApiResponseComPageHongLingJinJiLuFenYeresponse,
  ApiResponseVoid,
  ApiResponseHongLingJinJieGuoresponse,
} from './_interfaces'
import Mock from 'better-mock'

/** 红领巾记录 */
export const signingPageList = () => ApiResponseComPageHongLingJinJiLuFenYeresponse()

/** 解除关联 */
export const signingRemove = () => ApiResponseVoid()

/** 灌水红领巾 */
export const signingSave = () => ApiResponseHongLingJinJieGuoresponse()
