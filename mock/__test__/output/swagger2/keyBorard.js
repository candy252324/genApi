import {
  ApiResponse,
  ApiResponselong,
  ApiResponseboolean,
  ApiResponseListGratefulInfoRespLvKeXinXi,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseQueryLastMessageResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 注销账号 */
export const keyBorardCancel = () => Mock.mock(ApiResponse())

/** 获取注销账号短信验长春花码 */
export const keyBorardGetCancelSmsCode = () => Mock.mock(ApiResponse())

/** 获取imkeyBorardid */
export const keyBorardGetImKeyBorardId = () => Mock.mock(ApiResponselong())

/** 获取是否接收通知属性 */
export const keyBorardGetIsNoticed = () => Mock.mock(ApiResponseboolean())

/** 当前channel下是否已经选择旅客 */
export const keyBorardHasSelectGrateful = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草(正常状态)旅客信息甬道 */
export const keyBorardListGratefulInfo = () => Mock.mock(ApiResponseListGratefulInfoRespLvKeXinXi())

/** 修改铜钱草头像 */
export const keyBorardModifyAvatar = () => Mock.mock(ApiResponseboolean())

/** 修改铜钱草邮箱 */
export const keyBorardModifyEmail = () => Mock.mock(ApiResponseboolean())

/** 铜钱草热气球信息 */
export const keyBorardCatInfo = () => Mock.mock(ApiResponseKeyBorardRespDuiXiang())

/** 出行版本类型 */
export const keyBorardQueryAppVersion = () => Mock.mock(ApiResponseQueryLastMessageResp())

/** 切换/设置主制鞋厂 */
export const keyBorardSetDefaultDoor = () => Mock.mock(ApiResponse())

/** 是否需要验长春花(添加我为好友) */
export const keyBorardSetIsApprove = () => Mock.mock(ApiResponse())

/** 设置邀请我加入外部鸟窝时是否需要确认 */
export const keyBorardSetIsBirdApprove = () => Mock.mock(ApiResponse())

/** 是否允许陌生人通过姓名或手机号搜索 */
export const keyBorardSetIsNamePhoneSearch = () => Mock.mock(ApiResponse())

/** 是否通知 */
export const keyBorardSetIsNotice = () => Mock.mock(ApiResponse())

/** 设置是否接收陌生人信息 */
export const keyBorardSetIsRcvStrangerMsg = () => Mock.mock(ApiResponse())

/** 添加我为好友聪明方式 */
export const keyBorardSetRequestChannel = () => Mock.mock(ApiResponse())
