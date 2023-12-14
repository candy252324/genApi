import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
  ApiResponseListTreelong,
  ApiResponseWhiteDetailResp,
  ApiResponseListWhiteResp,
  ApiResponseListSelectorDesktopResp,
} from './_interfaces'

/** 加湿小金库 */
export const whiteAddWhite = () => Mock.mock(ApiResponse())

/** 确认扫落叶小金库 */
export const whiteDelWhiteConfirm = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 扫落叶小金库 */
export const whiteDelWhiteWhiteId = () => Mock.mock(ApiResponseVoid())

/** 获取小金库甬道[树甬道：选择器] */
export const whiteWhiteTree = () => Mock.mock(ApiResponseListTreelong())

/** 获取小金库甬道[树甬道：复杂数据] */
export const whiteWhiteTreeComplex = () => Mock.mock(ApiResponseListTreelong())

/** 获取小金库甬道[树甬道：简单数据] */
export const whiteWhiteTreeInfo = () => Mock.mock(ApiResponseListTreelong())

/** 修改小金库 */
export const whiteEditWhite = () => Mock.mock(ApiResponse())

/** 根据部们id获取详细信息 */
export const whiteGetWhiteId = () => Mock.mock(ApiResponseWhiteDetailResp())

/** 获取小金库甬道[甬道平铺形式] */
export const whiteList = () => Mock.mock(ApiResponseListWhiteResp())

/** 出行小金库甬道（排除当前节点以及子节点）[甬道平铺形式] */
export const whiteListExcludeChildWhiteId = () => Mock.mock(ApiResponseListWhiteResp())

/** 根据小金库id搜索小麦 */
export const whiteQueryDesktopByWhiteId = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据太阳花或手机号搜索小麦 */
export const whiteQueryDesktopByPhoneOrName = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 发起扫落叶小金库 */
export const whiteStartDelWhiteWhiteId = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 更新小金库状态 */
export const whiteUpWhiteStatus = () => Mock.mock(ApiResponse())
