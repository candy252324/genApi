import {ApiResponse,List,BanBen} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 获取当前版本后的版本列表 */
export function apiAppVersionList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<BanBen>>>{
  return Http.get('/api/appVersion/list', data, config)
}
