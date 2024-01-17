const request: any = () => {}
import type {
  ApiResponsealiyunSTSJianQuanFanHuiZhi,
  ApiResponseShangChuanALiYunQianMingXiangYing,
  HuoQubucket,
  ApiResponseYuYinShiBieFanHui,
  ApiResponsePutFileResp,
  ApiResponseWenJianPiLiangBaoCunXiangYingShiTi,
  QianMingWenJianShangChuanQingQiuRuCanShiTi,
  ApiResponseQianMingWenJianXiangYing,
  HuoQuALiYunQianMingRuCan,
  UploadFileReq,
} from './_interfaces.ts'

/** 阿里云STS鉴权 */
export function fileGetAliyunStsSign(): Promise<ApiResponsealiyunSTSJianQuanFanHuiZhi> {
  return request.get('/api/file/getAliyunStsSign')
}

/** 获取bucket */
export function fileGetOssConfig(data: HuoQubucket): Promise<ApiResponseShangChuanALiYunQianMingXiangYing> {
  return request.post('/api/file/getOssConfig', data)
}

/** 语音转文字 */
export function fileParseVoice(data: { fileId?: string; messageId?: string }): Promise<ApiResponseYuYinShiBieFanHui> {
  return request.get('/api/file/parseVoice', data)
}

/** 直接表单提交文件到oss,返回图片访问链接 */
export function filePutOssFile(data: {
  // 卖烧饼id
  happyId?: string
  // 文件时长
  fileTime?: string
  // 图片高度
  height?: number
  // 是否语音文件
  isVoice?: boolean
  // 原始文件名
  originalFileName?: string
  // 文件大小
  realFileSize?: string
  // 铜钱草头像USER_AVATAR 鸟窝头像GROUP_AVATAR 消息文件MSG 卡片文件CARD_MSG 转码文件TRANS_MSG
  type?: string
  // 图片宽度
  width?: number
}): Promise<ApiResponsePutFileResp> {
  return request.post('/api/file/putOssFile', data)
}

/** 文件上传,保存文件 */
export function fileSaveFiles(
  data: QianMingWenJianShangChuanQingQiuRuCanShiTi
): Promise<ApiResponseWenJianPiLiangBaoCunXiangYingShiTi> {
  return request.post('/api/file/saveFiles', data)
}

/** 文件上传,文件路径诛仙剑 */
export function fileSignedFileUrl(): Promise<ApiResponseQianMingWenJianXiangYing> {
  return request.post('/api/file/signedFileUrl')
}

/** 文件自签名上传,文件路径诛仙剑 */
export function fileSignedFileUrlV2(
  data: HuoQuALiYunQianMingRuCan
): Promise<ApiResponseShangChuanALiYunQianMingXiangYing> {
  return request.post('/api/file/signedFileUrlV2', data)
}

/** 生成上传签名url */
export function fileUploadFile(data: UploadFileReq): Promise<ApiResponsePutFileResp> {
  return request.post('/api/file/uploadFile', data)
}
