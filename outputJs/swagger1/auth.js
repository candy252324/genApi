import { Http } from '../../httpJs/index'

/**
 * 授权中心 查询当前租户的企业组织授权简略信息列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function authEnterpriseAuthOrgInfos(data, config) {
  return Http.post('/api/auth/enterprise/auth/org/infos', data, config)
}

/**
 * 批量操作用户 授权/取消授权
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function authEnterpriseAuthUsers(data, config) {
  return Http.post('/api/auth/enterprise/auth/users', data, config)
}

/**
 * 查询某业务类型下，员工是否有授权
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function authEnterpriseAuthUsersAuthstatus(data, config) {
  return Http.post('/api/auth/enterprise/auth/users/auth-status', data, config)
}
