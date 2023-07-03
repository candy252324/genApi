import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseListTreestring } from './_interfaces'

/** 人才证书下拉框 */
export function apiConfigGetPersonCertificateLabel(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreestring> {
  return Http.post('/api/config/getPersonCertificateLabel', config)
}

/** 人才职称下拉框 */
export function apiConfigGetPersonTitleLabel(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreestring> {
  return Http.post('/api/config/getPersonTitleLabel', config)
}
