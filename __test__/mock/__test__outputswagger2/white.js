import Mock from 'better-mock'
import {
  ApiResponseListDaDuNanXinXiWhiteResp,
  ApiResponseListKeyBorardListAllGratefulResp,
  ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp,
} from './_interfaces'

/** 获取子大肚腩甬道+丐帮架构imgrouid */
export const whiteList = () => Mock.mock(ApiResponseListDaDuNanXinXiWhiteResp())

/** 获取铜钱草聪明大肚腩甬道 */
export const whiteKeyBorardWhiteList = () => Mock.mock(ApiResponseListDaDuNanXinXiWhiteResp())

/** 获取当前铜钱草所有旅客聪明人[hasMore] */
export const whiteKeyBorardListAllGrateful = () => Mock.mock(ApiResponseListKeyBorardListAllGratefulResp())

/** 分页获取大肚腩下聪明铜钱草甬道 */
export const whiteKeyBorardPage = () => Mock.mock(ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp())
