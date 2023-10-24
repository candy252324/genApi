import {
  ApiResponseTongJiShuJuPieDataResp,
  ApiResponseListTongJiShuJuHistogramResp,
  ApiResponseRankResp,
} from './_interfaces'
import Mock from 'mockjs'

/** APP统计【成交发财梦】 */
export const statisticsAppDealData = () => ApiResponseTongJiShuJuPieDataResp()

/** APP统计【跟进发财梦】 */
export const statisticsAppFollowData = () => ApiResponseTongJiShuJuPieDataResp()

/** APP统计【灌水发财梦】 */
export const statisticsAppNewData = () => ApiResponseTongJiShuJuPieDataResp()

/** 统计【成交发财梦】 */
export const statisticsDealData = () => ApiResponseTongJiShuJuPieDataResp()

/** 统计【跟进发财梦】 */
export const statisticsFollowData = () => ApiResponseTongJiShuJuPieDataResp()

/** 统计【柱状图】 */
export const statisticsHistogram = () => ApiResponseListTongJiShuJuHistogramResp()

/** initRecentSixDay */
export const statisticsInitInitRecentSixDay = () => ''

/** recountSixMonth */
export const statisticsInitInitRecentSixMonth = () => ''

/** initRecentSixQuarter */
export const statisticsInitInitRecentSixQuarter = () => ''

/** initRecentSixWeek */
export const statisticsInitInitRecentSixWeek = () => ''

/** initRecentSixYear */
export const statisticsInitInitRecentSixYear = () => ''

/** initRecountDesktopList */
export const statisticsInitInitRecountDesktopList = () => ''

/** initRecountDesktopRank */
export const statisticsInitInitRecountDesktopRank = () => ''

/** 统计【灌水发财梦】 */
export const statisticsNewData = () => ApiResponseTongJiShuJuPieDataResp()

/** 统计排名 */
export const statisticsRankList = () => ApiResponseRankResp()
