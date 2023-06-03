import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 我在本群信息详情 */
export function detail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/detail', data, config)
}
