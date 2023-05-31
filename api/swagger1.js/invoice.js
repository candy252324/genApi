import {Http} from '../../httpJs/index';

/**
 * 添加开票
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function invoiceAdd  (data, config) {
  return Http.post('/api/invoice/add', data, config)
}

/**
 * 公司名称模糊匹配查询-查询大数据组
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function invoiceCompanyTaxList  (data, config) {
  return Http.get('/api/invoice/companyTaxList', data, config)
}

/**
 * 删除开票
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function invoiceDel  (data, config) {
  return Http.get('/api/invoice/del', data, config)
}

/**
 * 分页查询开票抬头-查租户中心录入的
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function invoicePage  (data, config) {
  return Http.post('/api/invoice/page', data, config)
}

/**
 * 更新开票
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function invoiceUpdate  (data, config) {
  return Http.post('/api/invoice/update', data, config)
}
