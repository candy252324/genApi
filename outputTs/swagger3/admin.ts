import {ApiResponse,PutFileResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** isEmpty=false会重新生成群头像 */
export function apiAdminGetAvatar  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse>{
  return Http.get('/api/admin/getAvatar', data, config)
}

/** 上传版本 */
export function apiAdminPutAppVersionFile  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<PutFileResp>>{
  return Http.post('/api/admin/putAppVersionFile', data, config)
}
