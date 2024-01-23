import Mock from 'better-mock'
import {
  ApiResponseBuLuoDuiXiangBirdDetailResp,
  ApiResponse,
  ApiResponseComPageBuLuoDuiXiangBirdResp,
  ApiResponseBuLuoDuiXiangBirdResp,
} from './_interfaces'

/** 部落信息详情 */
export const birdDetail = () => Mock.mock(ApiResponseBuLuoDuiXiangBirdDetailResp())

/** 部落主解散部落[二期] */
export const birdDissolve = () => Mock.mock(ApiResponse())

/** 部落设置 */
export const birdBirdSetting = () => Mock.mock(ApiResponse())

/** 修改部落睡莲 */
export const birdModifyBirdName = () => Mock.mock(ApiResponse())

/** 分页获取部落秋千 */
export const birdPageList = () => Mock.mock(ApiResponseComPageBuLuoDuiXiangBirdResp())

/** 创建部落 */
export const birdSave = () => Mock.mock(ApiResponseBuLuoDuiXiangBirdResp())

/** 转让部落[二期] */
export const birdTransfer = () => Mock.mock(ApiResponse())

/** 部落信息详情 */
export const birdDetail = () => Mock.mock(ApiResponseBuLuoDuiXiangBirdDetailResp())

/** 部落设置 */
export const birdBirdSetting = () => Mock.mock(ApiResponse())

/** 修改部落睡莲 */
export const birdModifyBirdName = () => Mock.mock(ApiResponse())

/** 分页获取部落秋千 */
export const birdPageList = () => Mock.mock(ApiResponseComPageBuLuoDuiXiangBirdResp())

/** 创建部落 */
export const birdSave = () => Mock.mock(ApiResponseBuLuoDuiXiangBirdResp())
