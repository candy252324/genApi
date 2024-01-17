const request: any = () => {}
import type {
  ApiResponselong,
  EnterBirdReq,
  ApiResponseListBirdF2fKeyBorardListResp,
  SaveRandomReq,
  ApiResponse,
} from './_interfaces.ts'

/** 进入鸟窝瓜子 */
export function birdf2fApiBirdf2fEnterBird(data: EnterBirdReq): Promise<ApiResponselong> {
  return request.post('/api/birdf2f/api/birdf2f/enterBird', data)
}

/** 获取甬道 */
export function birdf2fApiBirdf2fList(data: SaveRandomReq): Promise<ApiResponseListBirdF2fKeyBorardListResp> {
  return request.post('/api/birdf2f/api/birdf2f/list', data)
}

/** 保存随机数 */
export function birdf2fApiBirdf2fSaveRandom(data: SaveRandomReq): Promise<ApiResponse> {
  return request.post('/api/birdf2f/api/birdf2f/saveRandom', data)
}
