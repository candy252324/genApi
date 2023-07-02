import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiBusinessSubscribeEdit,
  ResOfApiBusinessSubscribeInfo,
} from './_interfaces'

/** 商机订阅规则编辑 */
export function apiBusinessSubscribeEdit(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessSubscribeEdit> {
  return Http.post('/api/businessSubscribe/edit', data, config)
}

/** 商机订阅规则详情 */
export function apiBusinessSubscribeInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiBusinessSubscribeInfo> {
  return Http.get('/api/businessSubscribe/info', config)
}
