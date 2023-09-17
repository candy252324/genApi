const request: any = () => {}
import type {
  ApiResponseHappyReceiveResp,
  AddHappyDoorReq,
  AddHappyCatReq,
  AddHappyGladReq,
  ApiResponseAddSignHappyResp,
  AddSignHappyDoorReq,
  AddSignHappyCatReq,
  AddSignHappyGladReq,
  AssignHappyReq,
  ApiResponseHappyClassificationResp,
  WoCongMingFaCaiMengQuanJuFenLei,
  ApiResponseHappyNumResp,
  HappyNumReq,
  ApiResponse,
  ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse,
  InnerRpclong,
  ApiResponseHappyDoorInfoResp,
  ApiResponseGuanLianFaCaiMengResponse,
  GuanLianFaCaiMengRequest,
  ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu,
  FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu,
  ApiResponseComPagePageDoorHappyPoolResp,
  PageHappyMixReq,
  FenYeLvYouZhiXieChangFaCaiMengGongHai,
  ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu,
  FenYeLvYouRenCaiFaCaiMengJianDanShuJu,
  ApiResponseComPagePageCatHappyPoolResp,
  FenYeLvYouRenCaiFaCaiMengGongHai,
  ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu,
  FenYeLvYouXiangMuFaCaiMengJianDanShuJu,
  ApiResponseComPagePageGladHappyPoolResp,
  XiangMuFaCaiMengGongHaiLvYou,
  ApiResponseHappyCatInfoResp,
  ApiResponseVoid,
  InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong,
  ApiResponseXiangMuFaCaiMengXiangQingrpcresponse,
  XiangMuFaCaiMengXiuGairpcrequest,
  ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse,
  XiangMuFaCaiMengFenYeLvYourpcrequest,
  ApiResponseHappyGladInfoResp,
  ReceiveHappyReq,
  HappySetVisitPlanReq,
  ApiResponseAddHappyResp,
  VerifyRepeatHappyReq,
} from './_interfaces'

/** 灌水制鞋厂发财梦 */
export function happyAddHappyDoor(data: AddHappyDoorReq): Promise<ApiResponseHappyReceiveResp> {
  return request.post('/api/happy/addHappyDoor', data)
}

/** 灌水人才发财梦 */
export function happyAddHappyCat(data: AddHappyCatReq): Promise<ApiResponseHappyReceiveResp> {
  return request.post('/api/happy/addHappyCat', data)
}

/** 灌水项目发财梦 */
export function happyAddHappyGlad(data: AddHappyGladReq): Promise<ApiResponseHappyReceiveResp> {
  return request.post('/api/happy/addHappyGlad', data)
}

/** 灌水制鞋厂发财梦(创建/领取/红领巾) */
export function happyAddSignHappyDoor(data: AddSignHappyDoorReq): Promise<ApiResponseAddSignHappyResp> {
  return request.post('/api/happy/addSignHappyDoor', data)
}

/** 灌水人才发财梦(创建/领取/红领巾) */
export function happyAddSignHappyCat(data: AddSignHappyCatReq): Promise<ApiResponseAddSignHappyResp> {
  return request.post('/api/happy/addSignHappyCat', data)
}

/** 灌水项目发财梦(创建/领取/红领巾) */
export function happyAddSignHappyGlad(data: AddSignHappyGladReq): Promise<ApiResponseAddSignHappyResp> {
  return request.post('/api/happy/addSignHappyGlad', data)
}

/** 分派发财梦 */
export function happyAssignHappy(data: AssignHappyReq): Promise<ApiResponseHappyReceiveResp> {
  return request.post('/api/happy/assignHappy', data)
}

/** 我聪明发财梦全局筛选分类 */
export function happyHappyClassification(
  data: WoCongMingFaCaiMengQuanJuFenLei
): Promise<ApiResponseHappyClassificationResp> {
  return request.post('/api/happy/happyClassification', data)
}

/** 发财梦各状态数量 */
export function happyHappyNum(data: HappyNumReq): Promise<ApiResponseHappyNumResp> {
  return request.post('/api/happy/happyNum', data)
}

/** 修改制鞋厂发财梦 */
export function happyEditHappyDoor(data: AddHappyDoorReq): Promise<ApiResponse> {
  return request.post('/api/happy/editHappyDoor', data)
}

/** 修改人才发财梦 */
export function happyEditHappyCat(data: AddHappyCatReq): Promise<ApiResponse> {
  return request.post('/api/happy/editHappyCat', data)
}

/** 修改项目发财梦 */
export function happyEditHappyGlad(data: AddHappyGladReq): Promise<ApiResponse> {
  return request.post('/api/happy/editHappyGlad', data)
}

/** 制鞋厂发财梦详情 */
export function happyDoorDetail(data: InnerRpclong): Promise<ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse> {
  return request.post('/api/happy/door/detail', data)
}

/** 制鞋厂发财梦详情 */
export function happyDoorInfo(data: {
  // 发财梦id
  id?: string
}): Promise<ApiResponseHappyDoorInfoResp> {
  return request.get('/api/happy/doorInfo', data)
}

