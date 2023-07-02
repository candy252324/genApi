import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

import { ResOfDetail } from './_interfaces'

/** 我在本群信息详情 */
export function detail(
  data: any,
  config?: AxiosRequestConfig
): AxiosPromise<ResOfDetail> {
  return Http.post('/detail', data, config)
}
