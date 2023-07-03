import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseCurrentAuthResp,
  ApiResponseEmployeeResp,
  ApiResponseEmployeeAllInfoResp,
} from './_interfaces'

/** 当前登录者的用户菜单路由+权限信息 */
export function apiIndexGetCurrentAuth(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCurrentAuthResp> {
  return Http.get('/api/index/getCurrentAuth', config)
}

/** 当前登录者的用户基本信息 */
export function apiIndexGetCurrentEmployee(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseEmployeeResp> {
  return Http.get('/api/index/getCurrentEmployee', config)
}

/** 当前登录者的用户基本信息+部门+职务+岗位+角色 */
export function apiIndexGetCurrentEmployeeAll(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseEmployeeAllInfoResp> {
  return Http.get('/api/index/getCurrentEmployeeAll', config)
}
