import { Http } from '../../httpJs/index'

/**
 * 注销账号
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userCancel(data, config) {
  return Http.post('/api/user/cancel', data, config)
}

/**
 * 获取注销账号短信验证码
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userGetCancelSmsCode(data, config) {
  return Http.get('/api/user/getCancelSmsCode', data, config)
}

/**
 * 当前channel下是否已经选择租户
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userHasSelectTenant(data, config) {
  return Http.get('/api/user/hasSelectTenant', data, config)
}

/**
 * 获取用户(正常状态)租户信息列表
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userListTenantInfo(data, config) {
  return Http.get('/api/user/listTenantInfo', data, config)
}

/**
 * 修改用户头像
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userModifyAvatar(data, config) {
  return Http.post('/api/user/modifyAvatar', data, config)
}

/**
 * 修改用户邮箱
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userModifyEmail(data, config) {
  return Http.post('/api/user/modifyEmail', data, config)
}

/**
 * 用户个人信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userPersonInfo(data, config) {
  return Http.get('/api/user/personInfo', data, config)
}

/**
 * 查询版本类型
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userQueryAppVersion(data, config) {
  return Http.get('/api/user/queryAppVersion', data, config)
}

/**
 * 切换/设置主企业
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userSetDefaultEnterprise(data, config) {
  return Http.post('/api/user/setDefaultEnterprise', data, config)
}

/**
 * 是否需要验证(添加我为好友)
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userSetIsApprove(data, config) {
  return Http.get('/api/user/setIsApprove', data, config)
}

/**
 * 设置邀请我加入外部群时是否需要确认
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userSetIsGroupApprove(data, config) {
  return Http.get('/api/user/setIsGroupApprove', data, config)
}

/**
 * 是否通知
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userSetIsNotice(data, config) {
  return Http.get('/api/user/setIsNotice', data, config)
}

/**
 * 添加我为好友的方式
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function userSetRequestChannel(data, config) {
  return Http.post('/api/user/setRequestChannel', data, config)
}
