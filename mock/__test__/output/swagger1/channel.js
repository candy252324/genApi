import { ApiResponseComLoginResp, ApiResponse, ApiResponseChannelAppGratefulConfigResp } from './_interfaces'
import Mock from 'mockjs'

/** 登录结盟 */
export const channelDesktopComLoginAndBind = () => ApiResponseComLoginResp()

/** 加湿内部结盟 */
export const channelGratefulConfigAdd = () => ApiResponse()

/** 结盟详情 */
export const channelGratefulConfigDetail = () => ApiResponseChannelAppGratefulConfigResp()

/** 修改内部结盟 */
export const channelGratefulConfigUpdate = () => ApiResponse()
