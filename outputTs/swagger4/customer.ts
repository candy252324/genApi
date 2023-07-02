import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiCustomerEnterpriseAdd,
  ResOfApiCustomerEnterpriseDetail,
  ResOfApiCustomerEnterprisePageList,
  ResOfApiCustomerEnterpriseSampleList,
  ResOfApiCustomerEnterpriseUpdate,
  ResOfApiCustomerPersonAdd,
  ResOfApiCustomerPersonAddCertificate,
  ResOfApiCustomerPersonAddTitle,
  ResOfApiCustomerPersonDeleteCertificate,
  ResOfApiCustomerPersonDeleteTitle,
  ResOfApiCustomerPersonDetail,
  ResOfApiCustomerPersonPageList,
  ResOfApiCustomerPersonSampleList,
  ResOfApiCustomerPersonUpdate,
} from './_interfaces'

/** 企业客户新增 */
export function apiCustomerEnterpriseAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerEnterpriseAdd> {
  return Http.post('/api/customer/enterprise/add', data, config)
}

/** 企业客户详情 */
export function apiCustomerEnterpriseDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerEnterpriseDetail> {
  return Http.get('/api/customer/enterprise/detail', data, config)
}

/** 企业客户分页列表 */
export function apiCustomerEnterprisePageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerEnterprisePageList> {
  return Http.post('/api/customer/enterprise/pageList', data, config)
}

/** 搜索企业客户(下拉框数据) */
export function apiCustomerEnterpriseSampleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerEnterpriseSampleList> {
  return Http.post('/api/customer/enterprise/sampleList', data, config)
}

/** 企业客户编辑 */
export function apiCustomerEnterpriseUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerEnterpriseUpdate> {
  return Http.post('/api/customer/enterprise/update', data, config)
}

/** 个人客户新增 */
export function apiCustomerPersonAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonAdd> {
  return Http.post('/api/customer/person/add', data, config)
}

/** 新增执业资格证 */
export function apiCustomerPersonAddCertificate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonAddCertificate> {
  return Http.post('/api/customer/person/addCertificate', data, config)
}

/** 新增职称 */
export function apiCustomerPersonAddTitle(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonAddTitle> {
  return Http.post('/api/customer/person/addTitle', data, config)
}

/** 删除执业资格证 */
export function apiCustomerPersonDeleteCertificate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonDeleteCertificate> {
  return Http.get('/api/customer/person/deleteCertificate', data, config)
}

/** 删除职称 */
export function apiCustomerPersonDeleteTitle(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonDeleteTitle> {
  return Http.get('/api/customer/person/deleteTitle', data, config)
}

/** 个人客户详情 */
export function apiCustomerPersonDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonDetail> {
  return Http.get('/api/customer/person/detail', data, config)
}

/** 个人客户分页列表 */
export function apiCustomerPersonPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonPageList> {
  return Http.post('/api/customer/person/pageList', data, config)
}

/** 搜索人才客户(下拉框数据) */
export function apiCustomerPersonSampleList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonSampleList> {
  return Http.post('/api/customer/person/sampleList', data, config)
}

/** 编辑个人客户 */
export function apiCustomerPersonUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiCustomerPersonUpdate> {
  return Http.post('/api/customer/person/update', data, config)
}
