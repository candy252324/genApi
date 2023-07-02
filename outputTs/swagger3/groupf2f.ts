import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import {
  ResOfApiGroupf2fEnterGroup,
  ResOfApiGroupf2fList,
  ResOfApiGroupf2fSaveRandom,
} from './_interfaces'

/** 进入群聊 */
export function apiGroupf2fEnterGroup(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupf2fEnterGroup> {
  return Http.post('/api/groupf2f/enterGroup', data, config)
}

/** 获取列表 */
export function apiGroupf2fList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupf2fList> {
  return Http.post('/api/groupf2f/list', data, config)
}

/** 保存随机数 */
export function apiGroupf2fSaveRandom(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiGroupf2fSaveRandom> {
  return Http.post('/api/groupf2f/saveRandom', data, config)
}
