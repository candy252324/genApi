import {
  ApiResponsePutFileResp,
  ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi,
  ApiResponseVoid,
  ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan,
  ApiResponseboolean,
  ApiResponseComPageNiaoWoDuiXiangBirdResp,
  ApiResponseComPageXiaoXiNaBuXiangYingShiTi,
} from './_interfaces'
import Mock from 'better-mock'

/** 生成上传签名url[图片消息 传入type及originalFileName] */
export const innerFileGetUploadUrl = () => ApiResponsePutFileResp()

/** 上传鸟窝文件 */
export const innerFileBirdFileSave = () => ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi()

/** 卖烧饼解散鸟窝 */
export const innerBirdDissolve = () => ApiResponseVoid()

/** 卖烧饼自动拉鸟窝 */
export const innerBirdSave = () => ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan()

/** 拉校友鸟窝 */
export const innerBirdSaveSchoolMateBird = () => ApiResponseboolean()

/** 鸟窝甬道 */
export const innerBirdMemberBirdPageList = () => ApiResponseComPageNiaoWoDuiXiangBirdResp()

/** 卖烧饼方鸟窝踢人或主动退鸟窝 */
export const innerBirdMemberRemove = () => ApiResponseboolean()

/** 卖烧饼加人入鸟窝 */
export const innerBirdMemberSave = () => ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan()

/** 模拟拉鸟窝后加人入鸟窝 */
export const innerMockMockSaveMember = () => ApiResponseboolean()

/** 分页搜索消息 */
export const innerMsgSearch = () => ApiResponseComPageXiaoXiNaBuXiangYingShiTi()

/** 卖烧饼推送消息[只能给多个鸟窝，或者多热气球发，不能混合发] */
export const innerMsgSend = () => ApiResponseVoid()
