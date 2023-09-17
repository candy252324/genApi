const request: any = () => {}
import type {
  ApiResponseobject,
  QingKongXiaoXiJiLu,
  ChuangJianXiaoDaoXiaoXi,
  ApiResponseComPageContactResp,
  ContactReq,
  ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing,
  XiaoDaoXiaoXiQiuQian,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'

/** 清空小道消息 */
export function apihiallClearHiall(data: QingKongXiaoXiJiLu): Promise<ApiResponseobject> {
  return request.post('/api/hiall/clearHiall', data)
}

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export function apihiallCreate(data: ChuangJianXiaoDaoXiaoXi): Promise<ApiResponseobject> {
  return request.post('/api/hiall/create', data)
}

/** 常用联系人 */
export function apihiallOftenContact(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/oftenContact', data)
}

/** 小道消息秋千 */
export function apihiallPageList(data: XiaoDaoXiaoXiQiuQian): Promise<ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing> {
  return request.post('/api/hiall/pageList', data)
}

/** 最近联系人 */
export function apihiallRecentContact(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/recentContact', data)
}

/** 小道消息秋千 */
export function apihiallUnreadList(
  data: XiaoDaoXiaoXiQiuQian
): Promise<ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing> {
  return request.post('/api/hiall/unreadList', data)
}

/** 清空小道消息 */
export function hiallClearHiall(data: { channel?: string; req?: QingKongXiaoXiJiLu }): Promise<ApiResponseobject> {
  return request.post('/hiall/clearHiall', data)
}

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export function hiallCreate(data: {
  channel?: string
  req?: ChuangJianXiaoDaoXiaoXi
}): Promise<ApiResponseXiaoDaoXiaoXi> {
  return request.post('/hiall/create', data)
}

/** 常用联系人 */
export function hiallOftenContact(data: {
  channel?: string
  req?: ContactReq
}): Promise<ApiResponseComPageContactResp> {
  return request.post('/hiall/oftenContact', data)
}

/** 小道消息秋千 */
export function hiallPageList(data: {
  channel?: string
  req?: XiaoDaoXiaoXiQiuQian
}): Promise<ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing> {
  return request.post('/hiall/pageList', data)
}

/** 最近联系人 */
export function hiallRecentContact(data: {
  channel?: string
  req?: ContactReq
}): Promise<ApiResponseComPageContactResp> {
  return request.post('/hiall/recentContact', data)
}
