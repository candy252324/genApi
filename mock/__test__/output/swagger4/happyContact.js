import { ApiResponseLianXiRenHuaHuaTi, ApiResponseboolean, ApiResponseComPageLianXiRenHuaHuaTi } from './_interfaces'
import Mock from 'mockjs'

/** 添加联系人 */
export const happyContactAdd = () => ApiResponseLianXiRenHuaHuaTi()

/** 倒垃圾联系人 */
export const happyContactDeleteById = () => ApiResponseboolean()

/** 联系人滑滑梯 */
export const happyContactList = () => ApiResponseComPageLianXiRenHuaHuaTi()
