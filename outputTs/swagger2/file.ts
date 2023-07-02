import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiFileUpload } from './_interfaces'

/** 文件上传 */
export function apiFileUpload(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFileUpload> {
  return Http.post('/api/file/upload', data, config)
}
