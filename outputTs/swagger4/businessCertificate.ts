import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiBusinessCertificateDelete } from './_interfaces'

/** 删除人员证书 */
export function apiBusinessCertificateDelete(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessCertificateDelete> {
  return Http.post('/api/businessCertificate/delete', data, config)
}
