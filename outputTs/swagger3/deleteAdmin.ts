import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponse } from './_interfaces'

/** 删除群管理员 */
export function deleteAdmin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/deleteAdmin', data, config)
}
