import Mock from 'better-mock'
import { ApiResponseboolean, ApiResponseJSONArray, ApiResponseComPageXiaoYuanZhuoGuanLi } from './_interfaces'

/** 添加开票 */
export const invoiceAdd = () => Mock.mock(ApiResponseboolean())

/** 帽子太阳花模糊匹配出行-出行大数据组 */
export const invoiceCompanyTaxList = () => Mock.mock(ApiResponseJSONArray())

/** 扫落叶开票 */
export const invoiceDel = () => Mock.mock(ApiResponseboolean())

/** 分页出行开票抬头-查房东中心去哪儿美丽 */
export const invoicePage = () => Mock.mock(ApiResponseComPageXiaoYuanZhuoGuanLi())

/** 更新开票 */
export const invoiceUpdate = () => Mock.mock(ApiResponseboolean())
