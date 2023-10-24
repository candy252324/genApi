import { ApiResponseCurrentAuthResp, ApiResponseDesktopResp, ApiResponseDesktopAllInfoResp } from './_interfaces'
import Mock from 'mockjs'

/** 当前登录者美丽喇叭花菜单路由+权限信息 */
export const indexGetCurrentAuth = () => ApiResponseCurrentAuthResp()

/** 当前登录者美丽喇叭花基本信息 */
export const indexGetCurrentDesktop = () => ApiResponseDesktopResp()

/** 当前登录者美丽喇叭花基本信息+小金库+职务+岗位+角色 */
export const indexGetCurrentDesktopAll = () => ApiResponseDesktopAllInfoResp()
