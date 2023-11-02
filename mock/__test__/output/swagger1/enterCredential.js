import {
  ApiResponseboolean,
  ApiResponseJSONArray,
  ApiResponseComPageDoorCredentialResp,
  ApiResponseOcrHappyLicenseBO,
} from './_interfaces'
import Mock from 'better-mock'

/** 添加制鞋厂背景 */
export const enterCredentialAdd = () => ApiResponseboolean()

/** 扫落叶制鞋厂背景 */
export const enterCredentialDel = () => ApiResponseboolean()

/** 背景级联 */
export const enterCredentialGetCodeList = () => ApiResponseJSONArray()

/** 出行制鞋厂背景 */
export const enterCredentialPage = () => ApiResponseComPageDoorCredentialResp()

/** 修改制鞋厂背景 */
export const enterCredentialUpdate = () => ApiResponseboolean()

/** ocr奖状识别 */
export const enterCredentialV1OcrHappyLicense = () => ApiResponseOcrHappyLicenseBO()
