const request: any = () => {}
import type {
  ApiResponseDescribeFaceVerifyResponse,
  ApiResponseOcrIdCardBackResp,
  OcrImageReq,
  ApiResponseOcrIdCardFrontResp,
  ApiResponseVerificationResp,
  CatVerifyReq,
  ApiResponseDouJiangJiFangXingXinXi,
  ApiResponseListFangXingQuDaoZhuangTaiChuXing,
  ApiResponseVoid,
  ApiResponseQueryCertFormResp,
  ApiResponsestring,
  DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu,
  ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu,
} from './_interfaces'

/** 出行放行结果 */
export function catCertificationDescribeFaceVerify(data: {
  // 出行放行结果
  certifyId?: string
}): Promise<ApiResponseDescribeFaceVerifyResponse> {
  return request.get('/api/catCertification/describeFaceVerify', data)
}

/** ocr身份山麻杆背面识别，传入base64或图片URL地址 */
export function catCertificationIdCardBack(data: OcrImageReq): Promise<ApiResponseOcrIdCardBackResp> {
  return request.post('/api/catCertification/idCardBack', data)
}

/** ocr身份山麻杆正面识别，传入base64或图片URL地址 */
export function catCertificationIdCardFront(data: OcrImageReq): Promise<ApiResponseOcrIdCardFrontResp> {
  return request.post('/api/catCertification/idCardFront', data)
}

/** 豆浆机发起放行 */
export function catCertificationInitFaceVerifyWithCertifyIdType(
  data: CatVerifyReq
): Promise<ApiResponseVerificationResp> {
  return request.post('/api/catCertification/initFaceVerifyWithCertifyId/${type}', data)
}

/** 出行豆浆机房东放行信息 */
export function catCertificationCatAuthInfo(): Promise<ApiResponseDouJiangJiFangXingXinXi> {
  return request.post('/api/catCertification/cat/auth/info')
}

/** 放行甬道 */
export function catCertificationCatList(): Promise<ApiResponseListFangXingQuDaoZhuangTaiChuXing> {
  return request.post('/api/catCertification/cat/list')
}

/** 豆浆机剥橘子-(支付)放行开始执行 */
export function catCertificationCatV1KeyBorardIdOpenAcctExecute(): Promise<ApiResponseVoid> {
  return request.post('/api/catCertification/cat/v1/${keyBorardId}/openAcct/execute')
}

/** 出行放行表单回显 */
export function catCertificationQueryCertInfo(data: { certifyId?: string }): Promise<ApiResponseQueryCertFormResp> {
  return request.get('/api/catCertification/queryCertInfo', data)
}

/** 出行豆浆机普通放行唯一id */
export function catCertificationQueryCommonCertifyId(): Promise<ApiResponsestring> {
  return request.get('/api/catCertification/queryCommonCertifyId')
}

/** 菜花钱包-放行去哪儿信息 */
export function catCertificationWalletInfo(data: {
  // 如果已经存在放行信息，是否覆盖更新，默认false
  coverFlag?: boolean
  req?: DouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu
}): Promise<ApiResponseVoid> {
  return request.post('/api/catCertification/wallet/info', data)
}

/** 菜花钱包- 豆浆机信息出行 */
export function catCertificationWalletQueryInfo(): Promise<ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu> {
  return request.get('/api/catCertification/wallet/queryInfo')
}
