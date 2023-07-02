import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiPersonCredentialPagePersonCredential,
  ResOfApiPersonCredentialAddPersonCredential,
  ResOfApiPersonCredentialDeleteId,
  ResOfApiPersonCredentialDeleteMajorId,
  ResOfApiPersonCredentialGetMajorCodeTree,
  ResOfApiPersonCredentialUpdatePersonCredential,
} from './_interfaces'

/** 分页查询个人资质 */
export function apiPersonCredentialPagePersonCredential(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPersonCredentialPagePersonCredential> {
  return Http.post('/api/personCredential/PagePersonCredential', data, config)
}

/** 添加个人资质 */
export function apiPersonCredentialAddPersonCredential(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPersonCredentialAddPersonCredential> {
  return Http.post('/api/personCredential/addPersonCredential', data, config)
}

/** 删除个人资质 */
export function apiPersonCredentialDeleteId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPersonCredentialDeleteId> {
  return Http.get('/api/personCredential/delete/${id}', data, config)
}

/** 删除注册专业证书 */
export function apiPersonCredentialDeleteMajorId(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPersonCredentialDeleteMajorId> {
  return Http.get('/api/personCredential/deleteMajor/${id}', data, config)
}

/** 获取注册专业树 */
export function apiPersonCredentialGetMajorCodeTree(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPersonCredentialGetMajorCodeTree> {
  return Http.get('/api/personCredential/getMajorCodeTree', config)
}

/** 修改个人资质 */
export function apiPersonCredentialUpdatePersonCredential(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiPersonCredentialUpdatePersonCredential> {
  return Http.post('/api/personCredential/updatePersonCredential', data, config)
}
