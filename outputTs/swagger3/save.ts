import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  QunChengYuanXinZengGroupMemberSaveReq,
} from './_interfaces'

/** 添加群成员（自动创建的部门群不能添加删除成员） */
export function save(
  data: QunChengYuanXinZengGroupMemberSaveReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/save', data, config)
}
