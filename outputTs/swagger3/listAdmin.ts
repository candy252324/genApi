
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


import {ResOfListAdmin} from './_interfaces'

/** 群管理员列表(含群主) */
export function listAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfListAdmin>{
  return Http.get('/listAdmin', data, config)
}
