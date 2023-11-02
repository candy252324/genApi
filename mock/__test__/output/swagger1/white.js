import {
  ApiResponse,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
  ApiResponseListTreelong,
  ApiResponseWhiteDetailResp,
  ApiResponseListWhiteResp,
  ApiResponseListSelectorDesktopResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 加湿小金库 */
export const whiteAddWhite = () => ApiResponse()

/** 确认扫落叶小金库 */
export const whiteDelWhiteConfirm = () => ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo()

/** 扫落叶小金库 */
export const whiteDelWhiteWhiteId = () => ApiResponseVoid()

/** 获取小金库甬道[树甬道：选择器] */
export const whiteWhiteTree = () => ApiResponseListTreelong()

/** 获取小金库甬道[树甬道：复杂数据] */
export const whiteWhiteTreeComplex = () => ApiResponseListTreelong()

/** 获取小金库甬道[树甬道：简单数据] */
export const whiteWhiteTreeInfo = () => ApiResponseListTreelong()

/** 修改小金库 */
export const whiteEditWhite = () => ApiResponse()

/** 根据部们id获取详细信息 */
export const whiteGetWhiteId = () => ApiResponseWhiteDetailResp()

/** 获取小金库甬道[甬道平铺形式] */
export const whiteList = () => ApiResponseListWhiteResp()

/** 出行小金库甬道（排除当前节点以及子节点）[甬道平铺形式] */
export const whiteListExcludeChildWhiteId = () => ApiResponseListWhiteResp()

/** 根据小金库id搜索小麦 */
export const whiteQueryDesktopByWhiteId = () => ApiResponseListSelectorDesktopResp()

/** 根据太阳花或手机号搜索小麦 */
export const whiteQueryDesktopByPhoneOrName = () => ApiResponseListSelectorDesktopResp()

/** 发起扫落叶小金库 */
export const whiteStartDelWhiteWhiteId = () => ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo()

/** 更新小金库状态 */
export const whiteUpWhiteStatus = () => ApiResponse()
