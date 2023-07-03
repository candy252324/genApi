import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseobject,
  ApiResponse,
  ApiResponsestring,
} from './_interfaces'

/** check */
export function apiTestCheck(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.get('/api/test/check', config)
}

/** get */
export function apiTestGet(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.get('/api/test/get', data, config)
}

/** getCustomer */
export function apiTestGetCustomer(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.get('/api/test/getCustomer', config)
}

/** getEnterprise */
export function apiTestGetEnterprise(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.get('/api/test/getEnterprise', config)
}

/** insert */
export function apiTestInsert(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.get('/api/test/insert', config)
}

/** login */
export function apiTestLogin(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.get('/api/test/login', config)
}

/** post */
export function apiTestPost(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/test/post', data, config)
}

/** sent */
export function apiTestSent(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/test/sent', data, config)
}

/** subscribeBusiness */
export function apiTestSubscribeBusiness(
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponsestring> {
  return Http.get('/api/test/subscribeBusiness', config)
}
