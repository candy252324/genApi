import { Http } from '../../httpJs/index'

/**
 * 获取员工信息
 * @param {*} config 可选，如：{headers:{}}
 */
export function userGetEmployeeInfo(config) {
  return Http.get('/api/user/getEmployeeInfo', config)
}
