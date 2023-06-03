
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 获取当前版本后的版本列表 */
export function appVersionList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/api/appVersion/list', data, config)
}
