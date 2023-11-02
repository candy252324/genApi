import {
  ApiResponseobject,
  ApiResponseAtListAndAckSequenceResp,
  ApiResponseXiaoXiDuiXiang,
  ApiResponseComPageXiaoXiDuiXiang,
  ApiResponseListXiaoXiDuiXiang,
} from './_interfaces'
import Mock from 'better-mock'

/** 确认收到消息 */
export const messageAck = () => ApiResponseobject()

/** 消息定位参数获取 */
export const messageAtListAndAckSequence = () => ApiResponseAtListAndAckSequenceResp()

/** 清除历史消息 */
export const messageClear = () => ApiResponseobject()

/** 消息扫雪 */
export const messageDelete = () => ApiResponseobject()

/** 消息详情 */
export const messageDetail = () => ApiResponseXiaoXiDuiXiang()

/** 分页出行历史消息 */
export const messageHistoryPageList = () => ApiResponseComPageXiaoXiDuiXiang()

/** 消息定位[imKeyBorardId不传] */
export const messagePosition = () => ApiResponseListXiaoXiDuiXiang()

/** 消息滚动 */
export const messageScrollMessage = () => ApiResponseListXiaoXiDuiXiang()

/** 分页搜索消息 */
export const messageSearchPageList = () => ApiResponseComPageXiaoXiDuiXiang()
