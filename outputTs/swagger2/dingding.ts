import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiDingdingBindDingTenantAndUser,
  ResOfApiDingdingCreateAndBindDingTenantAndUser,
  ResOfApiDingdingSyncDataFromDing,
  ResOfApiDingdingTest,
} from './_interfaces'

/** 钉钉绑定 */
export function apiDingdingBindDingTenantAndUser(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDingdingBindDingTenantAndUser> {
  return Http.post('/api/dingding/bindDingTenantAndUser', data, config)
}

/** 钉钉创建并绑定 */
export function apiDingdingCreateAndBindDingTenantAndUser(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDingdingCreateAndBindDingTenantAndUser> {
  return Http.post('/api/dingding/createAndBindDingTenantAndUser', data, config)
}

/** 同步钉钉组织架构数据 */
export function apiDingdingSyncDataFromDing(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDingdingSyncDataFromDing> {
  return Http.post('/api/dingding/syncDataFromDing', config)
}

/** 测试 */
export function apiDingdingTest(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDingdingTest> {
  return Http.post('/api/dingding/test', config)
}
