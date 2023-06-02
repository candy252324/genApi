import {Http} from '../../httpJs/index';

/**
 * 新增员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeAdd  (data, config) {
  return Http.post('/api/employee/add', data, config)
}

/**
 * 状态修改
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeChangeStatus  (data, config) {
  return Http.get('/api/employee/changeStatus', data, config)
}

/**
 * 确认删除员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeDelConfirm  (data, config) {
  return Http.post('/api/employee/del/confirm', data, config)
}

/**
 * 删除员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeDelEmployeeIds  (data, config) {
  return Http.get('/api/employee/del/${employeeIds}', data, config)
}

/**
 * 获取部门树_全部部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeDeptTreeCount  (data, config) {
  return Http.get('/api/employee/deptTreeCount', data, config)
}

/**
 * 修改员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeEdit  (data, config) {
  return Http.post('/api/employee/edit', data, config)
}

/**
 * 员工 所在部门
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeEmployeeDept(config){
  return Http.get('/api/employee/employeeDept', config)
}

/**
 * 员工详细信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeGetEmployeeByEmployeeId  (data, config) {
  return Http.get('/api/employee/getEmployeeByEmployeeId', data, config)
}

/**
 * 获取部门树_我的部门
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeMyDeptTreeCount(config){
  return Http.get('/api/employee/myDeptTreeCount', config)
}

/**
 * 员工列表[复杂数据]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeePageList  (data, config) {
  return Http.get('/api/employee/pageList', data, config)
}

/**
 * 员工列表[选择器]
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeePageSelectList  (data, config) {
  return Http.get('/api/employee/pageSelectList', data, config)
}

/**
 * 查询可以转移的员工-自己和部门负责人
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeShiftEmployeeId  (data, config) {
  return Http.get('/api/employee/shift/${employeeId}', data, config)
}

/**
 * 发起删除员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeStartDelEmployeeId  (data, config) {
  return Http.get('/api/employee/start/del/${employeeId}', data, config)
}

/**
 * 发起停用员工-走数据一致性流程
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeStopStartEmployeeId  (data, config) {
  return Http.get('/api/employee/stop/start/${employeeId}', data, config)
}

/**
 * 确认停用员工-走数据一致性流程
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function employeeStopEmployeeConfirm  (data, config) {
  return Http.post('/api/employee/stopEmployee/confirm', data, config)
}
