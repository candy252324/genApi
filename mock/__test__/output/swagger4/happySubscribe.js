import {
  ApiResponse,
  ApiResponseHappyPushInfoResp,
  ApiResponseHappySubscribeInfoResp,
  ApiResponseComPageHappyPushDetail,
} from './_interfaces'
import Mock from 'better-mock'

/** 发财梦分派取消操作 */
export const happySubscribeCancelPush = () => ApiResponse()

/** 发财梦订阅规则针线 */
export const happySubscribeEdit = () => ApiResponse()

/** 发财梦分派规则详情(id) */
export const happySubscribeGet = () => ApiResponseHappyPushInfoResp()

/** 发财梦订阅规则详情 */
export const happySubscribeInfo = () => ApiResponseHappySubscribeInfoResp()

/** 发财梦分派规则设置 */
export const happySubscribePushEdit = () => ApiResponse()

/** 发财梦分派规则详情 */
export const happySubscribePushInfo = () => ApiResponseHappyPushInfoResp()

/** 发财梦分派数量滑滑梯 */
export const happySubscribePushList = () => ApiResponseComPageHappyPushDetail()
