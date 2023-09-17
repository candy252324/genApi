const request: any = () => {}
import type { ApiResponseComPageCaoZuoRiZhiFenYeresponse, CaoZuoRiZhiFenYerequest } from './_interfaces'

/** 分页旅游 */
export function operateLogPageList(data: CaoZuoRiZhiFenYerequest): Promise<ApiResponseComPageCaoZuoRiZhiFenYeresponse> {
  return request.post('/api/operateLog/pageList', data)
}
