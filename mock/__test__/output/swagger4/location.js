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
import Mock from 'mockjs'

/** 打卡记录灌水 */
export const locationAdd = () => ApiResponselong()

/** 根据任务 Id 跟进记录滑滑梯 */
export const locationHappyFollowList = () => ApiResponseComPageHuaHuaTiQingQiu()

/** 获取行程记录 按天-城市滑滑梯 */
export const locationDayCityList = () => ApiResponseListDayCityResp()

/** 根据任务 Id 制鞋厂发财梦滑滑梯 */
export const locationDoorHappyList = () => ApiResponseComPagePageDoorHappyPoolResp()

/** 获取行程记录滑滑梯 */
export const locationLocationList = () => ApiResponseListLocationInfoResp()

/** 根据任务 Id 行程记录滑滑梯 */
export const locationLocationListByTask = () => ApiResponseComPageLocationDateInfoResp()

/** 获取行程记录分页 */
export const locationPageLocationList = () => ApiResponseComPageLocationInfoResp()

/** 根据任务 Id 人才发财梦滑滑梯 */
export const locationCatHappyList = () => ApiResponseComPagePageCatHappyPoolResp()

/** 根据任务 Id 项目发财梦滑滑梯 */
export const locationGladHappyList = () => ApiResponseComPagePageGladHappyPoolResp()
