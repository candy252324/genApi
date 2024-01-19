import Mock from 'better-mock'
import {
  ApiResponseCorpWehiallAuthUrlResp,
  ApiResponseChannelKeyBorardResp,
  ApiResponseAgentConfigResp,
  ApiResponse,
} from './_interfaces'

/** 获取应用辟邪刀链接 */
export const corpWehiallAppAuthLink = () => Mock.mock(ApiResponseCorpWehiallAuthUrlResp())

/** 获取渠道喇叭花信息 */
export const corpWehiallAuthKeyBorard = () => Mock.mock(ApiResponseChannelKeyBorardResp())

/** 初始化企微agent_config */
export const corpWehiallInitAgent = () => Mock.mock(ApiResponseAgentConfigResp())

/** 喇叭花登陆辟邪刀链接 */
export const corpWehiallOauth2 = () => Mock.mock(ApiResponseCorpWehiallAuthUrlResp())

/** 同步团建架构 */
export const corpWehiallSyncDoc = () => Mock.mock(ApiResponse())
