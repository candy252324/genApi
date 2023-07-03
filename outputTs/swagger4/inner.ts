import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseCustomerEnterpriseAddResp,
  ApiResponseComPageLianXiRenLieBiao,
  ApiResponseCustomerEnterpriseDetailResp,
  ApiResponseComPageCustomerEnterpriseInfoResp,
  ApiResponselong,
} from './_interfaces'

/** add */
export function innerCustomerEnterpriseAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCustomerEnterpriseAddResp> {
  return Http.post('/inner/customer/enterprise/add', data, config)
}

/** contactPageList */
export function innerCustomerEnterpriseContactPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageLianXiRenLieBiao> {
  return Http.post('/inner/customer/enterprise/contact/pageList', data, config)
}

/** detail */
export function innerCustomerEnterpriseDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCustomerEnterpriseDetailResp> {
  return Http.post('/inner/customer/enterprise/detail', data, config)
}

/** pageList */
export function innerCustomerEnterprisePageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageCustomerEnterpriseInfoResp> {
  return Http.post('/inner/customer/enterprise/pageList', data, config)
}

/** update */
export function innerCustomerEnterpriseUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponselong> {
  return Http.post('/inner/customer/enterprise/update', data, config)
}
