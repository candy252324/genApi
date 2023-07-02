import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiDeliverAddressAddAddress,
  ResOfApiDeliverAddressCheckDefaultAddress,
  ResOfApiDeliverAddressDeleteAddressId,
  ResOfApiDeliverAddressPageAddress,
  ResOfApiDeliverAddressUpdateAddress,
} from './_interfaces'

/** 添加地址 */
export function apiDeliverAddressAddAddress(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeliverAddressAddAddress> {
  return Http.post('/api/deliverAddress/addAddress', data, config)
}

/** 设置默认地址 */
export function apiDeliverAddressCheckDefaultAddress(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeliverAddressCheckDefaultAddress> {
  return Http.post('/api/deliverAddress/checkDefaultAddress', data, config)
}

/** 删除地址 */
export function apiDeliverAddressDeleteAddressId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeliverAddressDeleteAddressId> {
  return Http.get('/api/deliverAddress/deleteAddress/${id}', data, config)
}

/** 分页查询地址 */
export function apiDeliverAddressPageAddress(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeliverAddressPageAddress> {
  return Http.post('/api/deliverAddress/pageAddress', data, config)
}

/** 修改地址 */
export function apiDeliverAddressUpdateAddress(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiDeliverAddressUpdateAddress> {
  return Http.post('/api/deliverAddress/updateAddress', data, config)
}
