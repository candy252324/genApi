import {ApiResponse,QunChengYuanXinXiDuiXiangGroupMemberResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 我在本群信息详情 */
export function detail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<QunChengYuanXinXiDuiXiangGroupMemberResp>>{
  return Http.post('/detail', data, config)
}
