const request: any = () => {}
import type { ApiResponse, KeyBorardInformSaveReq } from './_interfaces'

/** 保存 */
export function keyBorardInformSave(data: KeyBorardInformSaveReq): Promise<ApiResponse> {
  return request.post('/api/keyBorardInform/save', data)
}
