import { Http } from '../../httpJs/index'

/**
 * 获取渠道用户信息
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function clientCorpWechatAuthUser(data, config) {
  return Http.post('/api/client/corpWechat/authUser', data, config)
}

/**
 * 用户登陆授权链接
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function clientCorpWechatOauth2(data, config) {
  return Http.post('/api/client/corpWechat/oauth2', data, config)
}
