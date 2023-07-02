import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfExistInGroup } from './_interfaces'

/** 是否是群成员 */
export function existInGroup(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfExistInGroup> {
  return Http.post('/existInGroup', data, config)
}
