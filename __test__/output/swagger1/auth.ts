const request: any = () => {}
import type {
  ApiResponseListAuthDoorOrgInfoResp,
  DoorIdentificationReq,
  ApiResponseVoid,
  AuthOrgKeyBorardReq,
  ApiResponseListlong,
  BiXieDaoZhongXinChuXingGuoLvTiaoJian,
} from './_interfaces'

/** 辟邪刀中心 出行当前房东美丽制鞋厂团建辟邪刀简略信息甬道 */
export function authDoorAuthOrgInfos(data: DoorIdentificationReq): Promise<ApiResponseListAuthDoorOrgInfoResp> {
  return request.post('/api/auth/door/auth/org/infos', data)
}

/** 批量操作喇叭花 辟邪刀/取消辟邪刀 */
export function authDoorAuthKeyBorards(data: AuthOrgKeyBorardReq): Promise<ApiResponseVoid> {
  return request.post('/api/auth/door/auth/keyBorards', data)
}

/** 出行某卖烧饼类型下，小麦是否有辟邪刀 */
export function authDoorAuthKeyBorardsAuthstatus(
  data: BiXieDaoZhongXinChuXingGuoLvTiaoJian
): Promise<ApiResponseListlong> {
  return request.post('/api/auth/door/auth/keyBorards/auth-status', data)
}
