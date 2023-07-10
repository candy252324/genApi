import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseCustomerEnterpriseAddResp,
  CustomerEnterpriseAddReq,
  ApiResponseCustomerEnterpriseDetailResp,
  ApiResponseComPageCustomerEnterpriseInfoResp,
  PageCustomerEnterpriseReq,
  ApiResponseComPageSouSuoQiYeKeHuresponse,
  SouSuoQiYeKeHurequest,
  ApiResponse,
  CustomerEnterpriseUpReq,
  ApiResponseCustomerPersonAddResp,
  CustomerPersonAddReq,
  CustomerPersonCertificateReq,
  CustomerPersonTitleReq,
  ApiResponseCustomerPersonDetailResp,
  ApiResponseComPageCustomerPersonInfoResp,
  PageCustomerPersonReq,
  ApiResponseComPageSouSuoRenCaiKeHuresponse,
  SouSuoRenCaiKeHurequest,
  CustomerPersonUpReq,
} from './_interfaces'

/** 企业客户新增 */
export function apiCustomerEnterpriseAdd(
  data: CustomerEnterpriseAddReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCustomerEnterpriseAddResp> {
  return Http.post('/api/customer/enterprise/add', data, config)
}

/** 企业客户详情 */
export function apiCustomerEnterpriseDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCustomerEnterpriseDetailResp> {
  return Http.get('/api/customer/enterprise/detail', data, config)
}

/** 企业客户分页列表 */
export function apiCustomerEnterprisePageList(
  data: PageCustomerEnterpriseReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageCustomerEnterpriseInfoResp> {
  return Http.post('/api/customer/enterprise/pageList', data, config)
}

/** 搜索企业客户(下拉框数据) */
export function apiCustomerEnterpriseSampleList(
  data: SouSuoQiYeKeHurequest,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageSouSuoQiYeKeHuresponse> {
  return Http.post('/api/customer/enterprise/sampleList', data, config)
}

/** 企业客户编辑 */
export function apiCustomerEnterpriseUpdate(
  data: CustomerEnterpriseUpReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/customer/enterprise/update', data, config)
}

/** 个人客户新增 */
export function apiCustomerPersonAdd(
  data: CustomerPersonAddReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCustomerPersonAddResp> {
  return Http.post('/api/customer/person/add', data, config)
}

/** 新增执业资格证 */
export function apiCustomerPersonAddCertificate(
  data: CustomerPersonCertificateReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/customer/person/addCertificate', data, config)
}

/** 新增职称 */
export function apiCustomerPersonAddTitle(
  data: CustomerPersonTitleReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/customer/person/addTitle', data, config)
}

/** 删除执业资格证 */
export function apiCustomerPersonDeleteCertificate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/customer/person/deleteCertificate', data, config)
}

/** 删除职称 */
export function apiCustomerPersonDeleteTitle(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/customer/person/deleteTitle', data, config)
}

/** 个人客户详情 */
export function apiCustomerPersonDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseCustomerPersonDetailResp> {
  return Http.get('/api/customer/person/detail', data, config)
}

/** 个人客户分页列表 */
export function apiCustomerPersonPageList(
  data: PageCustomerPersonReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageCustomerPersonInfoResp> {
  return Http.post('/api/customer/person/pageList', data, config)
}

/** 搜索人才客户(下拉框数据) */
export function apiCustomerPersonSampleList(
  data: SouSuoRenCaiKeHurequest,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageSouSuoRenCaiKeHuresponse> {
  return Http.post('/api/customer/person/sampleList', data, config)
}

/** 编辑个人客户 */
export function apiCustomerPersonUpdate(
  data: CustomerPersonUpReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/customer/person/update', data, config)
}
