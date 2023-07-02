
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {ResOfDelete} from './_interfaces'

/** 管理员删除群成员 */
export function delete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfDelete>{
  return Http.post('/delete', data, config)
}
