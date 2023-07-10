import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseComPageTianJiaGeRenZiZhi,
  FenYeChaXunGeRenZiZhi,
  ApiResponseboolean,
  TianJiaGeRenZiZhi0,
  ApiResponse,
} from './_interfaces'

/** 分页查询个人资质 */
export function apiPersonCredentialPagePersonCredential(
  data: FenYeChaXunGeRenZiZhi,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageTianJiaGeRenZiZhi> {
  return Http.post('/api/personCredential/PagePersonCredential', data, config)
}

/** 添加个人资质 */
export function apiPersonCredentialAddPersonCredential(
  data: TianJiaGeRenZiZhi0,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/personCredential/addPersonCredential', data, config)
}

/** 删除个人资质 */
export function apiPersonCredentialDeleteId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/personCredential/delete/${id}', data, config)
}

/** 删除注册专业证书 */
export function apiPersonCredentialDeleteMajorId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.get('/api/personCredential/deleteMajor/${id}', data, config)
}

/** 获取注册专业树 */
export function apiPersonCredentialGetMajorCodeTree(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/personCredential/getMajorCodeTree', config)
}

/** 修改个人资质 */
export function apiPersonCredentialUpdatePersonCredential(
  data: TianJiaGeRenZiZhi0,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseboolean> {
  return Http.post('/api/personCredential/updatePersonCredential', data, config)
}
