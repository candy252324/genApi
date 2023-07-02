import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiExcelExport,
  ResOfApiExcelHistory,
  ResOfApiExcelImport,
  ResOfApiExcelTemplate,
} from './_interfaces'

/** 导出员工 */
export function apiExcelExport(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiExcelExport> {
  return Http.post('/api/excel/export', data, config)
}

/** 导入历史 */
export function apiExcelHistory(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiExcelHistory> {
  return Http.get('/api/excel/history', config)
}

/** 导入员工 */
export function apiExcelImport(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiExcelImport> {
  return Http.post('/api/excel/import', data, config)
}

/** 下载模版 */
export function apiExcelTemplate(
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiExcelTemplate> {
  return Http.get('/api/excel/template', config)
}
