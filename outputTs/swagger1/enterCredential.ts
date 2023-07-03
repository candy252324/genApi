import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  ApiResponseJSONArray,
  ApiResponseComPageEnterpriseCredentialResp,
  ApiResponseOcrBusinessLicenseBO,
} from './_interfaces'

/** 添加企业资质 */
export function apiEnterCredentialAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/enterCredential/add', data, config)
}

/** 删除企业资质 */
export function apiEnterCredentialDel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/enterCredential/del', data, config)
}

/** 资质级联 */
export function apiEnterCredentialGetCodeList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseJSONArray> {
  return Http.get('/api/enterCredential/getCodeList', config)
}

/** 查询企业资质 */
export function apiEnterCredentialPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEnterpriseCredentialResp> {
  return Http.post('/api/enterCredential/page', data, config)
}

/** 修改企业资质 */
export function apiEnterCredentialUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/enterCredential/update', data, config)
}

/** ocr营业执照识别 */
export function apiEnterCredentialV1OcrBusinessLicense(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseOcrBusinessLicenseBO> {
  return Http.post('/api/enterCredential/v1/ocr/businessLicense', data, config)
}
