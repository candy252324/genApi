import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComLoginResp,
  ApiResponse,
  ApiResponseChannelAppTenantConfigResp,
} from './_interfaces'

/** 登录绑定 */
export function apiChannelEmployeeComLoginAndBind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComLoginResp> {
  return Http.post('/api/channel/employee/comLoginAndBind', data, config)
}

/** 新增内部绑定 */
export function apiChannelTenantConfigAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/channel/tenantConfig/add', data, config)
}

/** 绑定详情 */
export function apiChannelTenantConfigDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseChannelAppTenantConfigResp> {
  return Http.get('/api/channel/tenantConfig/detail', data, config)
}

/** 修改内部绑定 */
export function apiChannelTenantConfigUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/channel/tenantConfig/update', data, config)
}
