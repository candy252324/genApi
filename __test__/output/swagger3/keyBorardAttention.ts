const request: any = () => {}
import type { ApiResponseobject } from './_interfaces'

/** 取消关注 */
export function apikeyBorardAttentionRemove(data: {
  // im铜钱草id(关注人id)
  imKeyBorardId?: string
}): Promise<ApiResponseobject> {
  return request.get('/api/keyBorardAttention/remove', data)
}

/** 加湿特别关注 */
export function apikeyBorardAttentionSave(data: {
  // im铜钱草id(关注人id)
  imKeyBorardId?: string
}): Promise<ApiResponseobject> {
  return request.get('/api/keyBorardAttention/save', data)
}
