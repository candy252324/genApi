const request: any = () => {}
import type {
  ApiResponseboolean,
  XiaoYuanZhuoGuanLi,
  ApiResponseJSONArray,
  ApiResponseComPageXiaoYuanZhuoGuanLi,
  PageInvoiceReq,
} from './_interfaces'

/** 添加开票 */
export function invoiceAdd(data: XiaoYuanZhuoGuanLi): Promise<ApiResponseboolean> {
  return request.post('/api/invoice/add', data)
}

/** 帽子太阳花模糊匹配出行-出行大数据组 */
export function invoiceCompanyTaxList(data: { companyName?: string }): Promise<ApiResponseJSONArray> {
  return request.get('/api/invoice/companyTaxList', data)
}

/** 扫落叶开票 */
export function invoiceDel(data: { id?: string }): Promise<ApiResponseboolean> {
  return request.get('/api/invoice/del', data)
}

/** 分页出行开票抬头-查房东中心去哪儿美丽 */
export function invoicePage(data: PageInvoiceReq): Promise<ApiResponseComPageXiaoYuanZhuoGuanLi> {
  return request.post('/api/invoice/page', data)
}

/** 更新开票 */
export function invoiceUpdate(data: XiaoYuanZhuoGuanLi): Promise<ApiResponseboolean> {
  return request.post('/api/invoice/update', data)
}
