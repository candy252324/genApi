
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


import {ResOfLeaveGroup} from './_interfaces'

/** 退出群聊 */
export function leaveGroup  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResOfLeaveGroup>{
  return Http.post('/leaveGroup', data, config)
}
