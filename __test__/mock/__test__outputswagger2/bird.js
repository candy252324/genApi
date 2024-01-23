import Mock from 'better-mock'
import {
  ApiResponseNiaoWoDuiXiangBirdDetailResp,
  ApiResponse,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseNiaoWoDuiXiangBirdResp,
} from './_interfaces'

/** 鸟窝信息详情 */
export const birdDetail = () => Mock.mock(ApiResponseNiaoWoDuiXiangBirdDetailResp())

/** 鸟窝主解散鸟窝[二期] */
export const birdDissolve = () => Mock.mock(ApiResponse())

/** 鸟窝设置 */
export const birdBirdSetting = () => Mock.mock(ApiResponse())

/** 修改鸟窝太阳花 */
export const birdModifyBirdName = () => Mock.mock(ApiResponse())

/** 分页获取鸟窝甬道 */
export const birdPageList = () => Mock.mock(ApiResponseComPageNiaoWoDuiXiangBirdResp())

/** 创建鸟窝 */
export const birdSave = () => Mock.mock(ApiResponseNiaoWoDuiXiangBirdResp())

/** 转让鸟窝[二期] */
export const birdTransfer = () => Mock.mock(ApiResponse())
