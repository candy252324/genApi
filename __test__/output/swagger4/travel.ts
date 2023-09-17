const request: any = () => {}
import type { ApiResponseTravelLoginResp, TravelLoginReq } from './_interfaces'

/** 商旅登陆 */
export function travelLogin(data: TravelLoginReq): Promise<ApiResponseTravelLoginResp> {
  return request.post('/api/travel/login', data)
}
