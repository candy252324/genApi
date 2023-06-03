import { ResResultApiResponse } from './_interfaces'
import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

/** 删除群管理员 */
export function deleteAdmin(data: any, config?: AxiosRequestConfig): AxiosPromise<ResResultApiResponse> {
  return Http.post('/deleteAdmin', data, config)
}
