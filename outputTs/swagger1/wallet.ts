import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { ResOfApiWalletBalance, ResOfApiWalletJudgeStatus } from './_interfaces'

/** 查询余额 */
export function apiWalletBalance(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiWalletBalance> {
  return Http.get('/api/wallet/balance', data, config)
}

/** 是否开通 */
export function apiWalletJudgeStatus(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiWalletJudgeStatus> {
  return Http.get('/api/wallet/judgeStatus', config)
}
