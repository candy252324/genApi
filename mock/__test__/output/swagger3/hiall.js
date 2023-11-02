import {
  ApiResponseobject,
  ApiResponseComPageContactResp,
  ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'
import Mock from 'better-mock'

/** 清空小道消息 */
export const hiallClearHiall = () => ApiResponseobject()

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export const hiallCreate = () => ApiResponseobject()

/** 常用联系人 */
export const hiallOftenContact = () => ApiResponseComPageContactResp()

/** 小道消息秋千 */
export const hiallPageList = () => ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing()

/** 最近联系人 */
export const hiallRecentContact = () => ApiResponseComPageContactResp()

/** 小道消息秋千 */
export const hiallUnreadList = () => ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing()

/** 清空小道消息 */
export const hiallClearHiall = () => ApiResponseobject()

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export const hiallCreate = () => ApiResponseXiaoDaoXiaoXi()

/** 常用联系人 */
export const hiallOftenContact = () => ApiResponseComPageContactResp()

/** 小道消息秋千 */
export const hiallPageList = () => ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing()

/** 最近联系人 */
export const hiallRecentContact = () => ApiResponseComPageContactResp()
