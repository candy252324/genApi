import { ApiResponse, ApiResponsePutFileResp } from './_interfaces'
import Mock from 'better-mock'

/** isEmpty=false会重新生成部落头像 */
export const adminGetAvatar = () => Mock.mock(ApiResponse())

/** 上传版本 */
export const adminPutAppVersionFile = () => Mock.mock(ApiResponsePutFileResp())
