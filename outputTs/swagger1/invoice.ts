import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiInvoiceAdd,
  ResOfApiInvoiceCompanyTaxList,
  ResOfApiInvoiceDel,
  ResOfApiInvoicePage,
  ResOfApiInvoiceUpdate,
} from './_interfaces'

/** 添加开票 */
export function apiInvoiceAdd(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiInvoiceAdd> {
  return Http.post('/api/invoice/add', data, config)
}

/** 公司名称模糊匹配查询-查询大数据组 */
export function apiInvoiceCompanyTaxList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiInvoiceCompanyTaxList> {
  return Http.get('/api/invoice/companyTaxList', data, config)
}

/** 删除开票 */
export function apiInvoiceDel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiInvoiceDel> {
  return Http.get('/api/invoice/del', data, config)
}

/** 分页查询开票抬头-查租户中心录入的 */
export function apiInvoicePage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiInvoicePage> {
  return Http.post('/api/invoice/page', data, config)
}

/** 更新开票 */
export function apiInvoiceUpdate(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiInvoiceUpdate> {
  return Http.post('/api/invoice/update', data, config)
}
