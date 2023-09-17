const request: any = () => {}
import type { ApiResponseComPagePunchPageResp, PunchPageReq, ApiResponseboolean, PunchReq } from './_interfaces'

/** 签到打卡滑滑梯 */
export function happyPunchPageList(data: PunchPageReq): Promise<ApiResponseComPagePunchPageResp> {
  return request.post('/api/happyPunch/pageList', data)
}

/** 签到打卡 */
export function happyPunchPunch(data: PunchReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyPunch/punch', data)
}

/** 签到打卡 */
export function happyPunchV2Punch(data: PunchReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyPunch/v2/punch', data)
}
