import { Http } from '../../httpJs/index'

/**
 * 取消屏蔽用户
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteAuditCancelShieldId(data, config) {
  return Http.get('/api/invite/audit/cancelShield/${id}', data, config)
}

/**
 * 审核通过
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteAuditPass(data, config) {
  return Http.post('/api/invite/audit/pass', data, config)
}

/**
 * 拒绝加入
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteAuditRefuse(data, config) {
  return Http.post('/api/invite/audit/refuse', data, config)
}

/**
 * 屏蔽用户
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteAuditShieldId(data, config) {
  return Http.get('/api/invite/audit/shield/${id}', data, config)
}

/**
 * 检查邀请码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteCheckInviteCode(data, config) {
  return Http.get('/api/invite/checkInviteCode', data, config)
}

/**
 * 导入未激活成员列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteExport(data, config) {
  return Http.post('/api/invite/export', data, config)
}

/**
 * 邀请成员-生成邀请码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteGenerateInviteShare(data, config) {
  return Http.post('/api/invite/generateInviteShare', data, config)
}

/**
 * 扫码或点击链接回显数据
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteInviteJoinEchoData(data, config) {
  return Http.get('/api/invite/inviteJoinEchoData', data, config)
}

/**
 * 扫码或点击链接登录注册
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteInviteLogin(data, config) {
  return Http.post('/api/invite/inviteLogin', data, config)
}

/**
 * 邀请码加入企业
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteInviteRegister(data, config) {
  return Http.post('/api/invite/inviteRegister', data, config)
}

/**
 * 邀请记录查询
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function invitePageApplyType(data, config) {
  return Http.post('/api/invite/page/${applyType}', data, config)
}

/**
 * 邀请设置查询
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteQuerySetting(config) {
  return Http.get('/api/invite/querySetting', config)
}

/**
 * 邀请设置修改
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function inviteUpdatesetting(data, config) {
  return Http.post('/api/invite/updatesetting', data, config)
}
