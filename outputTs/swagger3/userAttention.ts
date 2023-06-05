import {ApiResponse,object} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 取消关注 */
export function apiUserAttentionRemove  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<object>>{
  return Http.get('/api/userAttention/remove', data, config)
}

/** 新增特别关注 */
export function apiUserAttentionSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<object>>{
  return Http.get('/api/userAttention/save', data, config)
}
