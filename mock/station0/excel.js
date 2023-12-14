import Mock from 'better-mock'
import { FileSystemResource, ApiResponseListImportDesktopResp, ApiResponseImportDesktopResp } from './_interfaces'

/** 导出小麦 */
export const excelExport = () => Mock.mock(FileSystemResource())

/** 导入历史 */
export const excelHistory = () => Mock.mock(ApiResponseListImportDesktopResp())

/** 导入小麦 */
export const excelImport = () => Mock.mock(ApiResponseImportDesktopResp())

/** 下载模版 */
export const excelTemplate = () => Mock.mock(FileSystemResource())
