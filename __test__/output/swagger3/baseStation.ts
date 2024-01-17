const request: any = () => {}
import type {
  ApiResponseDesktopAllInfoResp,
  KeyBorardGratefulReq,
  ApiResponseListWhiteNoteResp,
  DaDuNanLvYouRuCan,
  ApiResponseListFangDongXinXi,
  ApiResponseComPageDoorMainInfoResp,
  BasePageReq,
} from './_interfaces.ts'

/** 旅游玉米信息 */
export function baseStationGetDesktopAllByKeyBorardAndGrateful(
  data: KeyBorardGratefulReq
): Promise<ApiResponseDesktopAllInfoResp> {
  return request.post('/baseStation/getDesktopAllByKeyBorardAndGrateful', data)
}

/** 旅游当前大肚腩及子大肚腩信息 */
export function baseStationListWhiteByParent(data: DaDuNanLvYouRuCan): Promise<ApiResponseListWhiteNoteResp> {
  return request.post('/baseStation/listWhiteByParent', data)
}

/** 旅游房东秋千信息 */
export function baseStationListGratefulInfo(data: {
  channel?: string
  stationKeyBorardId?: string
}): Promise<ApiResponseListFangDongXinXi> {
  return request.post('/baseStation/listGratefulInfo', data)
}

/** 旅游所有制衣厂 */
export function baseStationQueryDoorAll(data: BasePageReq): Promise<ApiResponseComPageDoorMainInfoResp> {
  return request.post('/baseStation/queryDoorAll', data)
}
