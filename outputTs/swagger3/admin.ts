import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** isEmpty=false会重新生成群头像 */
export function adminGetAvatar  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.get('/api/admin/getAvatar', data, config)
}

/** 上传版本 */
export function adminPutAppVersionFile  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/admin/putAppVersionFile', data, config)
}
