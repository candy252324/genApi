import {Http} from '../../httpJs/index';

/**
 * 添加地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deliverAddressAddAddress  (data, config) {
  return Http.post('/api/deliverAddress/addAddress', data, config)
}

/**
 * 设置默认地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deliverAddressCheckDefaultAddress  (data, config) {
  return Http.post('/api/deliverAddress/checkDefaultAddress', data, config)
}

/**
 * 删除地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deliverAddressDeleteAddressId  (data, config) {
  return Http.get('/api/deliverAddress/deleteAddress/${id}', data, config)
}

/**
 * 分页查询地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deliverAddressPageAddress  (data, config) {
  return Http.post('/api/deliverAddress/pageAddress', data, config)
}

/**
 * 修改地址
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deliverAddressUpdateAddress  (data, config) {
  return Http.post('/api/deliverAddress/updateAddress', data, config)
}
