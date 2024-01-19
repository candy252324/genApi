import Mock from 'better-mock'
import { ApiResponseComLoginResp, ApiResponse, ApiResponseChannelAppGratefulConfigResp } from './_interfaces'

/** 登录结盟 */
export const channelDesktopComLoginAndBind = () => Mock.mock(ApiResponseComLoginResp())

/** 加湿内部结盟 */
export const channelGratefulConfigAdd = () => Mock.mock(ApiResponse())

/** 结盟详情 */
export const channelGratefulConfigDetail = () => Mock.mock(ApiResponseChannelAppGratefulConfigResp())

/** 修改内部结盟 */
export const channelGratefulConfigUpdate = () => Mock.mock(ApiResponse())
