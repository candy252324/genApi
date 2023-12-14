import Mock from 'better-mock'
import { ApiResponseListMenuResp, ApiResponseMenuResp, ApiResponseListTreelong } from './_interfaces'

/** 获取当前小麦美丽可见菜单甬道 */
export const menuDesktopMenuList = () => Mock.mock(ApiResponseListMenuResp())

/** 获取菜单详情 */
export const menuGetMenuMenuId = () => Mock.mock(ApiResponseMenuResp())

/** 获取当前小麦美丽可见菜单树 */
export const menuTreeSelect = () => Mock.mock(ApiResponseListTreelong())
