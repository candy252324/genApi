import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiConfigGetPersonCertificateLabel,
  ResOfApiConfigGetPersonTitleLabel,
} from './_interfaces'

/** 人才证书下拉框 */
export function apiConfigGetPersonCertificateLabel(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiConfigGetPersonCertificateLabel> {
  return Http.post('/api/config/getPersonCertificateLabel', config)
}

/** 人才职称下拉框 */
export function apiConfigGetPersonTitleLabel(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiConfigGetPersonTitleLabel> {
  return Http.post('/api/config/getPersonTitleLabel', config)
}