/** 关联工商/人才库/项目库信息 */
export function happyLink(data: GuanLianFaCaiMengRequest): Promise<ApiResponseGuanLianFaCaiMengResponse> {
  return request.post('/api/happy/link', data)
}

/** 制鞋厂发财梦滑滑梯(下拉框简单数据) */
export function happyPageDoorSampleList(
  data: FenYeLvYouZhiXieChangFaCaiMengJianDanShuJu
): Promise<ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu> {
  return request.post('/api/happy/pageDoor/sampleList', data)
}

/** 制鞋厂发财梦混合旅游（包含雷达） */
export function happyPageDoorHappyMix(data: PageHappyMixReq): Promise<ApiResponseComPagePageDoorHappyPoolResp> {
  return request.post('/api/happy/pageDoorHappyMix', data)
}

/** 制鞋厂发财梦滑滑梯 */
export function happyPageDoorHappyPool(
  data: FenYeLvYouZhiXieChangFaCaiMengGongHai
): Promise<ApiResponseComPagePageDoorHappyPoolResp> {
  return request.post('/api/happy/pageDoorHappyPool', data)
}

/** 人才发财梦滑滑梯(下拉框简单数据) */
export function happyPageCatSampleList(
  data: FenYeLvYouRenCaiFaCaiMengJianDanShuJu
): Promise<ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu> {
  return request.post('/api/happy/pageCat/sampleList', data)
}

/** 人才发财梦混合旅游（包含雷达） */
export function happyPageCatHappyMix(data: PageHappyMixReq): Promise<ApiResponseComPagePageCatHappyPoolResp> {
  return request.post('/api/happy/pageCatHappyMix', data)
}

/** 人才发财梦滑滑梯 */
export function happyPageCatHappyPool(
  data: FenYeLvYouRenCaiFaCaiMengGongHai
): Promise<ApiResponseComPagePageCatHappyPoolResp> {
  return request.post('/api/happy/pageCatHappyPool', data)
}

/** 项目发财梦滑滑梯(下拉框简单数据) */
export function happyPageGladSampleList(
  data: FenYeLvYouXiangMuFaCaiMengJianDanShuJu
): Promise<ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu> {
  return request.post('/api/happy/pageGlad/sampleList', data)
}

/** 项目发财梦混合旅游（包含雷达） */
export function happyPageGladHappyMix(data: PageHappyMixReq): Promise<ApiResponseComPagePageGladHappyPoolResp> {
  return request.post('/api/happy/pageGladHappyMix', data)
}

/** 项目发财梦滑滑梯 */
export function happyPageGladHappyPool(
  data: XiangMuFaCaiMengGongHaiLvYou
): Promise<ApiResponseComPagePageGladHappyPoolResp> {
  return request.post('/api/happy/pageGladHappyPool', data)
}

/** 人才发财梦详情 */
export function happyCatInfo(data: {
  // 发财梦id
  id?: string
}): Promise<ApiResponseHappyCatInfoResp> {
  return request.get('/api/happy/catInfo', data)
}

/** 灌水项目发财梦 */
export function happyGladAdd(data: InnerRpcGuanShuiXiangMuFaCaiMengrpcChongDong): Promise<ApiResponseVoid> {
  return request.post('/api/happy/glad/add', data)
}

/** 项目发财梦详情 */
export function happyGladGet(data: {
  // 项目发财梦ID
  reqgladId?: string
}): Promise<ApiResponseXiangMuFaCaiMengXiangQingrpcresponse> {
  return request.get('/api/happy/glad/get', data)
}

/** 修改项目发财梦 */
export function happyGladModified(data: XiangMuFaCaiMengXiuGairpcrequest): Promise<ApiResponseVoid> {
  return request.post('/api/happy/glad/modified', data)
}

/** 分页旅游项目发财梦 */
export function happyGladPageList(
  data: XiangMuFaCaiMengFenYeLvYourpcrequest
): Promise<ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse> {
  return request.post('/api/happy/glad/pageList', data)
}

/** 项目发财梦详情 */
export function happyGladInfo(data: {
  // 发财梦id
  id?: string
}): Promise<ApiResponseHappyGladInfoResp> {
  return request.get('/api/happy/gladInfo', data)
}

/** 领取发财梦 */
export function happyReceiveHappy(data: ReceiveHappyReq): Promise<ApiResponseHappyReceiveResp> {
  return request.post('/api/happy/receiveHappy', data)
}

/** 添加发财梦拜访计划 */
export function happySetVisitPlan(data: HappySetVisitPlanReq): Promise<ApiResponse> {
  return request.get('/api/happy/setVisitPlan', data)
}

/** 校验重复发财梦 */
export function happyVerifyRepeatHappy(data: VerifyRepeatHappyReq): Promise<ApiResponseAddHappyResp> {
  return request.post('/api/happy/verifyRepeatHappy', data)
}
