import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseShangChuanWenJianFanHui } from './_interfaces'

/** 上传文件 */
export function apiFileUploadFile(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShangChuanWenJianFanHui> {
  return Http.post('/api/file/uploadFile', data, config)
}
