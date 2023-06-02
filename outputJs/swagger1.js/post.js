import {Http} from '../../httpJs/index';

/**
 * 添加成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postAddEmployee  (data, config) {
  return Http.get('/api/post/addEmployee', data, config)
}

/**
 * 新增岗位
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postAddPost  (data, config) {
  return Http.post('/api/post/addPost', data, config)
}

/**
 * 移除成员
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postDelEmployee  (data, config) {
  return Http.get('/api/post/delEmployee', data, config)
}

/**
 * 删除岗位
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postDelPostPostId  (data, config) {
  return Http.get('/api/post/delPost/${postId}', data, config)
}

/**
 * 修改岗位
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postEditPost  (data, config) {
  return Http.post('/api/post/editPost', data, config)
}

/**
 * 获取岗位列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postList  (data, config) {
  return Http.get('/api/post/list', data, config)
}

/**
 * 根据部门id搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postQueryEmployeeByDeptId  (data, config) {
  return Http.get('/api/post/queryEmployeeByDeptId', data, config)
}

/**
 * 根据名称或手机号搜索员工
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function postQueryEmployeeByPhoneOrName  (data, config) {
  return Http.get('/api/post/queryEmployeeByPhoneOrName', data, config)
}
