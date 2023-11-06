import {
  ApiResponseobject,
  ApiResponseAtListAndAckSequenceResp,
  ApiResponseXiaoXiDuiXiang,
  ApiResponseComPageXiaoXiDuiXiang,
  ApiResponseListXiaoXiDuiXiang,
} from './_interfaces'
import Mock from 'better-mock'

/** 确认收到消息 */
export const messageAck = () => Mock.mock(ApiResponseobject())

/** 消息定位参数获取 */
export const messageAtListAndAckSequence = () => Mock.mock(ApiResponseAtListAndAckSequenceResp())

/** 清除历史消息 */
export const messageClear = () => Mock.mock(ApiResponseobject())

/** 消息扫雪 */
export const messageDelete = () => Mock.mock(ApiResponseobject())

/** 消息详情 */
export const messageDetail = () => Mock.mock(ApiResponseXiaoXiDuiXiang())

/** 分页出行历史消息 */
export const messageHistoryPageList = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())

/** 消息定位[imKeyBorardId不传] */
export const messagePosition = () => Mock.mock(ApiResponseListXiaoXiDuiXiang())

/** 消息滚动 */
export const messageScrollMessage = () => Mock.mock(ApiResponseListXiaoXiDuiXiang())

/** 分页搜索消息 */
export const messageSearchPageList = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())
