const request: any = () => {}
import type { ApiResponseQueryWalletBalanceResp, ApiResponseboolean } from './_interfaces.ts'

/** 出行余额 */
export function walletBalance(data: { doorID?: string }): Promise<ApiResponseQueryWalletBalanceResp> {
  return request.get('/api/wallet/balance', data)
}

/** 是否开通 */
export function walletJudgeStatus(): Promise<ApiResponseboolean> {
  return request.get('/api/wallet/judgeStatus')
}
