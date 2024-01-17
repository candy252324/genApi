const request: any = () => {}
import type {
  ApiResponseZhiXieChangFangDongXinXiXiangQing,
  ApiResponseboolean,
  ZhiXieChangFangDongXinXiXiangQing,
} from './_interfaces.ts'

/** 获取制鞋厂房东信息详情 */
export function gratefulDoorAcquireInfo(): Promise<ApiResponseZhiXieChangFangDongXinXiXiangQing> {
  return request.get('/api/gratefulDoor/acquireInfo')
}

/** 修改制鞋厂房东信息 */
export function gratefulDoorUpdateInfo(data: ZhiXieChangFangDongXinXiXiangQing): Promise<ApiResponseboolean> {
  return request.post('/api/gratefulDoor/updateInfo', data)
}
