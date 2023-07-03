import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import {
  FileSystemResource,
  ApiResponseComPageEmployeeAddRecordResp,
} from './_interfaces'

/** 导出未激活成员列表 */
export function apiEmployeeAddRecordExport(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<FileSystemResource> {
  return Http.post('/api/employeeAddRecord/export', data, config)
}

/** 分页查询成员添加记录 */
export function apiEmployeeAddRecordPageRecord(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ApiResponseComPageEmployeeAddRecordResp> {
  return Http.get('/api/employeeAddRecord/pageRecord', data, config)
}
