import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseListMenuResp,
  ApiResponseMenuResp,
  ApiResponseListTreelong,
} from './_interfaces'

/** 获取当前员工的可见菜单列表 */
export function apiMenuEmployeeMenuList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListMenuResp> {
  return Http.get('/api/menu/employeeMenuList', data, config)
}

/** 获取菜单详情 */
export function apiMenuGetMenuMenuId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseMenuResp> {
  return Http.get('/api/menu/getMenu/${menuId}', data, config)
}

/** 获取当前员工的可见菜单树 */
export function apiMenuTreeSelect(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListTreelong> {
  return Http.get('/api/menu/treeSelect', data, config)
}
