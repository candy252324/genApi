
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 群管理员列表(含群主) */
export function listAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.get('/listAdmin', data, config)
}
