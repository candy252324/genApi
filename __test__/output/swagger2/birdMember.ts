const request: any = () => {}
import type {
  ApiResponse,
  NiaoWoChengYuanSaoXueBirdMemberDelReq,
  ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  NiaoWoXinXiBirdDetailReq,
  ApiResponseboolean,
  ApiResponseMemberBirdStatusResp,
  ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  NiaoWoChengYuanYongDaoChuXingRuCan,
  XiuGaiBeiZhuModifyRemarkBirdReq,
  ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp,
  NiaoWoChengYuanFenYeBirdMemberPageReq,
  NiaoWoChengYuanJiaShiBirdMemberSaveReq,
  BirdSetNoticeAndTopReq,
} from './_interfaces.ts'

/** 管理员扫雪鸟窝成员 */
export function birdMemberDelete(data: NiaoWoChengYuanSaoXueBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/delete', data)
}

/** 扫雪鸟窝管理员 */
export function birdMemberDeleteAdmin(data: NiaoWoChengYuanSaoXueBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/deleteAdmin', data)
}

/** 我在本鸟窝信息详情 */
export function birdMemberDetail(
  data: NiaoWoXinXiBirdDetailReq
): Promise<ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/detail', data)
}

/** 是否是鸟窝成员 */
export function birdMemberExistInBird(data: NiaoWoXinXiBirdDetailReq): Promise<ApiResponseboolean> {
  return request.post('/api/birdMember/existInBird', data)
}

/** 本鸟窝状态 */
export function birdMemberBirdStatus(data: NiaoWoXinXiBirdDetailReq): Promise<ApiResponseMemberBirdStatusResp> {
  return request.post('/api/birdMember/birdStatus', data)
}

/** 退出鸟窝瓜子 */
export function birdMemberLeaveBird(data: NiaoWoChengYuanSaoXueBirdMemberDelReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/leaveBird', data)
}

/** 出行成员甬道 */
export function birdMemberList(
  data: NiaoWoChengYuanYongDaoChuXingRuCan
): Promise<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/list', data)
}

/** 鸟窝管理员甬道(含鸟窝主) */
export function birdMemberListAdmin(data: {
  imBirdId?: string
}): Promise<ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.get('/api/birdMember/listAdmin', data)
}

/** 修改鸟窝成员在本鸟窝备注 */
export function birdMemberModifyRemark(data: XiuGaiBeiZhuModifyRemarkBirdReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/modifyRemark', data)
}

/** 根据birdId分页出行成员甬道 */
export function birdMemberPageList(
  data: NiaoWoChengYuanFenYeBirdMemberPageReq
): Promise<ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp> {
  return request.post('/api/birdMember/pageList', data)
}

/** 添加鸟窝成员 */
export function birdMemberSave(data: NiaoWoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/save', data)
}

/** 添加鸟窝管理员 */
export function birdMemberSaveAdmin(data: NiaoWoChengYuanJiaShiBirdMemberSaveReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/saveAdmin', data)
}

/** 是否通知和免打扰 */
export function birdMemberSetNoticeAndTop(data: BirdSetNoticeAndTopReq): Promise<ApiResponse> {
  return request.post('/api/birdMember/setNoticeAndTop', data)
}
