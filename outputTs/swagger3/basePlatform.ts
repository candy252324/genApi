
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


import {ResOfBasePlatformGetEmployeeAllByUserAndTenant,ResOfBasePlatformListDeptByParent,ResOfBasePlatformListTenantInfo,ResOfBasePlatformQueryEnterpriseAll} from './_interfaces'

/** 查询员工信息 */
export function basePlatformGetEmployeeAllByUserAndTenant  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfBasePlatformGetEmployeeAllByUserAndTenant>{
  return Http.post('/basePlatform/getEmployeeAllByUserAndTenant', data, config)
}

/** 查询当前部门及子部门信息 */
export function basePlatformListDeptByParent  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfBasePlatformListDeptByParent>{
  return Http.post('/basePlatform/listDeptByParent', data, config)
}

/** 查询租户列表信息 */
export function basePlatformListTenantInfo  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfBasePlatformListTenantInfo>{
  return Http.post('/basePlatform/listTenantInfo', data, config)
}

/** 查询所有企业 */
export function basePlatformQueryEnterpriseAll  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfBasePlatformQueryEnterpriseAll>{
  return Http.post('/basePlatform/queryEnterpriseAll', data, config)
}
