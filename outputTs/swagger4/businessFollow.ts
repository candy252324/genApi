import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComPageEmployeeListResp,
  ApiResponseboolean,
  ApiResponseComPageLieBiaoQingQiu,
} from './_interfaces'

/** 员工列表 */
export function apiBusinessFollowEmployeeList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeListResp> {
  return Http.post('/api/businessFollow/employeeList', data, config)
}

/** 跟进 */
export function apiBusinessFollowFollow(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/follow', data, config)
}

/** 重新跟进 */
export function apiBusinessFollowFollowAgain(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/followAgain', data, config)
}

/** 不再跟进 */
export function apiBusinessFollowGiveUp(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/giveUp', data, config)
}

/** 跟进记录 */
export function apiBusinessFollowList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageLieBiaoQingQiu> {
  return Http.post('/api/businessFollow/list', data, config)
}

/** 转让 */
export function apiBusinessFollowTransfer(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/transfer', data, config)
}
