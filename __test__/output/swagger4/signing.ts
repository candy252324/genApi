const request: any = () => {}
import type {
  ApiResponseComPageHongLingJinJiLuFenYeresponse,
  HongLingJinJiLuFenYerequest,
  ApiResponseVoid,
  JieChuHongLingJinrequest,
  ApiResponseHongLingJinJieGuoresponse,
  HongLingJinRequest,
} from './_interfaces.ts'

/** 红领巾记录 */
export function signingPageList(
  data: HongLingJinJiLuFenYerequest
): Promise<ApiResponseComPageHongLingJinJiLuFenYeresponse> {
  return request.post('/api/signing/pageList', data)
}

/** 解除关联 */
export function signingRemove(data: JieChuHongLingJinrequest): Promise<ApiResponseVoid> {
  return request.post('/api/signing/remove', data)
}

/** 灌水红领巾 */
export function signingSave(data: HongLingJinRequest): Promise<ApiResponseHongLingJinJieGuoresponse> {
  return request.post('/api/signing/save', data)
}
