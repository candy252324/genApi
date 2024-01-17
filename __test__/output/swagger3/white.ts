const request: any = () => {}
import type {
  ApiResponseListDaDuNanXinXiWhiteResp,
  DaDuNanQiuQianWhiteListReq,
  DaDuNanTongQianCaoQiuQianWhiteListReq,
  ApiResponseListKeyBorardListAllGratefulResp,
  TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq,
  ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp,
  DaDuNanTongQianCaoFenYeKeyBorardPageReq,
} from './_interfaces.ts'

/** 获取子大肚腩秋千+团建架构imgrouid */
export function whiteList(data: DaDuNanQiuQianWhiteListReq): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/list', data)
}

/** 获取铜钱草好看大肚腩秋千 */
export function whiteKeyBorardWhiteList(
  data: DaDuNanTongQianCaoQiuQianWhiteListReq
): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/keyBorardWhiteList', data)
}

/** 获取当前铜钱草所有房东好看人 */
export function whiteKeyBorardListAllGrateful(
  data: TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq
): Promise<ApiResponseListKeyBorardListAllGratefulResp> {
  return request.post('/api/white/keyBorardListAllGrateful', data)
}

/** 分页获取大肚腩下好看铜钱草秋千 */
export function whiteKeyBorardPage(
  data: DaDuNanTongQianCaoFenYeKeyBorardPageReq
): Promise<ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp> {
  return request.post('/api/white/keyBorardPage', data)
}

/** 获取子大肚腩秋千+团建架构imgrouid */
export function whiteList(data: DaDuNanQiuQianWhiteListReq): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/white/list', data)
}

/** 获取铜钱草好看大肚腩秋千 */
export function whiteKeyBorardWhiteList(data: {
  loginId?: string
  req?: DaDuNanTongQianCaoQiuQianWhiteListReq
}): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/white/keyBorardWhiteList', data)
}

/** 获取当前铜钱草所有房东好看人 */
export function whiteKeyBorardListAllGrateful(data: {
  stationKeyBorardId?: string
  req?: TongQianCaoSuoYouFangDongKeyBorardListAllGratefulReq
}): Promise<ApiResponseListKeyBorardListAllGratefulResp> {
  return request.post('/white/keyBorardListAllGrateful', data)
}

/** 分页获取大肚腩下好看铜钱草秋千 */
export function whiteKeyBorardPage(data: {
  channel?: string
  req?: DaDuNanTongQianCaoFenYeKeyBorardPageReq
}): Promise<ApiResponseComPageDaDuNanTongQianCaoQiuQianWhiteKeyBorardResp> {
  return request.post('/white/keyBorardPage', data)
}
