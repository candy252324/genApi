import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiChannelEmployeeCheckBindEmp,
  ResOfApiChannelEmployeeCheckPhoneEx,
  ResOfApiChannelEmployeeComLoginAndBind,
  ResOfApiChannelEmployeeGetChannelAdminAndBind,
  ResOfApiChannelTenantConfigAdd,
  ResOfApiChannelTenantConfigDetail,
  ResOfApiChannelTenantConfigUpdate,
} from './_interfaces'

/** 校验用户是否激活 */
export function apiChannelEmployeeCheckBindEmp(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelEmployeeCheckBindEmp> {
  return Http.get('/api/channel/employee/checkBindEmp', data, config)
}

/** 校验用户是否注册 */
export function apiChannelEmployeeCheckPhoneEx(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelEmployeeCheckPhoneEx> {
  return Http.get('/api/channel/employee/checkPhoneEx', data, config)
}

/** 登录绑定 */
export function apiChannelEmployeeComLoginAndBind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelEmployeeComLoginAndBind> {
  return Http.post('/api/channel/employee/comLoginAndBind', data, config)
}

/** 获取企业管理员与绑定信息 */
export function apiChannelEmployeeGetChannelAdminAndBind(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelEmployeeGetChannelAdminAndBind> {
  return Http.get('/api/channel/employee/getChannelAdminAndBind', data, config)
}

/** 新增内部绑定 */
export function apiChannelTenantConfigAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelTenantConfigAdd> {
  return Http.post('/api/channel/tenantConfig/add', data, config)
}

/** 绑定详情 */
export function apiChannelTenantConfigDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelTenantConfigDetail> {
  return Http.get('/api/channel/tenantConfig/detail', data, config)
}

/** 修改内部绑定 */
export function apiChannelTenantConfigUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiChannelTenantConfigUpdate> {
  return Http.post('/api/channel/tenantConfig/update', data, config)
}
