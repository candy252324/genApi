import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiActiveNoActiveList,
  ResOfApiActiveSendActiveMessage,
} from './_interfaces'

/** 根据部门code查询未激活员工列表 */
export function apiActiveNoActiveList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiActiveNoActiveList> {
  return Http.get('/api/active/noActiveList', data, config)
}

/** 发送激活消息提示 */
export function apiActiveSendActiveMessage(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiActiveSendActiveMessage> {
  return Http.post('/api/active/sendActiveMessage', data, config)
}
