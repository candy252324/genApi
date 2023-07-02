import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import { ResOfModifyRemark } from './_interfaces'

/** 修改群成员在本群备注 */
export function modifyRemark(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfModifyRemark> {
  return Http.post('/modifyRemark', data, config)
}
