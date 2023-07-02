import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiEnterCredentialAdd,
  ResOfApiEnterCredentialDel,
  ResOfApiEnterCredentialGetCodeList,
  ResOfApiEnterCredentialPage,
  ResOfApiEnterCredentialUpdate,
  ResOfApiEnterCredentialV1OcrBusinessLicense,
} from './_interfaces'

/** 添加企业资质 */
export function apiEnterCredentialAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEnterCredentialAdd> {
  return Http.post('/api/enterCredential/add', data, config)
}

/** 删除企业资质 */
export function apiEnterCredentialDel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEnterCredentialDel> {
  return Http.get('/api/enterCredential/del', data, config)
}

/** 资质级联 */
export function apiEnterCredentialGetCodeList(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEnterCredentialGetCodeList> {
  return Http.get('/api/enterCredential/getCodeList', config)
}

/** 查询企业资质 */
export function apiEnterCredentialPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEnterCredentialPage> {
  return Http.post('/api/enterCredential/page', data, config)
}

/** 修改企业资质 */
export function apiEnterCredentialUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEnterCredentialUpdate> {
  return Http.post('/api/enterCredential/update', data, config)
}

/** ocr营业执照识别 */
export function apiEnterCredentialV1OcrBusinessLicense(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEnterCredentialV1OcrBusinessLicense> {
  return Http.post('/api/enterCredential/v1/ocr/businessLicense', data, config)
}
