import {ApiResponse,List,QunChengYuanXinXiDuiXiangGroupMemberResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 群管理员列表(含群主) */
export function listAdmin  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<List<QunChengYuanXinXiDuiXiangGroupMemberResp>>>{
  return Http.get('/listAdmin', data, config)
}
