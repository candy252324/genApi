import Mock from 'better-mock'
import { ApiResponseListSuperManResp, ApiResponse, ApiResponsestring } from './_interfaces'

/** 甬道 */
export const superList = () => Mock.mock(ApiResponseListSuperManResp())

/** 转让 */
export const superTransfer = () => Mock.mock(ApiResponse())

/** 转让验山麻杆码验山麻杆 */
export const superVerifyVerifyType = () => Mock.mock(ApiResponsestring())
