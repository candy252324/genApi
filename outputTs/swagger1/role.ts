import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponselong,
  ApiResponseVoid,
  ApiResponse,
  ApiResponseListRoleResq,
  ApiResponseComPageEmployeeComplexResp,
  ApiResponseListSelectorEmployeeResp,
  ApiResponseRoleInfoResq,
  ApiResponseListTreelong,
  ApiResponseMenuCheckedResp,
} from './_interfaces'

/** 新增角色 */
export function apiRoleAddRole(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponselong> {
  return Http.post('/api/role/addRole', data, config)
}

/** 批量取消授权员工 */
export function apiRoleAuthEmployeeCancelAll(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/role/authEmployee/cancelAll', data, config)
}

/** 批量选择员工授权 */
export function apiRoleAuthEmployeeSelectAll(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/role/authEmployee/selectAll', data, config)
}

/** 更新角色状态 */
export function apiRoleChangeStatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/role/changeStatus', data, config)
}

/** 获取当前登录员工可分配给用户的角色 */
export function apiRoleCurCanAllotEmployeeRoleList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleResq> {
  return Http.get('/api/role/curCanAllotEmployeeRoleList', config)
}

/** 获取当前登录员工可分配权限的角色[加载上级角色] */
export function apiRoleCurCanAllotRoleList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleResq> {
  return Http.get('/api/role/curCanAllotRoleList', config)
}

/** 获取当前登录员工含有角色 */
export function apiRoleCurEmployeeRoleList(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleResq> {
  return Http.get('/api/role/curEmployeeRoleList', config)
}

/** 修改角色基本信息 */
export function apiRoleEditRoleBase(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/role/editRoleBase', data, config)
}

/** 修改角色菜单权限 */
export function apiRoleEditRoleMenu(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/role/editRoleMenu', data, config)
}

/** 根据员工id获取可分配权限的角色[加载上级角色] */
export function apiRoleGetCanAllotRoleListEmployeeId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleResq> {
  return Http.get('/api/role/getCanAllotRoleList/${employeeId}', data, config)
}

/** 根据角色编号获取员工信息 */
export function apiRolePageRoleEmployeeRoleId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeComplexResp> {
  return Http.get('/api/role/pageRoleEmployee/${roleId}', data, config)
}

/** 根据部门id搜索员工 */
export function apiRoleQueryEmployeeByDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSelectorEmployeeResp> {
  return Http.get('/api/role/queryEmployeeByDeptId', data, config)
}

/** 根据名称或手机号搜索员工 */
export function apiRoleQueryEmployeeByPhoneOrName(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSelectorEmployeeResp> {
  return Http.get('/api/role/queryEmployeeByPhoneOrName', data, config)
}

/** 删除角色 */
export function apiRoleRemoveRoleRoleIds(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.get('/api/role/removeRole/${roleIds}', data, config)
}

/** 角色基础信息 */
export function apiRoleRoleInfoRoleId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseRoleInfoResq> {
  return Http.get('/api/role/roleInfo/${roleId}', data, config)
}

/** 查询角色列表 */
export function apiRoleRoleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListRoleResq> {
  return Http.get('/api/role/roleList', data, config)
}

/** 加载对应角色菜单列表树[不包含选中节点] */
export function apiRoleRoleMenuTreeRoleId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreelong> {
  return Http.get('/api/role/roleMenuTree/${roleId}', data, config)
}

/** 加载对应角色菜单列表树[包含选中节点] */
export function apiRoleRoleMenuTreeCheckedRoleId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseMenuCheckedResp> {
  return Http.get('/api/role/roleMenuTreeChecked/${roleId}', data, config)
}

/** 查询角色[树列表] */
export function apiRoleRoleTree(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreelong> {
  return Http.get('/api/role/roleTree', data, config)
}
