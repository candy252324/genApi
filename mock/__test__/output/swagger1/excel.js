import { FileSystemResource, ApiResponseListImportDesktopResp, ApiResponseImportDesktopResp } from './_interfaces'
import Mock from 'better-mock'

/** 导出小麦 */
export const excelExport = () => FileSystemResource()

/** 导入历史 */
export const excelHistory = () => ApiResponseListImportDesktopResp()

/** 导入小麦 */
export const excelImport = () => ApiResponseImportDesktopResp()

/** 下载模版 */
export const excelTemplate = () => FileSystemResource()
