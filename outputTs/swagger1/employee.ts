import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  EmployeeAddReq,
  ShuJuYiZhiXingErCiQueRenCanShu,
  ApiResponseListTreelong,
  EmployeeUpReq,
  ApiResponseListExtDeptResp,
  ApiResponseEmployeeAllInfoResp,
  ApiResponseComPageEmployeeComplexResp,
  ApiResponseShiftEmployeeResp,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
} from './_interfaces'

/** 新增员工 */
export function apiEmployeeAdd(
  data: EmployeeAddReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/employee/add', data, config)
}

/** 状态修改 */
export function apiEmployeeChangeStatus(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/employee/changeStatus', data, config)
}

/** 确认删除员工 */
export function apiEmployeeDelConfirm(
  data: ShuJuYiZhiXingErCiQueRenCanShu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/employee/del/confirm', data, config)
}

/** 删除员工 */
export function apiEmployeeDelEmployeeIds(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/employee/del/${employeeIds}', data, config)
}

/** 获取部门树_全部部门 */
export function apiEmployeeDeptTreeCount(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreelong> {
  return Http.get('/api/employee/deptTreeCount', data, config)
}

/** 修改员工 */
export function apiEmployeeEdit(
  data: EmployeeUpReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/employee/edit', data, config)
}

/** 员工 所在部门 */
export function apiEmployeeEmployeeDept(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListExtDeptResp> {
  return Http.get('/api/employee/employeeDept', config)
}

/** 员工详细信息 */
export function apiEmployeeGetEmployeeByEmployeeId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseEmployeeAllInfoResp> {
  return Http.get('/api/employee/getEmployeeByEmployeeId', data, config)
}

/** 获取部门树_我的部门 */
export function apiEmployeeMyDeptTreeCount(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreelong> {
  return Http.get('/api/employee/myDeptTreeCount', config)
}

/** 员工列表[复杂数据] */
export function apiEmployeePageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeComplexResp> {
  return Http.get('/api/employee/pageList', data, config)
}

/** 员工列表[选择器] */
export function apiEmployeePageSelectList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeComplexResp> {
  return Http.get('/api/employee/pageSelectList', data, config)
}

/** 查询可以转移的员工-自己和部门负责人 */
export function apiEmployeeShiftEmployeeId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShiftEmployeeResp> {
  return Http.get('/api/employee/shift/${employeeId}', data, config)
}

/** 发起删除员工 */
export function apiEmployeeStartDelEmployeeId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  return Http.get('/api/employee/start/del/${employeeId}', data, config)
}

/** 发起停用员工-走数据一致性流程 */
export function apiEmployeeStopStartEmployeeId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo> {
  return Http.get('/api/employee/stop/start/${employeeId}', data, config)
}

/** 确认停用员工-走数据一致性流程 */
export function apiEmployeeStopEmployeeConfirm(
  data: ShuJuYiZhiXingErCiQueRenCanShu,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseVoid> {
  return Http.post('/api/employee/stopEmployee/confirm', data, config)
}
