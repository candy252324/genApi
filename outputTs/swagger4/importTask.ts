import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  ResOfApiImportTaskImportExcel,
  ResOfApiImportTaskImportList,
} from './_interfaces'

/** 导入excel文件操作 */
export function apiImportTaskImportExcel(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiImportTaskImportExcel> {
  return Http.post('/api/importTask/importExcel', data, config)
}

/** 查询导入列表 */
export function apiImportTaskImportList(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfApiImportTaskImportList> {
  return Http.post('/api/importTask/importList', data, config)
}
