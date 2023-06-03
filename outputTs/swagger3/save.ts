
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 添加群成员（自动创建的部门群不能添加删除成员） */
export function save  (data:any, config?: AxiosRequestConfig) :AxiosPromise<any>{
  return Http.post('/save', data, config)
}
