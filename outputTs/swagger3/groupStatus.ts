
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 本群状态 */
export function groupStatus  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/groupStatus', data, config)
}
