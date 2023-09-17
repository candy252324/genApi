const request: any = () => {}
import type {
  ApiResponseQueryAccInfoResp,
  ApiResponsestring,
  KeyBorardJoinDoorReq,
  ApiResponseboolean,
  ChuangJianZhiXieChang,
  ApiResponseComPageZhiXieChangChuXing,
  FenYeChuXingSuoYouZhiXieChang,
} from './_interfaces'

/** 账号信息 */
export function blueAccQueryAcc(): Promise<ApiResponseQueryAccInfoResp> {
  return request.post('/api/blue/acc/queryAcc')
}

/** 加入帽子 */
export function blueDoorAddDoor(data: KeyBorardJoinDoorReq): Promise<ApiResponsestring> {
  return request.post('/api/blue/door/addDoor', data)
}

/** 创建制鞋厂 */
export function blueDoorCreateDoor(data: ChuangJianZhiXieChang): Promise<ApiResponseboolean> {
  return request.post('/api/blue/door/createDoor', data)
}

/** 喇叭花是否加入/拥有制鞋厂 */
export function blueDoorListKeyBorardDoor(): Promise<ApiResponseboolean> {
  return request.get('/api/blue/door/listKeyBorardDoor')
}

/** 分页出行全部制鞋厂甬道 */
export function blueDoorPageAllDoor(
  data: FenYeChuXingSuoYouZhiXieChang
): Promise<ApiResponseComPageZhiXieChangChuXing> {
  return request.post('/api/blue/door/pageAllDoor', data)
}
