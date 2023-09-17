const request: any = () => {}
import type {
  ApiResponseComPageTreelong,
  YuMiHuaHuaTiQingQiu,
  ApiResponseComPageDesktopListResp,
  ApiResponseboolean,
  HappyFollowReq,
  FollowAgainReq,
  BuZaiGenJin,
  ApiResponseHuaHuaTiQingQiu,
  ApiResponseComPageHuaHuaTiQingQiu,
  FaCaiMengGenJinJiLuQingQiu,
  ZhuanRangQingQiu,
} from './_interfaces'

/** 花生米玉米树 */
export function happyFollowWhiteDesktopTree(data: YuMiHuaHuaTiQingQiu): Promise<ApiResponseComPageTreelong> {
  return request.get('/api/happyFollow/whiteDesktopTree', data)
}

/** 玉米滑滑梯 */
export function happyFollowDesktopList(data: YuMiHuaHuaTiQingQiu): Promise<ApiResponseComPageDesktopListResp> {
  return request.post('/api/happyFollow/desktopList', data)
}

/** 跟进 */
export function happyFollowFollow(data: HappyFollowReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyFollow/follow', data)
}

/** 重新跟进 */
export function happyFollowFollowAgain(data: FollowAgainReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyFollow/followAgain', data)
}

/** 不再跟进 */
export function happyFollowGiveUp(data: BuZaiGenJin): Promise<ApiResponseboolean> {
  return request.post('/api/happyFollow/giveUp', data)
}

/** 跟进记录-详情 */
export function happyFollowInfo(data: { id?: string }): Promise<ApiResponseHuaHuaTiQingQiu> {
  return request.get('/api/happyFollow/info', data)
}

/** 跟进记录 */
export function happyFollowList(data: FaCaiMengGenJinJiLuQingQiu): Promise<ApiResponseComPageHuaHuaTiQingQiu> {
  return request.post('/api/happyFollow/list', data)
}

/** 转让 */
export function happyFollowTransfer(data: ZhuanRangQingQiu): Promise<ApiResponseboolean> {
  return request.post('/api/happyFollow/transfer', data)
}
