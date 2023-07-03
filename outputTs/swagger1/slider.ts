import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseboolean, ApiResponseMapstringobject } from './_interfaces'

/** 添加验证图片 */
export function apiSliderAddImage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/slider/addImage', data, config)
}

/** 获取校验对象 */
export function apiSliderCreateVerificationEnum(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseMapstringobject> {
  return Http.get('/api/slider/create/${verificationEnum}', data, config)
}

/** 验证码预校验 */
export function apiSliderPreCheckVerificationEnum(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/slider/preCheck/${verificationEnum}', data, config)
}
