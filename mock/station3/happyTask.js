import Mock from 'better-mock'
import {
  ApiResponseboolean,
  ApiResponselong,
  ApiResponseTaskInfoResp,
  ApiResponseComPageTaskPageListResp,
  ApiResponseListTaskProgressDetailResp,
  ApiResponseListTaskProgressCatResp,
} from './_interfaces'

/** 修改发财梦任务状态 */
export const happyTaskChangeStatus = () => Mock.mock(ApiResponseboolean())

/** 发财梦任务创建 */
export const happyTaskCreate = () => Mock.mock(ApiResponselong())

/** 发财梦任务详情 */
export const happyTaskInfo = () => Mock.mock(ApiResponseTaskInfoResp())

/** 发财梦任务针线 */
export const happyTaskModify = () => Mock.mock(ApiResponseboolean())

/** 发财梦任务滑滑梯 */
export const happyTaskPageList = () => Mock.mock(ApiResponseComPageTaskPageListResp())

/** 发财梦任务玉米进度明细滑滑梯 */
export const happyTaskCatMessageList = () => Mock.mock(ApiResponseListTaskProgressDetailResp())

/** 发财梦任务进度滑滑梯 */
export const happyTaskProgressList = () => Mock.mock(ApiResponseListTaskProgressCatResp())
