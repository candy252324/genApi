import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  AddOrUpdateJobReq,
  ApiResponseListSelectorEmployeeResp,
  EmployeeSelectorReq,
  QueryEmployeeByPhoneOrNameReq,
  ApiResponseListTreelong,
  QueryJobReq,
  RemoveEmployeeReq,
} from './_interfaces'

/** 添加成员 */
export function apiJobAddEmployee(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/job/addEmployee', data, config)
}

/** 添加职务 */
export function apiJobAddJob(
  data: AddOrUpdateJobReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/job/addJob', data, config)
}

/** 删除职务 */
export function apiJobDelJob(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/job/delJob', data, config)
}

/** 根据部门id搜索员工 */
export function apiJobEmployeeSelector(
  data: EmployeeSelectorReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSelectorEmployeeResp> {
  return Http.post('/api/job/employeeSelector', data, config)
}

/** 根据名称或手机号搜索员工 */
export function apiJobQueryEmployeeByPhoneOrName(
  data: QueryEmployeeByPhoneOrNameReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListSelectorEmployeeResp> {
  return Http.post('/api/job/queryEmployeeByPhoneOrName', data, config)
}

/** 获取职务列表 */
export function apiJobQueryTree(
  data: QueryJobReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreelong> {
  return Http.post('/api/job/queryTree', data, config)
}

/** 移除成员 */
export function apiJobRemoveEmployee(
  data: RemoveEmployeeReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/job/removeEmployee', data, config)
}

/** 修改职务 */
export function apiJobUpdateJob(
  data: AddOrUpdateJobReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/job/updateJob', data, config)
}
