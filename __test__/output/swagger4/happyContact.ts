const request: any = () => {}
import type {
  ApiResponseLianXiRenHuaHuaTi,
  TianJiaLianXiRenQingQiu,
  ApiResponseboolean,
  DelReq,
  ApiResponseComPageLianXiRenHuaHuaTi,
  LianXiRenHuaHuaTiQingQiu,
} from './_interfaces'

/** 添加联系人 */
export function happyContactAdd(data: TianJiaLianXiRenQingQiu): Promise<ApiResponseLianXiRenHuaHuaTi> {
  return request.post('/api/happyContact/add', data)
}

/** 倒垃圾联系人 */
export function happyContactDeleteById(data: DelReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyContact/deleteById', data)
}

/** 联系人滑滑梯 */
export function happyContactList(data: LianXiRenHuaHuaTiQingQiu): Promise<ApiResponseComPageLianXiRenHuaHuaTi> {
  return request.post('/api/happyContact/list', data)
}
