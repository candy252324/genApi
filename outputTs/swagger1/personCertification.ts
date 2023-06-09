import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseDescribeFaceVerifyResponse,
  ApiResponseOcrIdCardBackResp,
  OcrImageReq,
  ApiResponseOcrIdCardFrontResp,
  ApiResponseVerificationResp,
  ApiResponseGeRenRenZhengXinXi,
  ApiResponseListRenZhengQuDaoZhuangTaiChaXun,
  ApiResponseVoid,
  ApiResponseQueryCertFormResp,
  ApiResponsestring,
  ApiResponseGeRenRenZhengXinXiKaiHuXinXiXinZengShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu,
} from './_interfaces'

/** 查询认证结果 */
export function apiPersonCertificationDescribeFaceVerify(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseDescribeFaceVerifyResponse> {
  return Http.get('/api/personCertification/describeFaceVerify', data, config)
}

/** ocr身份证背面识别，传入base64或图片URL地址 */
export function apiPersonCertificationIdCardBack(
  data: OcrImageReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseOcrIdCardBackResp> {
  return Http.post('/api/personCertification/idCardBack', data, config)
}

/** ocr身份证正面识别，传入base64或图片URL地址 */
export function apiPersonCertificationIdCardFront(
  data: OcrImageReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseOcrIdCardFrontResp> {
  return Http.post('/api/personCertification/idCardFront', data, config)
}

/** 个人发起认证 */
export function apiPersonCertificationInitFaceVerifyWithCertifyIdType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVerificationResp> {
  return Http.post(
    '/api/personCertification/initFaceVerifyWithCertifyId/${type}',
    data,
    config
  )
}

/** 查询个人租户认证信息 */
export function apiPersonCertificationPersonAuthInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseGeRenRenZhengXinXi> {
  return Http.post('/api/personCertification/person/auth/info', config)
}

/** 认证列表 */
export function apiPersonCertificationPersonList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRenZhengQuDaoZhuangTaiChaXun> {
  return Http.post('/api/personCertification/person/list', config)
}

/** 个人开户-(支付)认证开始执行 */
export function apiPersonCertificationPersonV1UserIdOpenAcctExecute(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post(
    '/api/personCertification/person/v1/${userId}/openAcct/execute',
    data,
    config
  )
}

/** 查询认证表单回显 */
export function apiPersonCertificationQueryCertInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQueryCertFormResp> {
  return Http.get('/api/personCertification/queryCertInfo', data, config)
}

/** 查询个人普通认证唯一id */
export function apiPersonCertificationQueryCommonCertifyId(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get('/api/personCertification/queryCommonCertifyId', config)
}

/** 菜花钱包-认证录入信息 */
export function apiPersonCertificationWalletInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/personCertification/wallet/info', data, config)
}

/** 菜花钱包- 个人信息查询 */
export function apiPersonCertificationWalletQueryInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseGeRenRenZhengXinXiKaiHuXinXiXinZengShiZhiXuYaoChuanRuindividualBankCardNoindividualReservedPhoneNoindividualVocationQiTaXinXiCongredisHuanCunZhongHuoQu> {
  return Http.get('/api/personCertification/wallet/queryInfo', config)
}
