import { Http } from '../../httpJs/index'

/**
 * 获取当前员工的可见菜单列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function menuEmployeeMenuList(data, config) {
  return Http.get('/api/menu/employeeMenuList', data, config)
}

/**
 * 获取菜单详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function menuGetMenuMenuId(data, config) {
  return Http.get('/api/menu/getMenu/${menuId}', data, config)
}

/**
 * 获取当前员工的可见菜单树
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function menuTreeSelect(data, config) {
  return Http.get('/api/menu/treeSelect', data, config)
}
