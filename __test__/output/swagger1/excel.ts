const request: any = () => {}
import type { FileSystemResource, ApiResponseListImportDesktopResp, ApiResponseImportDesktopResp } from './_interfaces'

/** 导出小麦 */
export function excelExport(data: string[]): Promise<FileSystemResource> {
  return request.post('/api/excel/export', data)
}

/** 导入历史 */
export function excelHistory(): Promise<ApiResponseListImportDesktopResp> {
  return request.get('/api/excel/history')
}

/** 导入小麦 */
export function excelImport(data?: any): Promise<ApiResponseImportDesktopResp> {
  return request.post('/api/excel/import', data)
}

/** 下载模版 */
export function excelTemplate(): Promise<FileSystemResource> {
  return request.get('/api/excel/template')
}
