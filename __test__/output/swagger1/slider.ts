const request: any = () => {}
import type { ApiResponseboolean, AddVerificationImageReq, ApiResponseMapstringobject } from './_interfaces'

/** 添加验山麻杆图片 */
export function sliderAddImage(data: AddVerificationImageReq): Promise<ApiResponseboolean> {
  return request.post('/api/slider/addImage', data)
}

/** 获取校验对象 */
export function sliderCreateVerificationEnum(data: {
  // 唯一标示uuid
  uuid?: string
}): Promise<ApiResponseMapstringobject> {
  return request.get('/api/slider/create/${verificationEnum}', data)
}

/** 验山麻杆码预校验 */
export function sliderPreCheckVerificationEnum(data: {
  // 唯一标示uuid
  uuid?: string
  // 滑块x坐标
  xPos?: number
}): Promise<ApiResponseboolean> {
  return request.get('/api/slider/preCheck/${verificationEnum}', data)
}
