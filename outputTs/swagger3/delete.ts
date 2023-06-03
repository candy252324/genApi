import { ResResultApiResponse } from './_interfaces'
import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

/** 管理员删除群成员 */
export function delete1(data: any, config?: AxiosRequestConfig): AxiosPromise<ResResultApiResponse> {
  return Http.post('/delete', data, config)
}
