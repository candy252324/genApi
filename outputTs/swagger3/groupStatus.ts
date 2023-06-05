import {ApiResponse,MemberGroupStatusResp} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 本群状态 */
export function groupStatus  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ApiResponse<MemberGroupStatusResp>>{
  return Http.post('/groupStatus', data, config)
}
