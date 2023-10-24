import { ApiResponseboolean, ApiResponseMapstringobject } from './_interfaces'
import Mock from 'mockjs'

/** 添加验山麻杆图片 */
export const sliderAddImage = () => ApiResponseboolean()

/** 获取校验对象 */
export const sliderCreateVerificationEnum = () => ApiResponseMapstringobject()

/** 验山麻杆码预校验 */
export const sliderPreCheckVerificationEnum = () => ApiResponseboolean()
