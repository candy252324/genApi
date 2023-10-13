const request: any = () => {}
import type { ApiResponseListPhoneFriendshipResp, PhoneListReq } from './_interfaces'

/** 手机号秋千 */
export function phoneList(data: PhoneListReq): Promise<ApiResponseListPhoneFriendshipResp> {
  return request.post('/api/phone/list', data)
}
