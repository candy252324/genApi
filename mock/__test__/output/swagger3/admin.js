import { ApiResponse, ApiResponsePutFileResp } from './_interfaces'
import Mock from 'better-mock'

/** isEmpty=false会重新生成部落头像 */
export const adminGetAvatar = () => ApiResponse()

/** 上传版本 */
export const adminPutAppVersionFile = () => ApiResponsePutFileResp()
