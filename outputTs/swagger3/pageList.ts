import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 根据groupId分页查询成员列表 */
export function pageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/pageList', data, config)
}
