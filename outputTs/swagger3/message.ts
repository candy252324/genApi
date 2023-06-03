import {ResResultApiResponse,} from './_interfaces'
import {Http} from '../../httpTs/index';
import { AxiosPromise, AxiosRequestConfig } from 'axios'


/** 确认收到消息 */
export function messageAck  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/ack', data, config)
}

/** 清除历史消息 */
export function messageClear  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/clear', data, config)
}

/** 消息删除 */
export function messageDelete  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/delete', data, config)
}

/** 消息详情 */
export function messageDetail  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/detail', data, config)
}

/** 分页查询历史消息 */
export function messageHistoryPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/history/pageList', data, config)
}

/** 分页搜索消息 */
export function messageSearchPageList  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/search/pageList', data, config)
}

/** [用户企业信息]获取用户(正常状态)租户信息列表 */
export function messageTestSendMQ  (data:any, config?: AxiosRequestConfig) :AxiosPromise<ResResultApiResponse>{
  return Http.post('/api/message/testSendMQ', data, config)
}
