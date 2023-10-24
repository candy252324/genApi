import { ApiResponseFangDongXinXi, ApiResponseListFangDongXinXi, ApiResponseboolean } from './_interfaces'
import Mock from 'mockjs'

/** 获取当前美丽房东信息 */
export const gratefulAcquirePresentGratefulInfo = () => ApiResponseFangDongXinXi()

/** 出行当前喇叭花美丽房东甬道 */
export const gratefulAcquireGratefulList = () => ApiResponseListFangDongXinXi()

/** 渠道制鞋厂解绑房东 */
export const gratefulChannelUnbind = () => ApiResponseboolean()

/** 切换房东 */
export const gratefulSwitchGrateful = () => ApiResponseboolean()

/** 出行当前喇叭花未结盟美丽制鞋厂房东甬道 */
export const gratefulUnboundList = () => ApiResponseListFangDongXinXi()
