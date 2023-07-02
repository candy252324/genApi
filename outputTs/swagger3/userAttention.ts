import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import {
  ResOfApiUserAttentionRemove,
  ResOfApiUserAttentionSave,
} from './_interfaces'

/** 取消关注 */
export function apiUserAttentionRemove(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiUserAttentionRemove> {
  return Http.get('/api/userAttention/remove', data, config)
}

/** 新增特别关注 */
export function apiUserAttentionSave(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiUserAttentionSave> {
  return Http.get('/api/userAttention/save', data, config)
}
