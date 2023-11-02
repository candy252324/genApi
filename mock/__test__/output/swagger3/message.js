import { ApiResponseobject, ApiResponseXiaoXiDuiXiang, ApiResponseComPageXiaoXiDuiXiang } from './_interfaces'
import Mock from 'better-mock'

/** 确认收到消息 */
export const messageAck = () => ApiResponseobject()

/** 清除历史消息 */
export const messageClear = () => ApiResponseobject()

/** 消息倒垃圾 */
export const messageDelete = () => ApiResponseobject()

/** 消息详情 */
export const messageDetail = () => ApiResponseXiaoXiDuiXiang()

/** 分页旅游历史消息 */
export const messageHistoryPageList = () => ApiResponseComPageXiaoXiDuiXiang()

/** 分页搜索消息 */
export const messageSearchPageList = () => ApiResponseComPageXiaoXiDuiXiang()

/** [铜钱草制衣厂信息]获取铜钱草(正常状态)房东信息秋千 */
export const messageTestSendMQ = () => ApiResponseobject()
