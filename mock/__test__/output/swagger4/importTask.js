import { ApiResponseDuRuWenJianXiangYing, ApiResponseComPageDaoRuHuaHuaTiXiangYing } from './_interfaces'
import Mock from 'better-mock'

/** 导入excel文件操作 */
export const importTaskImportExcel = () => ApiResponseDuRuWenJianXiangYing()

/** 导入excel文件通过链接 */
export const importTaskImportExcelByUrl = () => ApiResponseDuRuWenJianXiangYing()

/** 旅游导入滑滑梯 */
export const importTaskImportList = () => ApiResponseComPageDaoRuHuaHuaTiXiangYing()
