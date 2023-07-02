import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import { ResOfSaveAdmin } from './_interfaces'

/** 添加群管理员 */
export function saveAdmin(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfSaveAdmin> {
  return Http.post('/saveAdmin', data, config)
}
