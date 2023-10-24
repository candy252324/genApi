import { ApiResponseQueryWalletBalanceResp, ApiResponseboolean } from './_interfaces'
import Mock from 'mockjs'

/** 出行余额 */
export const walletBalance = () => ApiResponseQueryWalletBalanceResp()

/** 是否开通 */
export const walletJudgeStatus = () => ApiResponseboolean()
