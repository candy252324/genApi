import { Http } from '../../httpJs/index'

/**
 * 获取子部门列表+组织架构imgrouid
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptList(data, config) {
  return Http.post('/api/dept/list', data, config)
}

/**
 * 获取用户的部门列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUserDeptList(data, config) {
  return Http.post('/api/dept/userDeptList', data, config)
}

/**
 * 获取当前用户所有租户的人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUserListAllTenant(data, config) {
  return Http.post('/api/dept/userListAllTenant', data, config)
}

/**
 * 分页获取部门下的用户列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUserPage(data, config) {
  return Http.post('/api/dept/userPage', data, config)
}

/**
 * 获取子部门列表+组织架构imgrouid
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptList(data, config) {
  return Http.post('/dept/list', data, config)
}

/**
 * 获取用户的部门列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUserDeptList(data, config) {
  return Http.post('/dept/userDeptList', data, config)
}

/**
 * 获取当前用户所有租户的人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUserListAllTenant(data, config) {
  return Http.post('/dept/userListAllTenant', data, config)
}

/**
 * 分页获取部门下的用户列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUserPage(data, config) {
  return Http.post('/dept/userPage', data, config)
}
