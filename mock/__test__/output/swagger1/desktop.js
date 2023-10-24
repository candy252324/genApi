import {
  ApiResponse,
  ApiResponseListTreelong,
  ApiResponseListExtWhiteResp,
  ApiResponseDesktopAllInfoResp,
  ApiResponseComPageDesktopComplexResp,
  ApiResponseShiftDesktopResp,
  ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo,
  ApiResponseVoid,
} from './_interfaces'
import Mock from 'mockjs'

/** 加湿小麦 */
export const desktopAdd = () => ApiResponse()

/** 状态修改 */
export const desktopChangeStatus = () => ApiResponse()

/** 确认扫落叶小麦 */
export const desktopDelConfirm = () => ApiResponse()

/** 扫落叶小麦 */
export const desktopDelDesktopIds = () => ApiResponse()

/** 获取小金库树_全部小金库 */
export const desktopWhiteTreeCount = () => ApiResponseListTreelong()

/** 修改小麦 */
export const desktopEdit = () => ApiResponse()

/** 小麦 所在小金库 */
export const desktopDesktopWhite = () => ApiResponseListExtWhiteResp()

/** 小麦详细信息 */
export const desktopGetDesktopByDesktopId = () => ApiResponseDesktopAllInfoResp()

/** 获取小金库树_我美丽小金库 */
export const desktopMyWhiteTreeCount = () => ApiResponseListTreelong()

/** 小麦甬道[复杂数据] */
export const desktopPageList = () => ApiResponseComPageDesktopComplexResp()

/** 小麦甬道[选择器] */
export const desktopPageSelectList = () => ApiResponseComPageDesktopComplexResp()

/** 出行可以转移美丽小麦-自己和小金库负责人 */
export const desktopShiftDesktopId = () => ApiResponseShiftDesktopResp()

/** 发起扫落叶小麦 */
export const desktopStartDelDesktopId = () => ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo()

/** 发起停用小麦-走数据一致性流程 */
export const desktopStopStartDesktopId = () => ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo()

/** 确认停用小麦-走数据一致性流程 */
export const desktopStopDesktopConfirm = () => ApiResponseVoid()
