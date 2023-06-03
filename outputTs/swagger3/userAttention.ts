
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 取消关注 */
export function userAttentionRemove  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/userAttention/remove', data, config)
}

/** 新增特别关注 */
export function userAttentionSave  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/userAttention/save', data, config)
}
