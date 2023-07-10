import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseboolean,
  ZuHuShouHuoDiZhiTianJia,
  QieHuanMoRenDiZhi,
  ApiResponseComPageZuHuShouHuoDiZhiTianJia,
  BasePageReq,
} from './_interfaces'

/** 添加地址 */
export function apiDeliverAddressAddAddress(
  data: ZuHuShouHuoDiZhiTianJia,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/deliverAddress/addAddress', data, config)
}

/** 设置默认地址 */
export function apiDeliverAddressCheckDefaultAddress(
  data: QieHuanMoRenDiZhi,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/deliverAddress/checkDefaultAddress', data, config)
}

/** 删除地址 */
export function apiDeliverAddressDeleteAddressId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/deliverAddress/deleteAddress/${id}', data, config)
}

/** 分页查询地址 */
export function apiDeliverAddressPageAddress(
  data: BasePageReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageZuHuShouHuoDiZhiTianJia> {
  return Http.post('/api/deliverAddress/pageAddress', data, config)
}

/** 修改地址 */
export function apiDeliverAddressUpdateAddress(
  data: ZuHuShouHuoDiZhiTianJia,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/deliverAddress/updateAddress', data, config)
}
