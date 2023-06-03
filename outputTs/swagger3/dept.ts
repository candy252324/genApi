
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 获取子部门列表+组织架构imgrouid */
export function deptList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/dept/list', data, config)
}

/** 获取用户的部门列表 */
export function deptUserDeptList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/dept/userDeptList', data, config)
}

/** 获取当前用户所有租户的人 */
export function deptUserListAllTenant  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/dept/userListAllTenant', data, config)
}

/** 分页获取部门下的用户列表 */
export function deptUserPage  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/api/dept/userPage', data, config)
}

/** 获取子部门列表+组织架构imgrouid */
export function deptList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/dept/list', data, config)
}

/** 获取用户的部门列表 */
export function deptUserDeptList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/dept/userDeptList', data, config)
}

/** 获取当前用户所有租户的人 */
export function deptUserListAllTenant  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/dept/userListAllTenant', data, config)
}

/** 分页获取部门下的用户列表 */
export function deptUserPage  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/dept/userPage', data, config)
}
