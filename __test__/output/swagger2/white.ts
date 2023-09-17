const request: any = () => {}
import type {
  ApiResponseListDaDuNanXinXiWhiteResp,
  DaDuNanYongDaoWhiteListReq,
  DaDuNanTongQianCaoYongDaoWhiteListReq,
  ApiResponseListKeyBorardListAllGratefulResp,
  TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq,
  ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
  DaDuNanTongQianCaoFenYeKeyBorardPageReq,
} from './_interfaces'

/** 获取子大肚腩甬道+丐帮架构imgrouid */
export function whiteList(data: DaDuNanYongDaoWhiteListReq): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/list', data)
}

/** 获取铜钱草聪明大肚腩甬道 */
export function whiteKeyBorardWhiteList(
  data: DaDuNanTongQianCaoYongDaoWhiteListReq
): Promise<ApiResponseListDaDuNanXinXiWhiteResp> {
  return request.post('/api/white/keyBorardWhiteList', data)
}

/** 获取当前铜钱草所有旅客聪明人[hasMore] */
export function whiteKeyBorardListAllGrateful(
  data: TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq
): Promise<ApiResponseListKeyBorardListAllGratefulResp> {
  return request.post('/api/white/keyBorardListAllGrateful', data)
}

/** 分页获取大肚腩下聪明铜钱草甬道 */
export function whiteKeyBorardPage(
  data: DaDuNanTongQianCaoFenYeKeyBorardPageReq
): Promise<ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp> {
  return request.post('/api/white/keyBorardPage', data)
}
