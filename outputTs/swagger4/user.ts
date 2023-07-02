import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiUserGetEmployeeInfo } from './_interfaces'

/** 获取员工信息 */
export function apiUserGetEmployeeInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiUserGetEmployeeInfo> {
  return Http.get('/api/user/getEmployeeInfo', config)
}
