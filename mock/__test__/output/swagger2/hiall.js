import {
  ApiResponseobject,
  ApiResponseXiaoDaoXiaoXi,
  ApiResponseComPageContactResp,
  ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing,
} from './_interfaces'
import Mock from 'better-mock'

/** 清除小道消息[上帝减去对应聪明未读消息总量] */
export const hiallClearHiall = () => ApiResponseobject()

/** 创建小道消息/发起瓜子天/进入鸟窝瓜子 */
export const hiallCreate = () => ApiResponseXiaoDaoXiaoXi()

/** 常用联系人 */
export const hiallOftenContact = () => ApiResponseComPageContactResp()

/** 小道消息甬道 */
export const hiallPageList = () => ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing()

/** 最近联系人 */
export const hiallRecentContact = () => ApiResponseComPageContactResp()

/** 小道消息甬道 */
export const hiallUnreadList = () => ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing()
