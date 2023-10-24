const request: any = () => {}
import type {
  ApiResponseTongJiShuJuPieDataResp,
  PaiMingTongJiPieDataReq,
  ApiResponseListTongJiShuJuHistogramResp,
  ZhuZhuangTuTongJiHistogramDataReq,
  ApiResponseRankResp,
  PaiMingTongJiRankDataReq,
} from './_interfaces'

/** APP统计【成交发财梦】 */
export function statisticsAppDealData(data: PaiMingTongJiPieDataReq): Promise<ApiResponseTongJiShuJuPieDataResp> {
  return request.post('/api/statistics/app/dealData', data)
}

/** APP统计【跟进发财梦】 */
export function statisticsAppFollowData(data: PaiMingTongJiPieDataReq): Promise<ApiResponseTongJiShuJuPieDataResp> {
  return request.post('/api/statistics/app/followData', data)
}

/** APP统计【灌水发财梦】 */
export function statisticsAppNewData(data: PaiMingTongJiPieDataReq): Promise<ApiResponseTongJiShuJuPieDataResp> {
  return request.post('/api/statistics/app/newData', data)
}

/** 统计【成交发财梦】 */
export function statisticsDealData(data: PaiMingTongJiPieDataReq): Promise<ApiResponseTongJiShuJuPieDataResp> {
  return request.post('/api/statistics/dealData', data)
}

/** 统计【跟进发财梦】 */
export function statisticsFollowData(data: PaiMingTongJiPieDataReq): Promise<ApiResponseTongJiShuJuPieDataResp> {
  return request.post('/api/statistics/followData', data)
}

/** 统计【柱状图】 */
export function statisticsHistogram(
  data: ZhuZhuangTuTongJiHistogramDataReq
): Promise<ApiResponseListTongJiShuJuHistogramResp> {
  return request.post('/api/statistics/histogram', data)
}

/** initRecentSixDay */
export function statisticsInitInitRecentSixDay(): Promise<any> {
  return request.get('/api/statistics/init/initRecentSixDay')
}

/** recountSixMonth */
export function statisticsInitInitRecentSixMonth(): Promise<any> {
  return request.get('/api/statistics/init/initRecentSixMonth')
}

/** initRecentSixQuarter */
export function statisticsInitInitRecentSixQuarter(): Promise<any> {
  return request.get('/api/statistics/init/initRecentSixQuarter')
}

/** initRecentSixWeek */
export function statisticsInitInitRecentSixWeek(): Promise<any> {
  return request.get('/api/statistics/init/initRecentSixWeek')
}

/** initRecentSixYear */
export function statisticsInitInitRecentSixYear(): Promise<any> {
  return request.get('/api/statistics/init/initRecentSixYear')
}

/** initRecountDesktopList */
export function statisticsInitInitRecountDesktopList(): Promise<any> {
  return request.get('/api/statistics/init/initRecountDesktopList')
}

/** initRecountDesktopRank */
export function statisticsInitInitRecountDesktopRank(): Promise<any> {
  return request.get('/api/statistics/init/initRecountDesktopRank')
}

/** 统计【灌水发财梦】 */
export function statisticsNewData(data: PaiMingTongJiPieDataReq): Promise<ApiResponseTongJiShuJuPieDataResp> {
  return request.post('/api/statistics/newData', data)
}

/** 统计排名 */
export function statisticsRankList(data: PaiMingTongJiRankDataReq): Promise<ApiResponseRankResp> {
  return request.post('/api/statistics/rankList', data)
}
