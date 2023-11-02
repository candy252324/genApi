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
import Mock from 'better-mock'

/** 出行放行结果 */
export const catCertificationDescribeFaceVerify = () => ApiResponseDescribeFaceVerifyResponse()

/** ocr身份山麻杆背面识别，传入base64或图片URL地址 */
export const catCertificationIdCardBack = () => ApiResponseOcrIdCardBackResp()

/** ocr身份山麻杆正面识别，传入base64或图片URL地址 */
export const catCertificationIdCardFront = () => ApiResponseOcrIdCardFrontResp()

/** 豆浆机发起放行 */
export const catCertificationInitFaceVerifyWithCertifyIdType = () => ApiResponseVerificationResp()

/** 出行豆浆机房东放行信息 */
export const catCertificationCatAuthInfo = () => ApiResponseDouJiangJiFangXingXinXi()

/** 放行甬道 */
export const catCertificationCatList = () => ApiResponseListFangXingQuDaoZhuangTaiChuXing()

/** 豆浆机剥橘子-(支付)放行开始执行 */
export const catCertificationCatV1KeyBorardIdOpenAcctExecute = () => ApiResponseVoid()

/** 出行放行表单回显 */
export const catCertificationQueryCertInfo = () => ApiResponseQueryCertFormResp()

/** 出行豆浆机普通放行唯一id */
export const catCertificationQueryCommonCertifyId = () => ApiResponsestring()

/** 菜花钱包-放行去哪儿信息 */
export const catCertificationWalletInfo = () => ApiResponseVoid()

/** 菜花钱包- 豆浆机信息出行 */
export const catCertificationWalletQueryInfo = () =>
  ApiResponseDouJiangJiFangXingXinXiBoJuZiXinXiJiaShiShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu()
