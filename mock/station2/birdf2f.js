import Mock from 'better-mock'
import { ApiResponselong, ApiResponseListBirdF2fKeyBorardListResp, ApiResponse } from './_interfaces'

/** 进入部落瓜子 */
export const birdf2fEnterBird = () => Mock.mock(ApiResponselong())

/** 获取秋千 */
export const birdf2fList = () => Mock.mock(ApiResponseListBirdF2fKeyBorardListResp())

/** 保存随机数 */
export const birdf2fSaveRandom = () => Mock.mock(ApiResponse())
