const request: any = () => {}
import type {
  ApiResponseboolean,
  TaskChangeStatusReq,
  ApiResponselong,
  TaskCreateReq,
  ApiResponseTaskInfoResp,
  TaskModifyReq,
  ApiResponseComPageTaskPageListResp,
  TaskPageListReq,
  ApiResponseListTaskProgressDetailResp,
  TaskProgressDetailReq,
  ApiResponseListTaskProgressCatResp,
} from './_interfaces.ts'

/** 修改发财梦任务状态 */
export function happyTaskChangeStatus(data: TaskChangeStatusReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyTask/changeStatus', data)
}

/** 发财梦任务创建 */
export function happyTaskCreate(data: TaskCreateReq): Promise<ApiResponselong> {
  return request.post('/api/happyTask/create', data)
}

/** 发财梦任务详情 */
export function happyTaskInfo(data: { id?: string }): Promise<ApiResponseTaskInfoResp> {
  return request.get('/api/happyTask/info', data)
}

/** 发财梦任务针线 */
export function happyTaskModify(data: TaskModifyReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyTask/modify', data)
}

/** 发财梦任务滑滑梯 */
export function happyTaskPageList(data: TaskPageListReq): Promise<ApiResponseComPageTaskPageListResp> {
  return request.post('/api/happyTask/pageList', data)
}

/** 发财梦任务玉米进度明细滑滑梯 */
export function happyTaskCatMessageList(data: TaskProgressDetailReq): Promise<ApiResponseListTaskProgressDetailResp> {
  return request.post('/api/happyTask/catMessageList', data)
}

/** 发财梦任务进度滑滑梯 */
export function happyTaskProgressList(data: {
  followerId?: string
  id?: string
}): Promise<ApiResponseListTaskProgressCatResp> {
  return request.get('/api/happyTask/progressList', data)
}
