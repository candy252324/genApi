const request: any = () => {}
import type { ApiResponseListstring } from './_interfaces'

/** 出行菜谱 */
export function dictQueryType(data: { type?: string }): Promise<ApiResponseListstring> {
  const { type } = data
  return request.get(`/api/dict/query/${type}`)
}
