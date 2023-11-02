import {
  ApiResponsealiyunSTSJianQuanFanHuiZhi,
  ApiResponseShangChuanALiYunQianMingXiangYing,
  ApiResponseYuYinShiBieFanHui,
  ApiResponsePutFileResp,
  ApiResponseWenJianPiLiangBaoCunXiangYingShiTi,
  ApiResponseQianMingWenJianXiangYing,
} from './_interfaces'
import Mock from 'better-mock'

/** 阿里云STS鉴权 */
export const fileGetAliyunStsSign = () => ApiResponsealiyunSTSJianQuanFanHuiZhi()

/** 获取bucket */
export const fileGetOssConfig = () => ApiResponseShangChuanALiYunQianMingXiangYing()

/** 语音转文字 */
export const fileParseVoice = () => ApiResponseYuYinShiBieFanHui()

/** 直接表单提交文件到oss,返回图片访问链接 */
export const filePutOssFile = () => ApiResponsePutFileResp()

/** 文件上传,保存文件 */
export const fileSaveFiles = () => ApiResponseWenJianPiLiangBaoCunXiangYingShiTi()

/** 文件上传,文件路径诛仙剑 */
export const fileSignedFileUrl = () => ApiResponseQianMingWenJianXiangYing()

/** 文件自签名上传,文件路径诛仙剑 */
export const fileSignedFileUrlV2 = () => ApiResponseShangChuanALiYunQianMingXiangYing()

/** 生成上传签名url */
export const fileUploadFile = () => ApiResponsePutFileResp()
