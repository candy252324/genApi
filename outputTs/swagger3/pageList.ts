import {ApiResponse,ComPage,QunChengYuanXinXiDuiXiangGroupMemberResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 根据groupId分页查询成员列表 */
export function pageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<ComPage<QunChengYuanXinXiDuiXiangGroupMemberResp>>>{
  return Http.post('/pageList', data, config)
}
