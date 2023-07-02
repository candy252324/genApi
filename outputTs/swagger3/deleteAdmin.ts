import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfDeleteAdmin } from './_interfaces'

/** 删除群管理员 */
export function deleteAdmin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfDeleteAdmin> {
  return Http.post('/deleteAdmin', data, config)
}
