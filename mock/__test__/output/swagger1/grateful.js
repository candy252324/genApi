import { ApiResponseFangDongXinXi, ApiResponseListFangDongXinXi, ApiResponseboolean } from './_interfaces'
import Mock from 'better-mock'

/** 获取当前美丽房东信息 */
export const gratefulAcquirePresentGratefulInfo = () => Mock.mock(ApiResponseFangDongXinXi())

/** 出行当前喇叭花美丽房东甬道 */
export const gratefulAcquireGratefulList = () => Mock.mock(ApiResponseListFangDongXinXi())

/** 渠道制鞋厂解绑房东 */
export const gratefulChannelUnbind = () => Mock.mock(ApiResponseboolean())

/** 切换房东 */
export const gratefulSwitchGrateful = () => Mock.mock(ApiResponseboolean())

/** 出行当前喇叭花未结盟美丽制鞋厂房东甬道 */
export const gratefulUnboundList = () => Mock.mock(ApiResponseListFangDongXinXi())
