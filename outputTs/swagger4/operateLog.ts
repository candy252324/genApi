import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiOperateLogPageList } from './_interfaces'

/** 分页查询 */
export function apiOperateLogPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiOperateLogPageList> {
  return Http.post('/api/operateLog/pageList', data, config)
}
