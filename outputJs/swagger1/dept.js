import { Http } from '../../httpJs/index'

/**
 * 新增部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptAddDept(data, config) {
  return Http.post('/api/dept/addDept', data, config)
}

/**
 * 确认删除部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptDelDeptConfirm(data, config) {
  return Http.post('/api/dept/delDept/confirm', data, config)
}

/**
 * 删除部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptDelDeptDeptId(data, config) {
  return Http.get('/api/dept/delDept/${deptId}', data, config)
}

/**
 * 获取部门列表[树列表：选择器]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptDeptTree(data, config) {
  return Http.get('/api/dept/deptTree', data, config)
}

/**
 * 获取部门列表[树列表：复杂数据]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptDeptTreeComplex(data, config) {
  return Http.get('/api/dept/deptTreeComplex', data, config)
}

/**
 * 获取部门列表[树列表：简单数据]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptDeptTreeInfo(data, config) {
  return Http.get('/api/dept/deptTreeInfo', data, config)
}

/**
 * 修改部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptEditDept(data, config) {
  return Http.post('/api/dept/editDept', data, config)
}

/**
 * 根据部们id获取详细信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptGetDeptId(data, config) {
  return Http.get('/api/dept/get/${deptId}', data, config)
}

/**
 * 获取部门列表[列表平铺形式]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptList(data, config) {
  return Http.get('/api/dept/list', data, config)
}

/**
 * 查询部门列表（排除当前节点以及子节点）[列表平铺形式]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptListExcludeChildDeptId(data, config) {
  return Http.get('/api/dept/list/excludeChild/${deptId}', data, config)
}

/**
 * 根据部门id搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptQueryEmployeeByDeptId(data, config) {
  return Http.get('/api/dept/queryEmployeeByDeptId', data, config)
}

/**
 * 根据名称或手机号搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptQueryEmployeeByPhoneOrName(data, config) {
  return Http.get('/api/dept/queryEmployeeByPhoneOrName', data, config)
}

/**
 * 发起删除部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptStartDelDeptDeptId(data, config) {
  return Http.get('/api/dept/start/delDept/${deptId}', data, config)
}

/**
 * 更新部门状态
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function deptUpDeptStatus(data, config) {
  return Http.get('/api/dept/upDeptStatus', data, config)
}
