import { Http } from '../../httpJs/index'

/**
 * 提醒审核
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReAlertAudit(data, config) {
  return Http.get('/api/empower/enterpriseRe/alertAudit', data, config)
}

/**
 * 外部关联码-主动申请同意关联
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReApplyScanAgreeRe(data, config) {
  return Http.get('/api/empower/enterpriseRe/applyScanAgreeRe', data, config)
}

/**
 * 批量授权
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReBathAuth(data, config) {
  return Http.post('/api/empower/enterpriseRe/bathAuth', data, config)
}

/**
 * 批量取消授权
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReBathCancelAuth(data, config) {
  return Http.post('/api/empower/enterpriseRe/bathCancelAuth', data, config)
}

/**
 * 获取部门树_全部部门
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReDeptTree(data, config) {
  return Http.get('/api/empower/enterpriseRe/deptTree', data, config)
}

/**
 * 公司关联详情
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReDetail(data, config) {
  return Http.get('/api/empower/enterpriseRe/detail', data, config)
}

/**
 * 外部关联码-生成外部关联码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReDetailGenReLinkOrQr(data, config) {
  return Http.get(
    '/api/empower/enterpriseRe/detail/genReLinkOrQr',
    data,
    config
  )
}

/**
 * 根据手机号查询创建的公司
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReDetailGetEnterpriseListByPhone(
  data,
  config
) {
  return Http.get(
    '/api/empower/enterpriseRe/detail/getEnterpriseListByPhone',
    data,
    config
  )
}

/**
 * 获取平台公司列表
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReDetailListEnterprise(config) {
  return Http.get('/api/empower/enterpriseRe/detail/listEnterprise', config)
}

/**
 * 批量授权-员工同意/拒绝
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReEmployeeOperEmType(data, config) {
  return Http.get(
    '/api/empower/enterpriseRe/employeeOper/em/${type}',
    data,
    config
  )
}

/**
 * 关联设置-获取角色列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReEntReSetListRole(data, config) {
  return Http.get('/api/empower/enterpriseRe/entReSet/listRole', data, config)
}

/**
 * 邀请关联组织-关联方负责人关联操作
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReFranchiseOperOper(data, config) {
  return Http.get(
    '/api/empower/enterpriseRe/franchiseOper/${oper}',
    data,
    config
  )
}

/**
 * 通过手机号查询账户姓名
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReGetAccByMobile(data, config) {
  return Http.get('/api/empower/enterpriseRe/getAccByMobile', data, config)
}

/**
 * 批量授权-获取短信信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReGetEmEmployeeInfoLinkCode(data, config) {
  return Http.get(
    '/api/empower/enterpriseRe/getEmEmployeeInfo/${linkCode}',
    data,
    config
  )
}

/**
 * 邀请授权-查询回显信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReGetEmpowerInfo(data, config) {
  return Http.get('/api/empower/enterpriseRe/getEmpowerInfo', data, config)
}

/**
 * 关联设置-获取公司关联设置
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReGetEntReSet(data, config) {
  return Http.get('/api/empower/enterpriseRe/getEntReSet', data, config)
}

/**
 * 邀请关联组织-获取邀请信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReGetInviteReInfoLinkCode(data, config) {
  return Http.get(
    '/api/empower/enterpriseRe/getInviteReInfo/${linkCode}',
    data,
    config
  )
}

/**
 * 邀请关联组织-发起邀请
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReInviteRePlateFromOrg(data, config) {
  return Http.post(
    '/api/empower/enterpriseRe/inviteRePlateFromOrg',
    data,
    config
  )
}

/**
 * 公司关联列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReList(data, config) {
  return Http.get('/api/empower/enterpriseRe/list', data, config)
}

/**
 * 获取可授权的角色列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReListRoleList(data, config) {
  return Http.get('/api/empower/enterpriseRe/listRoleList', data, config)
}

/**
 * 授权员工列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseRePageEmployeeList(data, config) {
  return Http.get('/api/empower/enterpriseRe/pageEmployeeList', data, config)
}

/**
 * 关联部门树-公司列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReReReEntTree(data, config) {
  return Http.get('/api/empower/enterpriseRe/re/reEntTree', data, config)
}

/**
 * 关联公司树
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReReEntTree(data, config) {
  return Http.get('/api/empower/enterpriseRe/reEntTree', data, config)
}

/**
 * 重新申请关联
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReRefreshApplyRe(data, config) {
  return Http.get('/api/empower/enterpriseRe/refreshApplyRe', data, config)
}

/**
 * 解除关联
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReRelationCancel(data, config) {
  return Http.get('/api/empower/enterpriseRe/relation/cancel', data, config)
}

/**
 * 重新关联
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReRelationRefresh(data, config) {
  return Http.get('/api/empower/enterpriseRe/relation/refresh', data, config)
}

/**
 * 外部关联码-查询组织关联
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReScanGetOrgInfo(data, config) {
  return Http.get('/api/empower/enterpriseRe/scan/getOrgInfo', data, config)
}

/**
 * 邀请授权-发送邀请授权短信
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReSendEmpowerSms(data, config) {
  return Http.post('/api/empower/enterpriseRe/sendEmpowerSms', data, config)
}

/**
 * 关联设置-修改公司关联设置
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function empowerEnterpriseReUpEntReSetEnterpriseId(data, config) {
  return Http.post(
    '/api/empower/enterpriseRe/upEntReSet/${enterpriseId}',
    data,
    config
  )
}
