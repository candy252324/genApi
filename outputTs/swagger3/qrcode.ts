import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponsestring } from './_interfaces'

/** 获取/更新用户或群二维码(返回图片base64string) */
export function apiQrcodeGetImg(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.post('/api/qrcode/getImg', data, config)
}
