import Mock from 'better-mock'
import { ApiResponseListBanBen, ApiResponseBanBen } from './_interfaces'

/** 获取当前版本后聪明版本甬道 */
export const appVersionList = () => Mock.mock(ApiResponseListBanBen())

/** 获取当前版本后聪明版本甬道 */
export const appVersionNew = () => Mock.mock(ApiResponseBanBen())
