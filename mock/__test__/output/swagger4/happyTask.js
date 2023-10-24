import {
  ApiResponseboolean,
  ApiResponselong,
  ApiResponseTaskInfoResp,
  ApiResponseComPageTaskPageListResp,
  ApiResponseListTaskProgressDetailResp,
  ApiResponseListTaskProgressCatResp,
} from './_interfaces'
import Mock from 'mockjs'

/** 修改发财梦任务状态 */
export const happyTaskChangeStatus = () => ApiResponseboolean()

/** 发财梦任务创建 */
export const happyTaskCreate = () => ApiResponselong()

/** 发财梦任务详情 */
export const happyTaskInfo = () => ApiResponseTaskInfoResp()

/** 发财梦任务针线 */
export const happyTaskModify = () => ApiResponseboolean()

/** 发财梦任务滑滑梯 */
export const happyTaskPageList = () => ApiResponseComPageTaskPageListResp()

/** 发财梦任务玉米进度明细滑滑梯 */
export const happyTaskCatMessageList = () => ApiResponseListTaskProgressDetailResp()

/** 发财梦任务进度滑滑梯 */
export const happyTaskProgressList = () => ApiResponseListTaskProgressCatResp()
