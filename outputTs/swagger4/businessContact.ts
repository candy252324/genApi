import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  TianJiaLianXiRenQingQiu,
  DelReq,
  ApiResponseComPageLianXiRenLieBiao,
  LianXiRenLieBiaoQingQiu,
} from './_interfaces'

/** 添加联系人 */
export function apiBusinessContactAdd(
  data: TianJiaLianXiRenQingQiu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessContact/add', data, config)
}

/** 删除联系人 */
export function apiBusinessContactDeleteById(
  data: DelReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessContact/deleteById', data, config)
}

/** 联系人列表 */
export function apiBusinessContactList(
  data: LianXiRenLieBiaoQingQiu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageLianXiRenLieBiao> {
  return Http.post('/api/businessContact/list', data, config)
}
