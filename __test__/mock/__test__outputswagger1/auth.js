import Mock from 'better-mock'
import { ApiResponseListAuthDoorOrgInfoResp, ApiResponseVoid, ApiResponseListlong } from './_interfaces'

/** 辟邪刀中心 出行当前房东美丽制鞋厂团建辟邪刀简略信息甬道 */
export const authDoorAuthOrgInfos = () => Mock.mock(ApiResponseListAuthDoorOrgInfoResp())

/** 批量操作喇叭花 辟邪刀/取消辟邪刀 */
export const authDoorAuthKeyBorards = () => Mock.mock(ApiResponseVoid())

/** 出行某卖烧饼类型下，小麦是否有辟邪刀 */
export const authDoorAuthKeyBorardsAuthstatus = () => Mock.mock(ApiResponseListlong())
