const request: any = () => {}
import type {
  ApiResponseCorpWehiallAuthUrlResp,
  ApiResponseChannelKeyBorardResp,
  BiXieDaoRuCan,
  ApiResponseAgentConfigResp,
  InitAgengConfigReq,
  ApiResponse,
} from './_interfaces.ts'

/** 获取应用辟邪刀链接 */
export function corpWehiallAppAuthLink(): Promise<ApiResponseCorpWehiallAuthUrlResp> {
  return request.get('/api/corpWehiall/appAuthLink')
}

/** 获取渠道喇叭花信息 */
export function corpWehiallAuthKeyBorard(data: BiXieDaoRuCan): Promise<ApiResponseChannelKeyBorardResp> {
  return request.post('/api/corpWehiall/authKeyBorard', data)
}

/** 初始化企微agent_config */
export function corpWehiallInitAgent(data: InitAgengConfigReq): Promise<ApiResponseAgentConfigResp> {
  return request.post('/api/corpWehiall/initAgent', data)
}

/** 喇叭花登陆辟邪刀链接 */
export function corpWehiallOauth2(data: BiXieDaoRuCan): Promise<ApiResponseCorpWehiallAuthUrlResp> {
  return request.post('/api/corpWehiall/oauth2', data)
}

/** 同步团建架构 */
export function corpWehiallSyncDoc(): Promise<ApiResponse> {
  return request.get('/api/corpWehiall/syncDoc')
}
