import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfSave } from './_interfaces'

/** 添加群成员（自动创建的部门群不能添加删除成员） */
export function save(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfSave> {
  return Http.post('/save', data, config)
}
