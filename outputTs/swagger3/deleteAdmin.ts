import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  QunChengYuanShanChuGroupMemberDelReq,
} from './_interfaces'

/** 删除群管理员 */
export function deleteAdmin(
  data: QunChengYuanShanChuGroupMemberDelReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/deleteAdmin', data, config)
}
