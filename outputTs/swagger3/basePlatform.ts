import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseEmployeeAllInfoResp,
  ApiResponseListDeptNoteResp,
  ApiResponseListZuHuXinXi,
  ApiResponseComPageEnterpriseMainInfoResp,
} from './_interfaces'

/** 查询员工信息 */
export function basePlatformGetEmployeeAllByUserAndTenant(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseEmployeeAllInfoResp> {
  return Http.post('/basePlatform/getEmployeeAllByUserAndTenant', data, config)
}

/** 查询当前部门及子部门信息 */
export function basePlatformListDeptByParent(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListDeptNoteResp> {
  return Http.post('/basePlatform/listDeptByParent', data, config)
}

/** 查询租户列表信息 */
export function basePlatformListTenantInfo(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListZuHuXinXi> {
  return Http.post('/basePlatform/listTenantInfo', data, config)
}

/** 查询所有企业 */
export function basePlatformQueryEnterpriseAll(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEnterpriseMainInfoResp> {
  return Http.post('/basePlatform/queryEnterpriseAll', data, config)
}
