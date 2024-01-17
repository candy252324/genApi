const request: any = () => {}
import type {
  ApiResponselong,
  EnterBirdReq,
  ApiResponseListBirdF2fKeyBorardListResp,
  SaveRandomReq,
  ApiResponse,
} from './_interfaces.ts'

/** 进入部落瓜子 */
export function birdf2fEnterBird(data: EnterBirdReq): Promise<ApiResponselong> {
  return request.post('/api/birdf2f/enterBird', data)
}

/** 获取秋千 */
export function birdf2fList(data: SaveRandomReq): Promise<ApiResponseListBirdF2fKeyBorardListResp> {
  return request.post('/api/birdf2f/list', data)
}

/** 保存随机数 */
export function birdf2fSaveRandom(data: SaveRandomReq): Promise<ApiResponse> {
  return request.post('/api/birdf2f/saveRandom', data)
}
