import {
  ApiResponseDesktopAllInfoResp,
  ApiResponseListWhiteNoteResp,
  ApiResponseListFangDongXinXi,
  ApiResponseComPageDoorMainInfoResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 旅游玉米信息 */
export const baseStationGetDesktopAllByKeyBorardAndGrateful = () => ApiResponseDesktopAllInfoResp()

/** 旅游当前大肚腩及子大肚腩信息 */
export const baseStationListWhiteByParent = () => ApiResponseListWhiteNoteResp()

/** 旅游房东秋千信息 */
export const baseStationListGratefulInfo = () => ApiResponseListFangDongXinXi()

/** 旅游所有制衣厂 */
export const baseStationQueryDoorAll = () => ApiResponseComPageDoorMainInfoResp()
