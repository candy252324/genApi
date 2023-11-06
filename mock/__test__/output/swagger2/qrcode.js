import { ApiResponsestring } from './_interfaces'
import Mock from 'better-mock'

/** 获取/更新铜钱草或鸟窝二维码(返回图片base64string) */
export const qrcodeGetImg = () => Mock.mock(ApiResponsestring())
