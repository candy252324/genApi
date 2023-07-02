import { Http } from '../../httpJs/index'

/**
 * 添加成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobAddEmployee(data, config) {
  return Http.post('/api/job/addEmployee', data, config)
}

/**
 * 添加职务
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobAddJob(data, config) {
  return Http.post('/api/job/addJob', data, config)
}

/**
 * 删除职务
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobDelJob(data, config) {
  return Http.get('/api/job/delJob', data, config)
}

/**
 * 根据部门id搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobEmployeeSelector(data, config) {
  return Http.post('/api/job/employeeSelector', data, config)
}

/**
 * 根据名称或手机号搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobQueryEmployeeByPhoneOrName(data, config) {
  return Http.post('/api/job/queryEmployeeByPhoneOrName', data, config)
}

/**
 * 获取职务列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobQueryTree(data, config) {
  return Http.post('/api/job/queryTree', data, config)
}

/**
 * 移除成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobRemoveEmployee(data, config) {
  return Http.post('/api/job/removeEmployee', data, config)
}

/**
 * 修改职务
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function jobUpdateJob(data, config) {
  return Http.post('/api/job/updateJob', data, config)
}
