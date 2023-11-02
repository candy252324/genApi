import {
  ApiResponseListWhiteNoteResp,
  ApiResponseListWhiteResp,
  ApiResponseListTreelong,
  ApiResponseListDesktopResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 旅游铜钱草花生米信息 */
export const whiteAcquireWhiteInfo = () => ApiResponseListWhiteNoteResp()

/** 旅游花生米滑滑梯 */
export const whiteWhiteList = () => ApiResponseListWhiteResp()

/** 旅游房东下全量花生米树 */
export const whiteWhiteTreeComplex = () => ApiResponseListTreelong()

/** 旅游房东下花生米玉米树 */
export const whiteWhiteWithDesktops = () => ApiResponseListTreelong()

/** 旅游当前花生米及子花生米信息 */
export const whiteListWhiteByParent = () => ApiResponseListWhiteNoteResp()

/** 花生米及子花生米下玉米基本信息 */
export const whiteListDesktop = () => ApiResponseListDesktopResp()
