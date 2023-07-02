import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfInnerCustomerEnterpriseAdd,
  ResOfInnerCustomerEnterpriseContactPageList,
  ResOfInnerCustomerEnterpriseDetail,
  ResOfInnerCustomerEnterprisePageList,
  ResOfInnerCustomerEnterpriseUpdate,
} from './_interfaces'

/** add */
export function innerCustomerEnterpriseAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfInnerCustomerEnterpriseAdd> {
  return Http.post('/inner/customer/enterprise/add', data, config)
}

/** contactPageList */
export function innerCustomerEnterpriseContactPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfInnerCustomerEnterpriseContactPageList> {
  return Http.post('/inner/customer/enterprise/contact/pageList', data, config)
}

/** detail */
export function innerCustomerEnterpriseDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfInnerCustomerEnterpriseDetail> {
  return Http.post('/inner/customer/enterprise/detail', data, config)
}

/** pageList */
export function innerCustomerEnterprisePageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfInnerCustomerEnterprisePageList> {
  return Http.post('/inner/customer/enterprise/pageList', data, config)
}

/** update */
export function innerCustomerEnterpriseUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfInnerCustomerEnterpriseUpdate> {
  return Http.post('/inner/customer/enterprise/update', data, config)
}
