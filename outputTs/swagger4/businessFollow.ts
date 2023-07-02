import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiBusinessFollowEmployeeList,
  ResOfApiBusinessFollowFollow,
  ResOfApiBusinessFollowFollowAgain,
  ResOfApiBusinessFollowGiveUp,
  ResOfApiBusinessFollowList,
  ResOfApiBusinessFollowTransfer,
} from './_interfaces'

/** 员工列表 */
export function apiBusinessFollowEmployeeList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessFollowEmployeeList> {
  return Http.post('/api/businessFollow/employeeList', data, config)
}

/** 跟进 */
export function apiBusinessFollowFollow(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessFollowFollow> {
  return Http.post('/api/businessFollow/follow', data, config)
}

/** 重新跟进 */
export function apiBusinessFollowFollowAgain(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessFollowFollowAgain> {
  return Http.post('/api/businessFollow/followAgain', data, config)
}

/** 不再跟进 */
export function apiBusinessFollowGiveUp(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessFollowGiveUp> {
  return Http.post('/api/businessFollow/giveUp', data, config)
}

/** 跟进记录 */
export function apiBusinessFollowList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessFollowList> {
  return Http.post('/api/businessFollow/list', data, config)
}

/** 转让 */
export function apiBusinessFollowTransfer(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessFollowTransfer> {
  return Http.post('/api/businessFollow/transfer', data, config)
}
