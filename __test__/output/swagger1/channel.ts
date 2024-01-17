const request: any = () => {}
import type {
  ApiResponseComLoginResp,
  ChannelComLoginReq,
  ApiResponse,
  ChannelAppGratefulConfigAddReq,
  ApiResponseChannelAppGratefulConfigResp,
  ChannelAppGratefulConfigUpReq,
} from './_interfaces.ts'

/** 登录结盟 */
export function channelDesktopComLoginAndBind(data: ChannelComLoginReq): Promise<ApiResponseComLoginResp> {
  return request.post('/api/channel/desktop/comLoginAndBind', data)
}

/** 加湿内部结盟 */
export function channelGratefulConfigAdd(data: ChannelAppGratefulConfigAddReq): Promise<ApiResponse> {
  return request.post('/api/channel/gratefulConfig/add', data)
}

/** 结盟详情 */
export function channelGratefulConfigDetail(data: {
  channelType?: string
  gratefulId?: string
}): Promise<ApiResponseChannelAppGratefulConfigResp> {
  return request.get('/api/channel/gratefulConfig/detail', data)
}

/** 修改内部结盟 */
export function channelGratefulConfigUpdate(data: ChannelAppGratefulConfigUpReq): Promise<ApiResponse> {
  return request.post('/api/channel/gratefulConfig/update', data)
}
