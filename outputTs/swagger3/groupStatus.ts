import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 本群状态 */
export function groupStatus  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/groupStatus', data, config)
}
