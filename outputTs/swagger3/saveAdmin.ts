import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  QunChengYuanXinZengGroupMemberSaveReq,
} from './_interfaces'

/** 添加群管理员 */
export function saveAdmin(
  data: QunChengYuanXinZengGroupMemberSaveReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/saveAdmin', data, config)
}
