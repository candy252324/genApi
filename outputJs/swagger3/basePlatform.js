import { Http } from '../../httpJs/index'

/**
 * 查询员工信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function basePlatformGetEmployeeAllByUserAndTenant(data, config) {
  return Http.post('/basePlatform/getEmployeeAllByUserAndTenant', data, config)
}

/**
 * 查询当前部门及子部门信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function basePlatformListDeptByParent(data, config) {
  return Http.post('/basePlatform/listDeptByParent', data, config)
}

/**
 * 查询租户列表信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function basePlatformListTenantInfo(data, config) {
  return Http.post('/basePlatform/listTenantInfo', data, config)
}

/**
 * 查询所有企业
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function basePlatformQueryEnterpriseAll(data, config) {
  return Http.post('/basePlatform/queryEnterpriseAll', data, config)
}
