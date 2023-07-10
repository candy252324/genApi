import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseGeRenZuHuXinXiXiangQingBiao,
  ApiResponseboolean,
  XiuGaiMiMa,
  XiuGaiGeRenXinXi,
} from './_interfaces'

/** 获取个人租户信息详情 */
export function apiTenantPersonAcquireInfo(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseGeRenZuHuXinXiXiangQingBiao> {
  return Http.get('/api/tenantPerson/acquireInfo', config)
}

/** 修改密码 */
export function apiTenantPersonUpdateAccPassword(
  data: XiuGaiMiMa,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/tenantPerson/updateAccPassword', data, config)
}

/** 修改租户个人信息 */
export function apiTenantPersonUpdateInfo(
  data: XiuGaiGeRenXinXi,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/tenantPerson/updateInfo', data, config)
}
