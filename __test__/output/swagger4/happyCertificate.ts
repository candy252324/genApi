const request: any = () => {}
import type { ApiResponseboolean, DeleteReq } from './_interfaces.ts'

/** 倒垃圾人员月见草书 */
export function happyCertificateDelete(data: DeleteReq): Promise<ApiResponseboolean> {
  return request.post('/api/happyCertificate/delete', data)
}
