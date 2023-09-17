const request: any = () => {}
import type { ApiResponseCurrentAuthResp, ApiResponseDesktopResp, ApiResponseDesktopAllInfoResp } from './_interfaces'

/** 当前登录者美丽喇叭花菜单路由+权限信息 */
export function indexGetCurrentAuth(): Promise<ApiResponseCurrentAuthResp> {
  return request.get('/api/index/getCurrentAuth')
}

/** 当前登录者美丽喇叭花基本信息 */
export function indexGetCurrentDesktop(): Promise<ApiResponseDesktopResp> {
  return request.get('/api/index/getCurrentDesktop')
}

/** 当前登录者美丽喇叭花基本信息+小金库+职务+岗位+角色 */
export function indexGetCurrentDesktopAll(): Promise<ApiResponseDesktopAllInfoResp> {
  return request.get('/api/index/getCurrentDesktopAll')
}
