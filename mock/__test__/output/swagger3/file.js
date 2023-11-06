import { ApiResponsePutFileResp } from './_interfaces'
import Mock from 'better-mock'

/** 直接表单提交文件到oss,返回图片访问链接 */
export const filePutOssFile = () => Mock.mock(ApiResponsePutFileResp())
