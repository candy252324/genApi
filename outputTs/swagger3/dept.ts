import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiDeptList,
  ResOfApiDeptUserDeptList,
  ResOfApiDeptUserListAllTenant,
  ResOfApiDeptUserPage,
  ResOfDeptList,
  ResOfDeptUserDeptList,
  ResOfDeptUserListAllTenant,
  ResOfDeptUserPage,
} from './_interfaces'

/** 获取子部门列表+组织架构imgrouid */
export function apiDeptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptList> {
  return Http.post('/api/dept/list', data, config)
}

/** 获取用户的部门列表 */
export function apiDeptUserDeptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptUserDeptList> {
  return Http.post('/api/dept/userDeptList', data, config)
}

/** 获取当前用户所有租户的人 */
export function apiDeptUserListAllTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptUserListAllTenant> {
  return Http.post('/api/dept/userListAllTenant', data, config)
}

/** 分页获取部门下的用户列表 */
export function apiDeptUserPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptUserPage> {
  return Http.post('/api/dept/userPage', data, config)
}

/** 获取子部门列表+组织架构imgrouid */
export function deptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfDeptList> {
  return Http.post('/dept/list', data, config)
}

/** 获取用户的部门列表 */
export function deptUserDeptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfDeptUserDeptList> {
  return Http.post('/dept/userDeptList', data, config)
}

/** 获取当前用户所有租户的人 */
export function deptUserListAllTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfDeptUserListAllTenant> {
  return Http.post('/dept/userListAllTenant', data, config)
}

/** 分页获取部门下的用户列表 */
export function deptUserPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfDeptUserPage> {
  return Http.post('/dept/userPage', data, config)
}
