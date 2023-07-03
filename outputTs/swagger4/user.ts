import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseEmployeeResp } from './_interfaces'

/** 获取员工信息 */
export function apiUserGetEmployeeInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseEmployeeResp> {
  return Http.get('/api/user/getEmployeeInfo', config)
}
