const request: any = () => {}
import type {
  ApiResponselong,
  LocationAddReq,
  ApiResponseComPageHuaHuaTiQingQiu,
  FollowListReq,
  ApiResponseListDayCityResp,
  DayCityReq,
  ApiResponseComPagePageDoorHappyPoolResp,
  FenYeLvYouZhiXieChangFaCaiMengGongHai,
  ApiResponseListLocationInfoResp,
  ListLocationReq,
  ApiResponseComPageLocationDateInfoResp,
  PageLocationByTaskReq,
  ApiResponseComPageLocationInfoResp,
  PageLocationReq,
  ApiResponseComPagePageCatHappyPoolResp,
  FenYeLvYouRenCaiFaCaiMengGongHai,
  ApiResponseComPagePageGladHappyPoolResp,
  XiangMuFaCaiMengGongHaiLvYou,
} from './_interfaces.ts'

/** 打卡记录灌水 */
export function locationAdd(data: LocationAddReq): Promise<ApiResponselong> {
  return request.post('/api/location/add', data)
}

/** 根据任务 Id 跟进记录滑滑梯 */
export function locationHappyFollowList(data: FollowListReq): Promise<ApiResponseComPageHuaHuaTiQingQiu> {
  return request.post('/api/location/happyFollowList', data)
}

/** 获取行程记录 按天-城市滑滑梯 */
export function locationDayCityList(data: DayCityReq): Promise<ApiResponseListDayCityResp> {
  return request.post('/api/location/dayCityList', data)
}

/** 根据任务 Id 制鞋厂发财梦滑滑梯 */
export function locationDoorHappyList(
  data: FenYeLvYouZhiXieChangFaCaiMengGongHai
): Promise<ApiResponseComPagePageDoorHappyPoolResp> {
  return request.post('/api/location/doorHappyList', data)
}

/** 获取行程记录滑滑梯 */
export function locationLocationList(data: ListLocationReq): Promise<ApiResponseListLocationInfoResp> {
  return request.post('/api/location/locationList', data)
}

/** 根据任务 Id 行程记录滑滑梯 */
export function locationLocationListByTask(
  data: PageLocationByTaskReq
): Promise<ApiResponseComPageLocationDateInfoResp> {
  return request.post('/api/location/locationListByTask', data)
}

/** 获取行程记录分页 */
export function locationPageLocationList(data: PageLocationReq): Promise<ApiResponseComPageLocationInfoResp> {
  return request.post('/api/location/pageLocationList', data)
}

/** 根据任务 Id 人才发财梦滑滑梯 */
export function locationCatHappyList(
  data: FenYeLvYouRenCaiFaCaiMengGongHai
): Promise<ApiResponseComPagePageCatHappyPoolResp> {
  return request.post('/api/location/catHappyList', data)
}

/** 根据任务 Id 项目发财梦滑滑梯 */
export function locationGladHappyList(
  data: XiangMuFaCaiMengGongHaiLvYou
): Promise<ApiResponseComPagePageGladHappyPoolResp> {
  return request.post('/api/location/gladHappyList', data)
}
