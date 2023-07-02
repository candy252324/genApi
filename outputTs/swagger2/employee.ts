import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiEmployeeAdd,
  ResOfApiEmployeeChangeStatus,
  ResOfApiEmployeeDelEmployeeIds,
  ResOfApiEmployeeDeptTreeCount,
  ResOfApiEmployeeEdit,
  ResOfApiEmployeeGetEmployeeByEmployeeId,
  ResOfApiEmployeeMyDeptTreeCount,
  ResOfApiEmployeePageList,
  ResOfApiEmployeePageSelectList,
} from './_interfaces'

/** 新增员工 */
export function apiEmployeeAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeAdd> {
  return Http.post('/api/employee/add', data, config)
}

/** 状态修改 */
export function apiEmployeeChangeStatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeChangeStatus> {
  return Http.get('/api/employee/changeStatus', data, config)
}

/** 删除员工 */
export function apiEmployeeDelEmployeeIds(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeDelEmployeeIds> {
  return Http.get('/api/employee/del/${employeeIds}', data, config)
}

/** 获取部门树_全部部门 */
export function apiEmployeeDeptTreeCount(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeDeptTreeCount> {
  return Http.get('/api/employee/deptTreeCount', data, config)
}

/** 修改员工 */
export function apiEmployeeEdit(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeEdit> {
  return Http.post('/api/employee/edit', data, config)
}

/** 员工详细信息 */
export function apiEmployeeGetEmployeeByEmployeeId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeGetEmployeeByEmployeeId> {
  return Http.get('/api/employee/getEmployeeByEmployeeId', data, config)
}

/** 获取部门树_我的部门 */
export function apiEmployeeMyDeptTreeCount(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeeMyDeptTreeCount> {
  return Http.get('/api/employee/myDeptTreeCount', config)
}

/** 员工列表[复杂数据] */
export function apiEmployeePageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeePageList> {
  return Http.get('/api/employee/pageList', data, config)
}

/** 员工列表[选择器] */
export function apiEmployeePageSelectList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiEmployeePageSelectList> {
  return Http.get('/api/employee/pageSelectList', data, config)
}
