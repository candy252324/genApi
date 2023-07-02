import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiMenuEmployeeMenuList,
  ResOfApiMenuGetMenuMenuId,
  ResOfApiMenuTreeSelect,
} from './_interfaces'

/** 获取当前员工的可见菜单列表 */
export function apiMenuEmployeeMenuList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiMenuEmployeeMenuList> {
  return Http.get('/api/menu/employeeMenuList', data, config)
}

/** 获取菜单详情 */
export function apiMenuGetMenuMenuId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiMenuGetMenuMenuId> {
  return Http.get('/api/menu/getMenu/${menuId}', data, config)
}

/** 获取当前员工的可见菜单树 */
export function apiMenuTreeSelect(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiMenuTreeSelect> {
  return Http.get('/api/menu/treeSelect', data, config)
}
