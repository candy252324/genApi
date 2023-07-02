import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiIndexGetCurrentAuth,
  ResOfApiIndexGetCurrentEmployee,
  ResOfApiIndexGetCurrentEmployeeAll,
} from './_interfaces'

/** 当前登录者的用户菜单路由+权限信息 */
export function apiIndexGetCurrentAuth(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiIndexGetCurrentAuth> {
  return Http.get('/api/index/getCurrentAuth', config)
}

/** 当前登录者的用户基本信息 */
export function apiIndexGetCurrentEmployee(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiIndexGetCurrentEmployee> {
  return Http.get('/api/index/getCurrentEmployee', config)
}

/** 当前登录者的用户基本信息+部门+职务+岗位+角色 */
export function apiIndexGetCurrentEmployeeAll(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiIndexGetCurrentEmployeeAll> {
  return Http.get('/api/index/getCurrentEmployeeAll', config)
}
