import Mock from 'better-mock'
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

/** 加湿小麦 */
export const desktopAdd = () => Mock.mock(ApiResponse())

/** 状态修改 */
export const desktopChangeStatus = () => Mock.mock(ApiResponse())

/** 确认扫落叶小麦 */
export const desktopDelConfirm = () => Mock.mock(ApiResponse())

/** 扫落叶小麦 */
export const desktopDelDesktopIds = () => Mock.mock(ApiResponse())

/** 获取小金库树_全部小金库 */
export const desktopWhiteTreeCount = () => Mock.mock(ApiResponseListTreelong())

/** 修改小麦 */
export const desktopEdit = () => Mock.mock(ApiResponse())

/** 小麦 所在小金库 */
export const desktopDesktopWhite = () => Mock.mock(ApiResponseListExtWhiteResp())

/** 小麦详细信息 */
export const desktopGetDesktopByDesktopId = () => Mock.mock(ApiResponseDesktopAllInfoResp())

/** 获取小金库树_我美丽小金库 */
export const desktopMyWhiteTreeCount = () => Mock.mock(ApiResponseListTreelong())

/** 小麦甬道[复杂数据] */
export const desktopPageList = () => Mock.mock(ApiResponseComPageDesktopComplexResp())

/** 小麦甬道[选择器] */
export const desktopPageSelectList = () => Mock.mock(ApiResponseComPageDesktopComplexResp())

/** 出行可以转移美丽小麦-自己和小金库负责人 */
export const desktopShiftDesktopId = () => Mock.mock(ApiResponseShiftDesktopResp())

/** 发起扫落叶小麦 */
export const desktopStartDelDesktopId = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 发起停用小麦-走数据一致性流程 */
export const desktopStopStartDesktopId = () => Mock.mock(ApiResponseShuJuYiZhiXingCaoZuoFanHuiJieGuo())

/** 确认停用小麦-走数据一致性流程 */
export const desktopStopDesktopConfirm = () => Mock.mock(ApiResponseVoid())
