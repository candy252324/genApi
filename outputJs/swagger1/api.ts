import { Http } from '../../httpTs/index'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
export interface GetUsedTuitionDetailListDataRequest {
  /** 校区 **/
  schoolIds?: number[]
  /** 日期 **/
  searchDate?: string[]
  /** 类别Id **/
  categoryId: number
}

export interface PageResultOfUsedTuitionDetailModel {
  totalCount: number

  currentIndex: number

  itemCount: number

  list: string[]
}

export interface ResponseResultOfPageResultOfUsedTuitionDetailModel {
  status: boolean

  errorCode: number

  errorMessage: string

  data: PageResultOfUsedTuitionDetailModel
}

/** 学费消耗报表 */
export const GetUsedTuitionDetailListData = (
  req: GetUsedTuitionDetailListDataRequest,
  options?: AxiosRequestConfig | undefined
): AxiosPromise<ResponseResultOfPageResultOfUsedTuitionDetailModel> => {
  return Http.post('/api2/Report/GetUsedTuitionDetailListData', req, options)
}
