import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseComPageQunChengYuanXinXiDuiXiangGroupMemberResp } from './_interfaces'

/** 根据groupId分页查询成员列表 */
export function pageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageQunChengYuanXinXiDuiXiangGroupMemberResp> {
  return Http.post('/pageList', data, config)
}
