import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  ApiResponseComPageLianXiRenLieBiao,
} from './_interfaces'

/** 添加联系人 */
export function apiBusinessContactAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessContact/add', data, config)
}

/** 删除联系人 */
export function apiBusinessContactDeleteById(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessContact/deleteById', data, config)
}

/** 联系人列表 */
export function apiBusinessContactList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageLianXiRenLieBiao> {
  return Http.post('/api/businessContact/list', data, config)
}
