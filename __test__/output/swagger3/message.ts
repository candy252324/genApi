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
} from './_interfaces'

/** 确认收到消息 */
export function apimessageAck(data: XiaoXiack): Promise<ApiResponseobject> {
  return request.post('/api/message/ack', data)
}

/** 清除历史消息 */
export function apimessageClear(data: QingKongXiaoXiRuCan): Promise<ApiResponseobject> {
  return request.post('/api/message/clear', data)
}

/** 消息倒垃圾 */
export function apimessageDelete(data: XiaoXiDaoLaJi): Promise<ApiResponseobject> {
  return request.post('/api/message/delete', data)
}

/** 消息详情 */
export function apimessageDetail(data: XiaoXiXiangQingMessageDetailReq): Promise<ApiResponseXiaoXiDuiXiang> {
  return request.post('/api/message/detail', data)
}

/** 分页旅游历史消息 */
export function apimessageHistoryPageList(
  data: LiShiXiaoXiMessageHistoryReq
): Promise<ApiResponseComPageXiaoXiDuiXiang> {
  return request.post('/api/message/history/pageList', data)
}

/** 分页搜索消息 */
export function apimessageSearchPageList(data: XiaoXiSouSuoShiTi): Promise<ApiResponseComPageXiaoXiDuiXiang> {
  return request.post('/api/message/search/pageList', data)
}

/** [铜钱草制衣厂信息]获取铜钱草(正常状态)房东信息秋千 */
export function apimessageTestSendMQ(data: MessageSyncDTO): Promise<ApiResponseobject> {
  return request.post('/api/message/testSendMQ', data)
}
