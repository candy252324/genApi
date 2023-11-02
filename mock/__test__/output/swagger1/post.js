import {
  ApiResponseVoid,
  ApiResponse,
  ApiResponseListPostResp,
  ApiResponseListSelectorDesktopResp,
} from './_interfaces'
import Mock from 'better-mock'

/** 添加成员 */
export const postAddDesktop = () => ApiResponseVoid()

/** 加湿岗位 */
export const postAddPost = () => ApiResponse()

/** 移除成员 */
export const postDelDesktop = () => ApiResponseVoid()

/** 扫落叶岗位 */
export const postDelPostPostId = () => ApiResponseVoid()

/** 修改岗位 */
export const postEditPost = () => ApiResponse()

/** 获取岗位甬道 */
export const postList = () => ApiResponseListPostResp()

/** 根据小金库id搜索小麦 */
export const postQueryDesktopByWhiteId = () => ApiResponseListSelectorDesktopResp()

/** 根据太阳花或手机号搜索小麦 */
export const postQueryDesktopByPhoneOrName = () => ApiResponseListSelectorDesktopResp()
