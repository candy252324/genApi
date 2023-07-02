import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiSuperList,
  ResOfApiSuperTransfer,
  ResOfApiSuperVerifyVerifyType,
} from './_interfaces'

/** 列表 */
export function apiSuperList(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSuperList> {
  return Http.get('/api/super/list', config)
}

/** 转让 */
export function apiSuperTransfer(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSuperTransfer> {
  return Http.get('/api/super/transfer', data, config)
}

/** 转让验证码验证 */
export function apiSuperVerifyVerifyType(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiSuperVerifyVerifyType> {
  return Http.post('/api/super/verify/${verifyType}', data, config)
}
