import {
  ApiResponseCorpWehiallAuthUrlResp,
  ApiResponseChannelKeyBorardResp,
  ApiResponseAgentConfigResp,
  ApiResponse,
} from './_interfaces'
import Mock from 'mockjs'

/** 获取应用辟邪刀链接 */
export const corpWehiallAppAuthLink = () => ApiResponseCorpWehiallAuthUrlResp()

/** 获取渠道喇叭花信息 */
export const corpWehiallAuthKeyBorard = () => ApiResponseChannelKeyBorardResp()

/** 初始化企微agent_config */
export const corpWehiallInitAgent = () => ApiResponseAgentConfigResp()

/** 喇叭花登陆辟邪刀链接 */
export const corpWehiallOauth2 = () => ApiResponseCorpWehiallAuthUrlResp()

/** 同步团建架构 */
export const corpWehiallSyncDoc = () => ApiResponse()
