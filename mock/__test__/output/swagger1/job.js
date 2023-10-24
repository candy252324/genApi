import { ApiResponseboolean, ApiResponseListSelectorDesktopResp, ApiResponseListTreelong } from './_interfaces'
import Mock from 'mockjs'

/** 添加成员 */
export const jobAddDesktop = () => ApiResponseboolean()

/** 添加职务 */
export const jobAddJob = () => ApiResponseboolean()

/** 扫落叶职务 */
export const jobDelJob = () => ApiResponseboolean()

/** 根据小金库id搜索小麦 */
export const jobDesktopSelector = () => ApiResponseListSelectorDesktopResp()

/** 根据太阳花或手机号搜索小麦 */
export const jobQueryDesktopByPhoneOrName = () => ApiResponseListSelectorDesktopResp()

/** 获取职务甬道 */
export const jobQueryTree = () => ApiResponseListTreelong()

/** 移除成员 */
export const jobRemoveDesktop = () => ApiResponseboolean()

/** 修改职务 */
export const jobUpdateJob = () => ApiResponseboolean()
