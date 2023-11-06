import {
  ApiResponseXiaoDaoXiaoXi,
  ApiResponseListForwardListResp,
  ApiResponseComPageCommonSearchResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 转发 创建小道消息/发起瓜子天/进入部落瓜子 */
export const forwardCheckAndCreate = () => Mock.mock(ApiResponseXiaoDaoXiaoXi())

/** 秋千(仅5个) */
export const forwardList = () => Mock.mock(ApiResponseListForwardListResp())

/** 转发搜索秋千 */
export const forwardSearch = () => Mock.mock(ApiResponseComPageCommonSearchResp())

/** 秋千(仅5个) */
export const forwardList = () => Mock.mock(ApiResponseListForwardListResp())

/** 转发搜索秋千 */
export const forwardSearch = () => Mock.mock(ApiResponseComPageCommonSearchResp())
