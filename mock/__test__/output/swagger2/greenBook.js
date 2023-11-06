import {
  ApiResponseListGreenBookGratefulInfoResp,
  ApiResponseComPageWaiBuShuiDaoXiangYing,
  ApiResponseComPageWaiBuZhiXieChangChuCan,
} from './_interfaces'
import Mock from 'better-mock'

/** 获取旅客甬道 */
export const greenBookListGratefulInfo = () => Mock.mock(ApiResponseListGreenBookGratefulInfoResp())

/** 外部制鞋厂下内部水稻甬道 */
export const greenBookOuterOuterDesktopList = () => Mock.mock(ApiResponseComPageWaiBuShuiDaoXiangYing())

/** 外部制鞋厂甬道 */
export const greenBookOuterOuterDoorList = () => Mock.mock(ApiResponseComPageWaiBuZhiXieChangChuCan())
