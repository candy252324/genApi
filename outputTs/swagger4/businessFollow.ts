import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComPageEmployeeListResp,
  YuanGongLieBiaoQingQiu,
  ApiResponseboolean,
  FollowReq,
  FollowAgainReq,
  BuZaiGenJin,
  ApiResponseComPageLieBiaoQingQiu,
  LieBiaoQingQiu0,
  ZhuanRangQingQiu,
} from './_interfaces'

/** 员工列表 */
export function apiBusinessFollowEmployeeList(
  data: YuanGongLieBiaoQingQiu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeListResp> {
  return Http.post('/api/businessFollow/employeeList', data, config)
}

/** 跟进 */
export function apiBusinessFollowFollow(
  data: FollowReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/follow', data, config)
}

/** 重新跟进 */
export function apiBusinessFollowFollowAgain(
  data: FollowAgainReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/followAgain', data, config)
}

/** 不再跟进 */
export function apiBusinessFollowGiveUp(
  data: BuZaiGenJin,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/giveUp', data, config)
}

/** 跟进记录 */
export function apiBusinessFollowList(
  data: LieBiaoQingQiu0,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageLieBiaoQingQiu> {
  return Http.post('/api/businessFollow/list', data, config)
}

/** 转让 */
export function apiBusinessFollowTransfer(
  data: ZhuanRangQingQiu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/businessFollow/transfer', data, config)
}
