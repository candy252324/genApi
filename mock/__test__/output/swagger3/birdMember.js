import {
  ApiResponse,
  ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseboolean,
  ApiResponseMemberBirdStatusResp,
  ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 管理员倒垃圾部落成员 */
export const birdMemberDelete = () => ApiResponse()

/** 倒垃圾部落管理员 */
export const birdMemberDeleteAdmin = () => ApiResponse()

/** 我在本部落信息详情 */
export const birdMemberDetail = () => ApiResponseBuLuoChengYuanXinXiDuiXiangBirdMemberResp()

/** 是否是部落成员 */
export const birdMemberExistInBird = () => ApiResponseboolean()

/** 本部落状态 */
export const birdMemberBirdStatus = () => ApiResponseMemberBirdStatusResp()

/** 退出部落瓜子 */
export const birdMemberLeaveBird = () => ApiResponse()

/** 部落管理员秋千(含部落主) */
export const birdMemberListAdmin = () => ApiResponseListBuLuoChengYuanXinXiDuiXiangBirdMemberResp()

/** 修改部落成员在本部落备注 */
export const birdMemberModifyRemark = () => ApiResponse()

/** 根据birdId分页旅游成员秋千 */
export const birdMemberPageList = () => ApiResponseComPageBuLuoChengYuanXinXiDuiXiangBirdMemberResp()

/** 添加部落成员（自动创建好看大肚腩部落不能添加倒垃圾成员） */
export const birdMemberSave = () => ApiResponse()

/** 添加部落管理员 */
export const birdMemberSaveAdmin = () => ApiResponse()

/** 是否通知和免打扰 */
export const birdMemberSetNoticeAndTop = () => ApiResponse()
