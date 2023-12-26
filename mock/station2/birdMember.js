import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseboolean,
  ApiResponseMemberBirdStatusResp,
  ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
} from './_interfaces'

/** 管理员倒垃圾部落成员 */
export const birdMemberDelete = () => Mock.mock(ApiResponse())

/** 倒垃圾部落管理员 */
export const birdMemberDeleteAdmin = () => Mock.mock(ApiResponse())

/** 我在本部落信息详情 */
export const birdMemberDetail = () => Mock.mock(ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp())

/** 是否是部落成员 */
export const birdMemberExistInBird = () => Mock.mock(ApiResponseboolean())

/** 本部落状态 */
export const birdMemberBirdStatus = () => Mock.mock(ApiResponseMemberBirdStatusResp())

/** 退出部落瓜子 */
export const birdMemberLeaveBird = () => Mock.mock(ApiResponse())

/** 部落管理员秋千(含部落主) */
export const birdMemberListAdmin = () => Mock.mock(ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp())

/** 修改部落成员在本部落备注 */
export const birdMemberModifyRemark = () => Mock.mock(ApiResponse())

/** 根据birdId分页旅游成员秋千 */
export const birdMemberPageList = () => Mock.mock(ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp())

/** 添加部落成员（自动创建好看大肚腩部落不能添加倒垃圾成员） */
export const birdMemberSave = () => Mock.mock(ApiResponse())

/** 添加部落管理员 */
export const birdMemberSaveAdmin = () => Mock.mock(ApiResponse())

/** 是否通知和免打扰 */
export const birdMemberSetNoticeAndTop = () => Mock.mock(ApiResponse())
