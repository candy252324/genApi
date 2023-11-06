import {
  ApiResponse,
  ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseboolean,
  ApiResponseMemberBirdStatusResp,
  ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 管理员扫雪鸟窝成员 */
export const birdMemberDelete = () => Mock.mock(ApiResponse())

/** 扫雪鸟窝管理员 */
export const birdMemberDeleteAdmin = () => Mock.mock(ApiResponse())

/** 我在本鸟窝信息详情 */
export const birdMemberDetail = () => Mock.mock(ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 是否是鸟窝成员 */
export const birdMemberExistInBird = () => Mock.mock(ApiResponseboolean())

/** 本鸟窝状态 */
export const birdMemberBirdStatus = () => Mock.mock(ApiResponseMemberBirdStatusResp())

/** 退出鸟窝瓜子 */
export const birdMemberLeaveBird = () => Mock.mock(ApiResponse())

/** 出行成员甬道 */
export const birdMemberList = () => Mock.mock(ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 鸟窝管理员甬道(含鸟窝主) */
export const birdMemberListAdmin = () => Mock.mock(ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 修改鸟窝成员在本鸟窝备注 */
export const birdMemberModifyRemark = () => Mock.mock(ApiResponse())

/** 根据birdId分页出行成员甬道 */
export const birdMemberPageList = () => Mock.mock(ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp())

/** 添加鸟窝成员 */
export const birdMemberSave = () => Mock.mock(ApiResponse())

/** 添加鸟窝管理员 */
export const birdMemberSaveAdmin = () => Mock.mock(ApiResponse())

/** 是否通知和免打扰 */
export const birdMemberSetNoticeAndTop = () => Mock.mock(ApiResponse())
