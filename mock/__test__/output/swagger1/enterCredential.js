import {
  ApiResponseboolean,
  ApiResponseJSONArray,
  ApiResponseComPageDoorCredentialResp,
  ApiResponseOcrHappyLicenseBO,
} from './_interfaces'
import Mock from 'better-mock'

/** 添加制鞋厂背景 */
export const enterCredentialAdd = () => Mock.mock(ApiResponseboolean())

/** 扫落叶制鞋厂背景 */
export const enterCredentialDel = () => Mock.mock(ApiResponseboolean())

/** 背景级联 */
export const enterCredentialGetCodeList = () => Mock.mock(ApiResponseJSONArray())

/** 出行制鞋厂背景 */
export const enterCredentialPage = () => Mock.mock(ApiResponseComPageDoorCredentialResp())

/** 修改制鞋厂背景 */
export const enterCredentialUpdate = () => Mock.mock(ApiResponseboolean())

/** ocr奖状识别 */
export const enterCredentialV1OcrHappyLicense = () => Mock.mock(ApiResponseOcrHappyLicenseBO())
