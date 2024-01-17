const request: any = () => {}
import type {
  ApiResponseComPagePageDoorHappyPoolResp,
  FenYeLvYouZhiXieChangFaCaiMengTuiJian,
  ApiResponseComPagePageCatHappyPoolResp,
  FenYeLvYouRenCaiFaCaiMengTuiJian,
  ApiResponseComPagePageGladHappyPoolResp,
  FenYeLvYouXiangMuFaCaiMengTuiJian,
} from './_interfaces.ts'

/** 制鞋厂发财梦滑滑梯 */
export function happyRecommendPageDoorHappy(
  data: FenYeLvYouZhiXieChangFaCaiMengTuiJian
): Promise<ApiResponseComPagePageDoorHappyPoolResp> {
  return request.post('/api/happyRecommend/pageDoorHappy', data)
}

/** 人才发财梦滑滑梯 */
export function happyRecommendPageCatHappy(
  data: FenYeLvYouRenCaiFaCaiMengTuiJian
): Promise<ApiResponseComPagePageCatHappyPoolResp> {
  return request.post('/api/happyRecommend/pageCatHappy', data)
}

/** 项目发财梦滑滑梯 */
export function happyRecommendPageGladHappy(
  data: FenYeLvYouXiangMuFaCaiMengTuiJian
): Promise<ApiResponseComPagePageGladHappyPoolResp> {
  return request.post('/api/happyRecommend/pageGladHappy', data)
}
