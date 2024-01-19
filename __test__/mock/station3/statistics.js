import Mock from 'better-mock'
import {
  ApiResponseTongJiShuJuPieDataResp,
  ApiResponseListTongJiShuJuHistogramResp,
  ApiResponseRankResp,
} from './_interfaces'

/** APP统计【成交发财梦】 */
export const statisticsAppDealData = () => Mock.mock(ApiResponseTongJiShuJuPieDataResp())

/** APP统计【跟进发财梦】 */
export const statisticsAppFollowData = () => Mock.mock(ApiResponseTongJiShuJuPieDataResp())

/** APP统计【灌水发财梦】 */
export const statisticsAppNewData = () => Mock.mock(ApiResponseTongJiShuJuPieDataResp())

/** 统计【成交发财梦】 */
export const statisticsDealData = () => Mock.mock(ApiResponseTongJiShuJuPieDataResp())

/** 统计【跟进发财梦】 */
export const statisticsFollowData = () => Mock.mock(ApiResponseTongJiShuJuPieDataResp())

/** 统计【柱状图】 */
export const statisticsHistogram = () => Mock.mock(ApiResponseListTongJiShuJuHistogramResp())

/** initRecentSixDay */
export const statisticsInitInitRecentSixDay = () => Mock.mock('')

/** recountSixMonth */
export const statisticsInitInitRecentSixMonth = () => Mock.mock('')

/** initRecentSixQuarter */
export const statisticsInitInitRecentSixQuarter = () => Mock.mock('')

/** initRecentSixWeek */
export const statisticsInitInitRecentSixWeek = () => Mock.mock('')

/** initRecentSixYear */
export const statisticsInitInitRecentSixYear = () => Mock.mock('')

/** initRecountDesktopList */
export const statisticsInitInitRecountDesktopList = () => Mock.mock('')

/** initRecountDesktopRank */
export const statisticsInitInitRecountDesktopRank = () => Mock.mock('')

/** 统计【灌水发财梦】 */
export const statisticsNewData = () => Mock.mock(ApiResponseTongJiShuJuPieDataResp())

/** 统计排名 */
export const statisticsRankList = () => Mock.mock(ApiResponseRankResp())
