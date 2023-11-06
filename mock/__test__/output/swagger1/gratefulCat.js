import { ApiResponseDouJiangJiFangDongXinXiXiangQingBiao, ApiResponseboolean } from './_interfaces'
import Mock from 'better-mock'

/** 获取豆浆机房东信息详情 */
export const gratefulCatAcquireInfo = () => Mock.mock(ApiResponseDouJiangJiFangDongXinXiXiangQingBiao())

/** 修改密码 */
export const gratefulCatUpdateAccPassword = () => Mock.mock(ApiResponseboolean())

/** 修改房东豆浆机信息 */
export const gratefulCatUpdateInfo = () => Mock.mock(ApiResponseboolean())
