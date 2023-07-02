import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiFileUploadFile } from './_interfaces'

/** 上传文件 */
export function apiFileUploadFile(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiFileUploadFile> {
  return Http.post('/api/file/uploadFile', data, config)
}
