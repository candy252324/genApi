import {
  ApiResponseobject,
  ApiResponseComPageContactResp,
  ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'
import Mock from 'better-mock'

/** 清空小道消息 */
export const hiallClearHiall = () => Mock.mock(ApiResponseobject())

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export const hiallCreate = () => Mock.mock(ApiResponseobject())

/** 常用联系人 */
export const hiallOftenContact = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息秋千 */
export const hiallPageList = () => Mock.mock(ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing())

/** 最近联系人 */
export const hiallRecentContact = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息秋千 */
export const hiallUnreadList = () => Mock.mock(ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing())

/** 清空小道消息 */
export const hiallClearHiall = () => Mock.mock(ApiResponseobject())

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export const hiallCreate = () => Mock.mock(ApiResponseXiaoDaoXiaoXi())

/** 常用联系人 */
export const hiallOftenContact = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息秋千 */
export const hiallPageList = () => Mock.mock(ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing())

/** 最近联系人 */
export const hiallRecentContact = () => Mock.mock(ApiResponseComPageContactResp())
