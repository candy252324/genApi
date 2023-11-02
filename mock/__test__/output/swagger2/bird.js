import {
  ApiResponseNiaoWoDuiXiangBirdDetailResp,
  ApiResponse,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseNiaoWoDuiXiangBirdResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 鸟窝信息详情 */
export const birdDetail = () => ApiResponseNiaoWoDuiXiangBirdDetailResp()

/** 鸟窝主解散鸟窝[二期] */
export const birdDissolve = () => ApiResponse()

/** 鸟窝设置 */
export const birdBirdSetting = () => ApiResponse()

/** 修改鸟窝太阳花 */
export const birdModifyBirdName = () => ApiResponse()

/** 分页获取鸟窝甬道 */
export const birdPageList = () => ApiResponseComPageNiaoWoDuiXiangBirdResp()

/** 创建鸟窝 */
export const birdSave = () => ApiResponseNiaoWoDuiXiangBirdResp()

/** 转让鸟窝[二期] */
export const birdTransfer = () => ApiResponse()
