import Mock from 'better-mock'
import { ApiResponseQueryWalletBalanceResp, ApiResponseboolean } from './_interfaces'

/** 出行余额 */
export const walletBalance = () => Mock.mock(ApiResponseQueryWalletBalanceResp())

/** 是否开通 */
export const walletJudgeStatus = () => Mock.mock(ApiResponseboolean())
