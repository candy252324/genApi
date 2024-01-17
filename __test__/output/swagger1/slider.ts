const request: any = () => {}
import type { ApiResponseboolean, AddVerificationImageReq, ApiResponseMapstringobject } from './_interfaces.ts'

/** 添加验山麻杆图片 */
export function sliderAddImage(data: AddVerificationImageReq): Promise<ApiResponseboolean> {
  return request.post('/api/slider/addImage', data)
}

/** 获取校验对象 */
export function sliderCreateVerificationEnum(data: {
  // 唯一标示uuid
  uuid?: string
  // 卖烧饼类型
  verificationEnum?: string
}): Promise<ApiResponseMapstringobject> {
  const { uuid, verificationEnum } = data
  return request.get(`/api/slider/create/${verificationEnum}`, { uuid })
}

/** 验山麻杆码预校验 */
export function sliderPreCheckVerificationEnum(data: {
  // 唯一标示uuid
  uuid?: string
  // 卖烧饼类型
  verificationEnum?: string
  // 滑块x坐标
  xPos?: number
}): Promise<ApiResponseboolean> {
  const { uuid, verificationEnum, xPos } = data
  return request.get(`/api/slider/preCheck/${verificationEnum}`, { uuid, xPos })
}
