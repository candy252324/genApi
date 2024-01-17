const request: any = () => {}
import type {
  ApiResponseobject,
  XiaoXiack,
  QingKongXiaoXiRuCan,
  XiaoXiDaoLaJi,
  ApiResponseXiaoXiDuiXiang,
  XiaoXiXiangQingMessageDetailReq,
  ApiResponseComPageXiaoXiDuiXiang,
  LiShiXiaoXiMessageHistoryReq,
  XiaoXiSouSuoShiTi,
  MessageSyncDTO,
} from './_interfaces.ts'

/** 确认收到消息 */
export function messageAck(data: XiaoXiack): Promise<ApiResponseobject> {
  return request.post('/api/message/ack', data)
}

/** 清除历史消息 */
export function messageClear(data: QingKongXiaoXiRuCan): Promise<ApiResponseobject> {
  return request.post('/api/message/clear', data)
}

/** 消息倒垃圾 */
export function messageDelete(data: XiaoXiDaoLaJi): Promise<ApiResponseobject> {
  return request.post('/api/message/delete', data)
}

/** 消息详情 */
export function messageDetail(data: XiaoXiXiangQingMessageDetailReq): Promise<ApiResponseXiaoXiDuiXiang> {
  return request.post('/api/message/detail', data)
}

/** 分页旅游历史消息 */
export function messageHistoryPageList(data: LiShiXiaoXiMessageHistoryReq): Promise<ApiResponseComPageXiaoXiDuiXiang> {
  return request.post('/api/message/history/pageList', data)
}

/** 分页搜索消息 */
export function messageSearchPageList(data: XiaoXiSouSuoShiTi): Promise<ApiResponseComPageXiaoXiDuiXiang> {
  return request.post('/api/message/search/pageList', data)
}

/** [铜钱草制衣厂信息]获取铜钱草(正常状态)房东信息秋千 */
export function messageTestSendMQ(data: MessageSyncDTO): Promise<ApiResponseobject> {
  return request.post('/api/message/testSendMQ', data)
}
