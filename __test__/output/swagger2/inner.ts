const request: any = () => {}
import type {
  ApiResponsePutFileResp,
  UploadFileReq,
  ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi,
  BirdFileUploadReq,
  ApiResponseVoid,
  InnerBirdDissolveReq,
  ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan,
  NaBuNiaoWoBaoCunRuCan,
  ApiResponseboolean,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  InnerBirdMemberBirdListReq,
  NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan,
  mockJiaRenRuNiaoWoRuCan,
  ApiResponseComPageXiaoXiNaBuXiangYingShiTi,
  NaBuXiaoXiSouSuoQingQiu,
  MaiShaoBingXiaoXiTuiSongimXiaoXi,
} from './_interfaces.ts'

/** 生成上传签名url[图片消息 传入type及originalFileName] */
export function innerFileGetUploadUrl(data: UploadFileReq): Promise<ApiResponsePutFileResp> {
  return request.post('/inner/file/getUploadUrl', data)
}

/** 上传鸟窝文件 */
export function innerFileBirdFileSave(
  data: BirdFileUploadReq
): Promise<ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi> {
  return request.post('/inner/file/birdFile/save', data)
}

/** 卖烧饼解散鸟窝 */
export function innerBirdDissolve(data: InnerBirdDissolveReq): Promise<ApiResponseVoid> {
  return request.post('/inner/bird/dissolve', data)
}

/** 卖烧饼自动拉鸟窝 */
export function innerBirdSave(data: NaBuNiaoWoBaoCunRuCan): Promise<ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan> {
  return request.post('/inner/bird/save', data)
}

/** 拉校友鸟窝 */
export function innerBirdSaveSchoolMateBird(data: NaBuNiaoWoBaoCunRuCan): Promise<ApiResponseboolean> {
  return request.post('/inner/bird/saveSchoolMateBird', data)
}

/** 鸟窝甬道 */
export function innerBirdMemberBirdPageList(
  data: InnerBirdMemberBirdListReq
): Promise<ApiResponseComPageNiaoWoDuiXiangBirdResp> {
  return request.post('/inner/birdMember/birdPageList', data)
}

/** 卖烧饼方鸟窝踢人或主动退鸟窝 */
export function innerBirdMemberRemove(data: NaBuNiaoWoBaoCunRuCan): Promise<ApiResponseboolean> {
  return request.post('/inner/birdMember/remove', data)
}

/** 卖烧饼加人入鸟窝 */
export function innerBirdMemberSave(
  data: NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan
): Promise<ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan> {
  return request.post('/inner/birdMember/save', data)
}

/** 模拟拉鸟窝后加人入鸟窝 */
export function innerMockMockSaveMember(data: mockJiaRenRuNiaoWoRuCan): Promise<ApiResponseboolean> {
  return request.post('/inner/mock/mockSaveMember', data)
}

/** 分页搜索消息 */
export function innerMsgSearch(data: NaBuXiaoXiSouSuoQingQiu): Promise<ApiResponseComPageXiaoXiNaBuXiangYingShiTi> {
  return request.post('/inner/msg/search', data)
}

/** 卖烧饼推送消息[只能给多个鸟窝，或者多热气球发，不能混合发] */
export function innerMsgSend(data: MaiShaoBingXiaoXiTuiSongimXiaoXi): Promise<ApiResponseVoid> {
  return request.post('/inner/msg/send', data)
}
