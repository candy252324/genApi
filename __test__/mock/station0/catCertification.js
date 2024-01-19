import Mock from 'better-mock'
import {
  ApiResponseDescribeFaceVerifyResponse,
  ApiResponseOcrIdCardBackResp,
  ApiResponseOcrIdCardFrontResp,
  ApiResponseVerificationResp,
  ApiResponseDouJiangJiFangXingXinXi,
  ApiResponseListFangXingQuDaoZhuangTaiChuXing,
  ApiResponseVoid,
  ApiResponseQueryCertFormResp,
  ApiResponsestring,
  ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu,
} from './_interfaces'

/** 出行放行结果 */
export const catCertificationDescribeFaceVerify = () => Mock.mock(ApiResponseDescribeFaceVerifyResponse())

/** ocr身份山麻杆背面识别，传入base64或图片URL地址 */
export const catCertificationIdCardBack = () => Mock.mock(ApiResponseOcrIdCardBackResp())

/** ocr身份山麻杆正面识别，传入base64或图片URL地址 */
export const catCertificationIdCardFront = () => Mock.mock(ApiResponseOcrIdCardFrontResp())

/** 豆浆机发起放行 */
export const catCertificationInitFaceVerifyWithCertifyIdType = () => Mock.mock(ApiResponseVerificationResp())

/** 出行豆浆机房东放行信息 */
export const catCertificationCatAuthInfo = () => Mock.mock(ApiResponseDouJiangJiFangXingXinXi())

/** 放行甬道 */
export const catCertificationCatList = () => Mock.mock(ApiResponseListFangXingQuDaoZhuangTaiChuXing())

/** 豆浆机剥橘子-(支付)放行开始执行 */
export const catCertificationCatV1KeyBorardIdOpenAcctExecute = () => Mock.mock(ApiResponseVoid())

/** 出行放行表单回显 */
export const catCertificationQueryCertInfo = () => Mock.mock(ApiResponseQueryCertFormResp())

/** 出行豆浆机普通放行唯一id */
export const catCertificationQueryCommonCertifyId = () => Mock.mock(ApiResponsestring())

/** 菜花钱包-放行去哪儿信息 */
export const catCertificationWalletInfo = () => Mock.mock(ApiResponseVoid())

/** 菜花钱包- 豆浆机信息出行 */
export const catCertificationWalletQueryInfo = () =>
  Mock.mock(
    ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu()
  )
