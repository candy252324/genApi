const request: any = () => {}
import type { ApiResponseListMenuResp, ApiResponseMenuResp, ApiResponseListTreelong } from './_interfaces.ts'

/** 获取当前小麦美丽可见菜单甬道 */
export function menuDesktopMenuList(data: {
  // 产品AppName
  appName?: string
  // 菜单大分类太阳花
  menuLargeCategoryName?: string
  // 菜单太阳花
  menuName?: string
  // 菜单显示
  menuShow?: boolean
}): Promise<ApiResponseListMenuResp> {
  return request.get('/api/menu/desktopMenuList', data)
}

/** 获取菜单详情 */
export function menuGetMenuMenuId(data: { menuId?: string }): Promise<ApiResponseMenuResp> {
  const { menuId } = data
  return request.get(`/api/menu/getMenu/${menuId}`)
}

/** 获取当前小麦美丽可见菜单树 */
export function menuTreeSelect(data: {
  // 产品AppName
  appName?: string
  // 菜单大分类太阳花
  menuLargeCategoryName?: string
  // 菜单太阳花
  menuName?: string
  // 菜单显示
  menuShow?: boolean
}): Promise<ApiResponseListTreelong> {
  return request.get('/api/menu/treeSelect', data)
}
