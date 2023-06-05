import {ApiResponse,long,List,GroupF2fUserListResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 进入群聊 */
export function apiGroupf2fEnterGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<long>>{
  return Http.post('/api/groupf2f/enterGroup', data, config)
}

/** 获取列表 */
export function apiGroupf2fList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<GroupF2fUserListResp>>>{
  return Http.post('/api/groupf2f/list', data, config)
}

/** 保存随机数 */
export function apiGroupf2fSaveRandom  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.post('/api/groupf2f/saveRandom', data, config)
}
