import Mock from 'better-mock'
import {
  ApiResponselong,
  ApiResponseComPageHuaHuaTiQingQiu,
  ApiResponseListDayCityResp,
  ApiResponseComPagePageDoorHappyPoolResp,
  ApiResponseListLocationInfoResp,
  ApiResponseComPageLocationDateInfoResp,
  ApiResponseComPageLocationInfoResp,
  ApiResponseComPagePageCatHappyPoolResp,
  ApiResponseComPagePageGladHappyPoolResp,
} from './_interfaces'

/** 打卡记录灌水 */
export const locationAdd = () => Mock.mock(ApiResponselong())

/** 根据任务 Id 跟进记录滑滑梯 */
export const locationHappyFollowList = () => Mock.mock(ApiResponseComPageHuaHuaTiQingQiu())

/** 获取行程记录 按天-城市滑滑梯 */
export const locationDayCityList = () => Mock.mock(ApiResponseListDayCityResp())

/** 根据任务 Id 制鞋厂发财梦滑滑梯 */
export const locationDoorHappyList = () => Mock.mock(ApiResponseComPagePageDoorHappyPoolResp())

/** 获取行程记录滑滑梯 */
export const locationLocationList = () => Mock.mock(ApiResponseListLocationInfoResp())

/** 根据任务 Id 行程记录滑滑梯 */
export const locationLocationListByTask = () => Mock.mock(ApiResponseComPageLocationDateInfoResp())

/** 获取行程记录分页 */
export const locationPageLocationList = () => Mock.mock(ApiResponseComPageLocationInfoResp())

/** 根据任务 Id 人才发财梦滑滑梯 */
export const locationCatHappyList = () => Mock.mock(ApiResponseComPagePageCatHappyPoolResp())

/** 根据任务 Id 项目发财梦滑滑梯 */
export const locationGladHappyList = () => Mock.mock(ApiResponseComPagePageGladHappyPoolResp())
