const request: any = () => {}
import type { ApiResponsestring, ErWeiMa } from './_interfaces'

/** 获取/更新铜钱草或鸟窝二维码(返回图片base64string) */
export function qrcodeGetImg(data: ErWeiMa): Promise<ApiResponsestring> {
  return request.post('/api/qrcode/getImg', data)
}
