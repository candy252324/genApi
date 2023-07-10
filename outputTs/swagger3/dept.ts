import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseListBuMenXinXiDeptResp,
  BuMenLieBiaoDeptListReq,
  ApiResponseListUserListAllTenantResp,
  ApiResponseComPageBuMenYongHuLieBiaoDeptUserResp,
} from './_interfaces'

/** 获取子部门列表+组织架构imgrouid */
export function apiDeptList(
  data: BuMenLieBiaoDeptListReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListBuMenXinXiDeptResp> {
  return Http.post('/api/dept/list', data, config)
}

/** 获取用户的部门列表 */
export function apiDeptUserDeptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListBuMenXinXiDeptResp> {
  return Http.post('/api/dept/userDeptList', data, config)
}

/** 获取当前用户所有租户的人 */
export function apiDeptUserListAllTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListUserListAllTenantResp> {
  return Http.post('/api/dept/userListAllTenant', data, config)
}

/** 分页获取部门下的用户列表 */
export function apiDeptUserPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageBuMenYongHuLieBiaoDeptUserResp> {
  return Http.post('/api/dept/userPage', data, config)
}

/** 获取子部门列表+组织架构imgrouid */
export function deptList(
  data: BuMenLieBiaoDeptListReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListBuMenXinXiDeptResp> {
  return Http.post('/dept/list', data, config)
}

/** 获取用户的部门列表 */
export function deptUserDeptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListBuMenXinXiDeptResp> {
  return Http.post('/dept/userDeptList', data, config)
}

/** 获取当前用户所有租户的人 */
export function deptUserListAllTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListUserListAllTenantResp> {
  return Http.post('/dept/userListAllTenant', data, config)
}

/** 分页获取部门下的用户列表 */
export function deptUserPage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageBuMenYongHuLieBiaoDeptUserResp> {
  return Http.post('/dept/userPage', data, config)
}
