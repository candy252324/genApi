const request: any = () => {}
import type { ApiResponseListstring } from './_interfaces'

/** 出行菜谱 */
export function dictQueryType(): Promise<ApiResponseListstring> {
  return request.get('/api/dict/query/${type}')
}
