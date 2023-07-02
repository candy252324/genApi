import { Http } from '../../httpJs/index'

/**
 * 查询余额
 * @param {*} data 接口入参
 * @param {*} config 可选，如：{headers:{}}
 */
export function walletBalance(data, config) {
  return Http.get('/api/wallet/balance', data, config)
}

/**
 * 是否开通
 * @param {*} config 可选，如：{headers:{}}
 */
export function walletJudgeStatus(config) {
  return Http.get('/api/wallet/judgeStatus', config)
}
