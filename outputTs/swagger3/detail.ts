
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 我在本群信息详情 */
export function detail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/detail', data, config)
}
