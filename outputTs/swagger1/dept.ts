import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiDeptAddDept,
  ResOfApiDeptDelDeptConfirm,
  ResOfApiDeptDelDeptDeptId,
  ResOfApiDeptDeptTree,
  ResOfApiDeptDeptTreeComplex,
  ResOfApiDeptDeptTreeInfo,
  ResOfApiDeptEditDept,
  ResOfApiDeptGetDeptId,
  ResOfApiDeptList,
  ResOfApiDeptListExcludeChildDeptId,
  ResOfApiDeptQueryEmployeeByDeptId,
  ResOfApiDeptQueryEmployeeByPhoneOrName,
  ResOfApiDeptStartDelDeptDeptId,
  ResOfApiDeptUpDeptStatus,
} from './_interfaces'

/** 新增部门 */
export function apiDeptAddDept(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptAddDept> {
  return Http.post('/api/dept/addDept', data, config)
}

/** 确认删除部门 */
export function apiDeptDelDeptConfirm(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptDelDeptConfirm> {
  return Http.post('/api/dept/delDept/confirm', data, config)
}

/** 删除部门 */
export function apiDeptDelDeptDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptDelDeptDeptId> {
  return Http.get('/api/dept/delDept/${deptId}', data, config)
}

/** 获取部门列表[树列表：选择器] */
export function apiDeptDeptTree(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptDeptTree> {
  return Http.get('/api/dept/deptTree', data, config)
}

/** 获取部门列表[树列表：复杂数据] */
export function apiDeptDeptTreeComplex(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptDeptTreeComplex> {
  return Http.get('/api/dept/deptTreeComplex', data, config)
}

/** 获取部门列表[树列表：简单数据] */
export function apiDeptDeptTreeInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptDeptTreeInfo> {
  return Http.get('/api/dept/deptTreeInfo', data, config)
}

/** 修改部门 */
export function apiDeptEditDept(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptEditDept> {
  return Http.post('/api/dept/editDept', data, config)
}

/** 根据部们id获取详细信息 */
export function apiDeptGetDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptGetDeptId> {
  return Http.get('/api/dept/get/${deptId}', data, config)
}

/** 获取部门列表[列表平铺形式] */
export function apiDeptList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptList> {
  return Http.get('/api/dept/list', data, config)
}

/** 查询部门列表（排除当前节点以及子节点）[列表平铺形式] */
export function apiDeptListExcludeChildDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptListExcludeChildDeptId> {
  return Http.get('/api/dept/list/excludeChild/${deptId}', data, config)
}

/** 根据部门id搜索员工 */
export function apiDeptQueryEmployeeByDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptQueryEmployeeByDeptId> {
  return Http.get('/api/dept/queryEmployeeByDeptId', data, config)
}

/** 根据名称或手机号搜索员工 */
export function apiDeptQueryEmployeeByPhoneOrName(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptQueryEmployeeByPhoneOrName> {
  return Http.get('/api/dept/queryEmployeeByPhoneOrName', data, config)
}

/** 发起删除部门 */
export function apiDeptStartDelDeptDeptId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptStartDelDeptDeptId> {
  return Http.get('/api/dept/start/delDept/${deptId}', data, config)
}

/** 更新部门状态 */
export function apiDeptUpDeptStatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeptUpDeptStatus> {
  return Http.get('/api/dept/upDeptStatus', data, config)
}
