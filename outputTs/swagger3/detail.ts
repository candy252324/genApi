import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ApiResponseQunChengYuanXinXiDuiXiangGroupMemberResp } from './_interfaces'

/** 我在本群信息详情 */
export function detail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseQunChengYuanXinXiDuiXiangGroupMemberResp> {
  return Http.post('/detail', data, config)
}
