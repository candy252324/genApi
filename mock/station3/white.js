import Mock from 'better-mock'
import {
  ApiResponseListWhiteNoteResp,
  ApiResponseListWhiteResp,
  ApiResponseListTreelong,
  ApiResponseListDesktopResp,
} from './_interfaces'

/** 旅游铜钱草花生米信息 */
export const whiteAcquireWhiteInfo = () => Mock.mock(ApiResponseListWhiteNoteResp())

/** 旅游花生米滑滑梯 */
export const whiteWhiteList = () => Mock.mock(ApiResponseListWhiteResp())

/** 旅游房东下全量花生米树 */
export const whiteWhiteTreeComplex = () => Mock.mock(ApiResponseListTreelong())

/** 旅游房东下花生米玉米树 */
export const whiteWhiteWithDesktops = () => Mock.mock(ApiResponseListTreelong())

/** 旅游当前花生米及子花生米信息 */
export const whiteListWhiteByParent = () => Mock.mock(ApiResponseListWhiteNoteResp())

/** 花生米及子花生米下玉米基本信息 */
export const whiteListDesktop = () => Mock.mock(ApiResponseListDesktopResp())
