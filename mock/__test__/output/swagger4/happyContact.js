import { ApiResponseLianXiRenHuaHuaTi, ApiResponseboolean, ApiResponseComPageLianXiRenHuaHuaTi } from './_interfaces'
import Mock from 'better-mock'

/** 添加联系人 */
export const happyContactAdd = () => Mock.mock(ApiResponseLianXiRenHuaHuaTi())

/** 倒垃圾联系人 */
export const happyContactDeleteById = () => Mock.mock(ApiResponseboolean())

/** 联系人滑滑梯 */
export const happyContactList = () => Mock.mock(ApiResponseComPageLianXiRenHuaHuaTi())
