const request: any = () => {}
import type {
  ApiResponseobject,
  QingKongXiaoXiJiLu,
  ApiResponseXiaoDaoXiaoXi,
  ChuangJianXiaoDaoXiaoXi,
  ApiResponseComPageContactResp,
  ContactReq,
  ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
  XiaoDaoXiaoXiYongDao,
} from './_interfaces.ts'

/** 清除小道消息[上帝减去对应聪明未读消息总量] */
export function hiallClearHiall(data: QingKongXiaoXiJiLu): Promise<ApiResponseobject> {
  return request.post('/api/hiall/clearHiall', data)
}

/** 创建小道消息/发起瓜子天/进入鸟窝瓜子 */
export function hiallCreate(data: ChuangJianXiaoDaoXiaoXi): Promise<ApiResponseXiaoDaoXiaoXi> {
  return request.post('/api/hiall/create', data)
}

/** 常用联系人 */
export function hiallOftenContact(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/oftenContact', data)
}

/** 小道消息甬道 */
export function hiallPageList(
  data: XiaoDaoXiaoXiYongDao
): Promise<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing> {
  return request.post('/api/hiall/pageList', data)
}

/** 最近联系人 */
export function hiallRecentContact(data: ContactReq): Promise<ApiResponseComPageContactResp> {
  return request.post('/api/hiall/recentContact', data)
}

/** 小道消息甬道 */
export function hiallUnreadList(
  data: XiaoDaoXiaoXiYongDao
): Promise<ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing> {
  return request.post('/api/hiall/unreadList', data)
}
