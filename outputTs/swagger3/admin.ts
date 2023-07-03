import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponse, ApiResponsePutFileResp } from './_interfaces'

/** isEmpty=false会重新生成群头像 */
export function apiAdminGetAvatar(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/admin/getAvatar', data, config)
}

/** 上传版本 */
export function apiAdminPutAppVersionFile(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsePutFileResp> {
  return Http.post('/api/admin/putAppVersionFile', data, config)
}
