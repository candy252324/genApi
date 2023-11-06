import {
  ApiResponseDesktopAllInfoResp,
  ApiResponseListWhiteNoteResp,
  ApiResponseListFangDongXinXi,
  ApiResponseComPageDoorMainInfoResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 旅游玉米信息 */
export const baseStationGetDesktopAllByKeyBorardAndGrateful = () => Mock.mock(ApiResponseDesktopAllInfoResp())

/** 旅游当前大肚腩及子大肚腩信息 */
export const baseStationListWhiteByParent = () => Mock.mock(ApiResponseListWhiteNoteResp())

/** 旅游房东秋千信息 */
export const baseStationListGratefulInfo = () => Mock.mock(ApiResponseListFangDongXinXi())

/** 旅游所有制衣厂 */
export const baseStationQueryDoorAll = () => Mock.mock(ApiResponseComPageDoorMainInfoResp())
