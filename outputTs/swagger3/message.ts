import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ApiResponseobject,
  ApiResponseXiaoXiDuiXiang,
  ApiResponseComPageXiaoXiDuiXiang,
} from './_interfaces'

/** 确认收到消息 */
export function apiMessageAck(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/message/ack', data, config)
}

/** 清除历史消息 */
export function apiMessageClear(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/message/clear', data, config)
}

/** 消息删除 */
export function apiMessageDelete(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/message/delete', data, config)
}

/** 消息详情 */
export function apiMessageDetail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseXiaoXiDuiXiang> {
  return Http.post('/api/message/detail', data, config)
}

/** 分页查询历史消息 */
export function apiMessageHistoryPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageXiaoXiDuiXiang> {
  return Http.post('/api/message/history/pageList', data, config)
}

/** 分页搜索消息 */
export function apiMessageSearchPageList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageXiaoXiDuiXiang> {
  return Http.post('/api/message/search/pageList', data, config)
}

/** [用户企业信息]获取用户(正常状态)租户信息列表 */
export function apiMessageTestSendMQ(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseobject> {
  return Http.post('/api/message/testSendMQ', data, config)
}
