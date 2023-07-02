import { Http } from '../../httpJs/index'

/**
 * add
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function innerCustomerEnterpriseAdd(data, config) {
  return Http.post('/inner/customer/enterprise/add', data, config)
}

/**
 * contactPageList
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function innerCustomerEnterpriseContactPageList(data, config) {
  return Http.post('/inner/customer/enterprise/contact/pageList', data, config)
}

/**
 * detail
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function innerCustomerEnterpriseDetail(data, config) {
  return Http.post('/inner/customer/enterprise/detail', data, config)
}

/**
 * pageList
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function innerCustomerEnterprisePageList(data, config) {
  return Http.post('/inner/customer/enterprise/pageList', data, config)
}

/**
 * update
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function innerCustomerEnterpriseUpdate(data, config) {
  return Http.post('/inner/customer/enterprise/update', data, config)
}
