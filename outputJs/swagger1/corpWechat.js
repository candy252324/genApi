import { Http } from '../../httpJs/index'

/**
 * 获取应用授权链接
 * @param {*} config 可选，如：{headers:{}}
 */
export function corpWechatAppAuthLink(config) {
  return Http.get('/api/corpWechat/appAuthLink', config)
}

/**
 * 获取渠道用户信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function corpWechatAuthUser(data, config) {
  return Http.post('/api/corpWechat/authUser', data, config)
}

/**
 * 初始化企微agent_config
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function corpWechatInitAgent(data, config) {
  return Http.post('/api/corpWechat/initAgent', data, config)
}

/**
 * 用户登陆授权链接
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function corpWechatOauth2(data, config) {
  return Http.post('/api/corpWechat/oauth2', data, config)
}

/**
 * 同步组织架构
 * @param {*} config 可选，如：{headers:{}}
 */
export function corpWechatSyncDoc(config) {
  return Http.get('/api/corpWechat/syncDoc', config)
}
