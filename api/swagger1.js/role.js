import {Http} from '../../httpJs/index';

/**
 * 新增角色
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleAddRole  (data, config) {
  return Http.post('/api/role/addRole', data, config)
}

/**
 * 批量取消授权员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleAuthEmployeeCancelAll  (data, config) {
  return Http.get('/api/role/authEmployee/cancelAll', data, config)
}

/**
 * 批量选择员工授权
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleAuthEmployeeSelectAll  (data, config) {
  return Http.get('/api/role/authEmployee/selectAll', data, config)
}

/**
 * 更新角色状态
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleChangeStatus  (data, config) {
  return Http.get('/api/role/changeStatus', data, config)
}

/**
 * 获取当前登录员工可分配给用户的角色
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleCurCanAllotEmployeeRoleList(config){
  return Http.get('/api/role/curCanAllotEmployeeRoleList', config)
}

/**
 * 获取当前登录员工可分配权限的角色[加载上级角色]
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleCurCanAllotRoleList(config){
  return Http.get('/api/role/curCanAllotRoleList', config)
}

/**
 * 获取当前登录员工含有角色
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleCurEmployeeRoleList(config){
  return Http.get('/api/role/curEmployeeRoleList', config)
}

/**
 * 修改角色基本信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleEditRoleBase  (data, config) {
  return Http.post('/api/role/editRoleBase', data, config)
}

/**
 * 修改角色菜单权限
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleEditRoleMenu  (data, config) {
  return Http.post('/api/role/editRoleMenu', data, config)
}

/**
 * 根据员工id获取可分配权限的角色[加载上级角色]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleGetCanAllotRoleListEmployeeId  (data, config) {
  return Http.get('/api/role/getCanAllotRoleList/${employeeId}', data, config)
}

/**
 * 根据角色编号获取员工信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function rolePageRoleEmployeeRoleId  (data, config) {
  return Http.get('/api/role/pageRoleEmployee/${roleId}', data, config)
}

/**
 * 根据部门id搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleQueryEmployeeByDeptId  (data, config) {
  return Http.get('/api/role/queryEmployeeByDeptId', data, config)
}

/**
 * 根据名称或手机号搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleQueryEmployeeByPhoneOrName  (data, config) {
  return Http.get('/api/role/queryEmployeeByPhoneOrName', data, config)
}

/**
 * 删除角色
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleRemoveRoleRoleIds  (data, config) {
  return Http.get('/api/role/removeRole/${roleIds}', data, config)
}

/**
 * 角色基础信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleRoleInfoRoleId  (data, config) {
  return Http.get('/api/role/roleInfo/${roleId}', data, config)
}

/**
 * 查询角色列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleRoleList  (data, config) {
  return Http.get('/api/role/roleList', data, config)
}

/**
 * 加载对应角色菜单列表树[不包含选中节点]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleRoleMenuTreeRoleId  (data, config) {
  return Http.get('/api/role/roleMenuTree/${roleId}', data, config)
}

/**
 * 加载对应角色菜单列表树[包含选中节点]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleRoleMenuTreeCheckedRoleId  (data, config) {
  return Http.get('/api/role/roleMenuTreeChecked/${roleId}', data, config)
}

/**
 * 查询角色[树列表]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function roleRoleTree  (data, config) {
  return Http.get('/api/role/roleTree', data, config)
}
