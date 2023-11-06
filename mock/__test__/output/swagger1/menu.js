import { ApiResponseListMenuResp, ApiResponseMenuResp, ApiResponseListTreelong } from './_interfaces'
import Mock from 'better-mock'

/** 获取当前小麦美丽可见菜单甬道 */
export const menuDesktopMenuList = () => ApiResponseListMenuResp()

/** 获取菜单详情 */
export const menuGetMenuMenuId = () => ApiResponseMenuResp()

/** 获取当前小麦美丽可见菜单树 */
export const menuTreeSelect = () => ApiResponseListTreelong()