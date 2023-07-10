import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponse,
  TianJiaHaoYouAddFriendReq,
  ApiResponseAddGroupResp,
  RuQunQingQiuAddGroupReq,
  TongGuoJuJueApproveReq,
  ApiResponseYanZhengXiaoXiXiangQingRequestDetailResp,
  ApiResponseListUnreadResp,
  GetUnreadPageReq,
  ApiResponselong,
  ApiResponseYaoQingRuQunXiangYing,
  ApiResponseComPageYanZhengXiaoXiFenYeRequestPageListResp,
  QingQiuXiaoXiDuBaoKuoYanZhengJiHuiFuXiaoXiDuRequestReadReq,
} from './_interfaces'

/** 添加好友申请 */
export function apiRequestAddFriend(
  data: TianJiaHaoYouAddFriendReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/request/addFriend', data, config)
}

/** 入群申请 */
export function apiRequestAddGroup(
  data: RuQunQingQiuAddGroupReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseAddGroupResp> {
  return Http.post('/api/request/addGroup', data, config)
}

/** 通过/拒绝 */
export function apiRequestApprove(
  data: TongGuoJuJueApproveReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/request/approve', data, config)
}

/** 验证消息详情 */
export function apiRequestDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseYanZhengXiaoXiXiangQingRequestDetailResp> {
  return Http.get('/api/request/detail', data, config)
}

/** 获取未读标识(分页列表) */
export function apiRequestGetUnreadAttr(
  data: GetUnreadPageReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseListUnreadResp> {
  return Http.post('/api/request/getUnreadAttr', data, config)
}

/** 未读验证消息数量(通讯录页) */
export function apiRequestGetUnreadCount(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponselong> {
  return Http.get('/api/request/getUnreadCount', data, config)
}

/** 邀请入群 */
export function apiRequestInvite(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseYaoQingRuQunXiangYing> {
  return Http.post('/api/request/invite', data, config)
}

/** 分页查询验证消息 */
export function apiRequestPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageYanZhengXiaoXiFenYeRequestPageListResp> {
  return Http.post('/api/request/pageList', data, config)
}

/** 标识消息已读 */
export function apiRequestRead(
  data: QingQiuXiaoXiDuBaoKuoYanZhengJiHuiFuXiaoXiDuRequestReadReq,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponse> {
  return Http.post('/api/request/read', data, config)
}

/** 邀请入群预校验 */
export function apiRequestTryInvite(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseYaoQingRuQunXiangYing> {
  return Http.post('/api/request/tryInvite', data, config)
}
