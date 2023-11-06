import { ApiResponseQueryWalletBalanceResp, ApiResponseboolean } from './_interfaces'
import Mock from 'better-mock'

/** 出行余额 */
export const walletBalance = () => Mock.mock(ApiResponseQueryWalletBalanceResp())

/** 是否开通 */
export const walletJudgeStatus = () => Mock.mock(ApiResponseboolean())
