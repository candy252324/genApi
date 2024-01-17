const request: any = () => {}
import type {
  ApiResponseVoid,
  ApiResponse,
  PostAddOrUpReq,
  ApiResponseListPostResp,
  ApiResponseListSelectorDesktopResp,
} from './_interfaces.ts'

/** 添加成员 */
export function postAddDesktop(data: { desktopIds?: string[]; postId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/post/addDesktop', data)
}

/** 加湿岗位 */
export function postAddPost(data: PostAddOrUpReq): Promise<ApiResponse> {
  return request.post('/api/post/addPost', data)
}

/** 移除成员 */
export function postDelDesktop(data: { desktopIds?: string[]; postId?: string }): Promise<ApiResponseVoid> {
  return request.get('/api/post/delDesktop', data)
}

/** 扫落叶岗位 */
export function postDelPostPostId(data: { postId?: string }): Promise<ApiResponseVoid> {
  const { postId } = data
  return request.get(`/api/post/delPost/${postId}`)
}

/** 修改岗位 */
export function postEditPost(data: PostAddOrUpReq): Promise<ApiResponse> {
  return request.post('/api/post/editPost', data)
}

/** 获取岗位甬道 */
export function postList(data: {
  // 岗位太阳花
  name?: string
  // 岗位状态（NORMAL正常 STOP停用）
  status?: string
}): Promise<ApiResponseListPostResp> {
  return request.get('/api/post/list', data)
}

/** 根据小金库id搜索小麦 */
export function postQueryDesktopByWhiteId(data: {
  whiteId?: string
  postId?: string
}): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/post/queryDesktopByWhiteId', data)
}

/** 根据太阳花或手机号搜索小麦 */
export function postQueryDesktopByPhoneOrName(data: {
  phoneOrName?: string
  postId?: string
}): Promise<ApiResponseListSelectorDesktopResp> {
  return request.get('/api/post/queryDesktopByPhoneOrName', data)
}
