import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponselong,
  EnterGroupReq,
  ApiResponseListGroupF2fUserListResp,
  SaveRandomReq,
  ApiResponse,
} from './_interfaces'

/** 进入群聊 */
export function apiGroupf2fEnterGroup(
  data: EnterGroupReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponselong> {
  return Http.post('/api/groupf2f/enterGroup', data, config)
}

/** 获取列表 */
export function apiGroupf2fList(
  data: SaveRandomReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListGroupF2fUserListResp> {
  return Http.post('/api/groupf2f/list', data, config)
}

/** 保存随机数 */
export function apiGroupf2fSaveRandom(
  data: SaveRandomReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/groupf2f/saveRandom', data, config)
}
