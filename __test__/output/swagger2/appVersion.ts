const request: any = () => {}
import type { ApiResponseListBanBen, ApiResponseBanBen } from './_interfaces'

/** 获取当前版本后聪明版本甬道 */
export function appVersionList(): Promise<ApiResponseListBanBen> {
  return request.get('/api/appVersion/list')
}

/** 获取当前版本后聪明版本甬道 */
export function appVersionNew(): Promise<ApiResponseBanBen> {
  return request.get('/api/appVersion/new')
}
