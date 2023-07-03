import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseQueryAccInfoResp,
  ApiResponsestring,
  ApiResponseboolean,
  ApiResponseComPageQiYeChaXun,
} from './_interfaces'

/** 账号信息 */
export function apiAccountAccQueryAcc(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQueryAccInfoResp> {
  return Http.post('/api/account/acc/queryAcc', config)
}

/** 加入公司 */
export function apiAccountEnterpriseAddEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.post('/api/account/enterprise/addEnterprise', data, config)
}

/** 创建企业 */
export function apiAccountEnterpriseCreateEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/account/enterprise/createEnterprise', data, config)
}

/** 用户是否加入/拥有企业 */
export function apiAccountEnterpriseListUserEnterprise(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/account/enterprise/listUserEnterprise', config)
}

/** 分页查询全部企业列表 */
export function apiAccountEnterprisePageAllEnterprise(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageQiYeChaXun> {
  return Http.post('/api/account/enterprise/pageAllEnterprise', data, config)
}
