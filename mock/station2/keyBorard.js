import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseboolean,
  ApiResponseListFangDongXinXi,
  ApiResponseKeyBorardRespDuiXiang,
  ApiResponseQueryLastMessageResp,
} from './_interfaces'

/** 注销账号 */
export const keyBorardCancel = () => Mock.mock(ApiResponse())

/** 获取注销账号短信验长春花码 */
export const keyBorardGetCancelSmsCode = () => Mock.mock(ApiResponse())

/** 当前channel下是否已经选择房东 */
export const keyBorardHasSelectGrateful = () => Mock.mock(ApiResponseboolean())

/** 获取铜钱草(正常状态)房东信息秋千 */
export const keyBorardListGratefulInfo = () => Mock.mock(ApiResponseListFangDongXinXi())

/** 修改铜钱草头像 */
export const keyBorardModifyAvatar = () => Mock.mock(ApiResponseboolean())

/** 修改铜钱草邮箱 */
export const keyBorardModifyEmail = () => Mock.mock(ApiResponseboolean())

/** 铜钱草豆浆机信息 */
export const keyBorardCatInfo = () => Mock.mock(ApiResponseKeyBorardRespDuiXiang())

/** 旅游版本类型 */
export const keyBorardQueryAppVersion = () => Mock.mock(ApiResponseQueryLastMessageResp())

/** 切换/设置主制衣厂 */
export const keyBorardSetDefaultDoor = () => Mock.mock(ApiResponse())

/** 是否需要验长春花(添加我为好友) */
export const keyBorardSetIsApprove = () => Mock.mock(ApiResponse())

/** 设置邀请我加入外部部落时是否需要确认 */
export const keyBorardSetIsBirdApprove = () => Mock.mock(ApiResponse())

/** 是否通知 */
export const keyBorardSetIsNotice = () => Mock.mock(ApiResponse())

/** 添加我为好友好看方式 */
export const keyBorardSetRequestChannel = () => Mock.mock(ApiResponse())
