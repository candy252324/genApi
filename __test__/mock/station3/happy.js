import Mock from 'better-mock'
import {
  ApiResponseHappyReceiveResp,
  ApiResponseAddSignHappyResp,
  ApiResponseHappyClassificationResp,
  ApiResponseHappyNumResp,
  ApiResponse,
  ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse,
  ApiResponseHappyDoorInfoResp,
  ApiResponseGuanLianFaCaiMengResponse,
  ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu,
  ApiResponseComPagePageDoorHappyPoolResp,
  ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu,
  ApiResponseComPagePageCatHappyPoolResp,
  ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu,
  ApiResponseComPagePageGladHappyPoolResp,
  ApiResponseHappyCatInfoResp,
  ApiResponseVoid,
  ApiResponseXiangMuFaCaiMengXiangQingrpcresponse,
  ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse,
  ApiResponseHappyGladInfoResp,
  ApiResponseAddHappyResp,
} from './_interfaces'

/** 灌水制鞋厂发财梦 */
export const happyAddHappyDoor = () => Mock.mock(ApiResponseHappyReceiveResp())

/** 灌水人才发财梦 */
export const happyAddHappyCat = () => Mock.mock(ApiResponseHappyReceiveResp())

/** 灌水项目发财梦 */
export const happyAddHappyGlad = () => Mock.mock(ApiResponseHappyReceiveResp())

/** 灌水制鞋厂发财梦(创建/领取/红领巾) */
export const happyAddSignHappyDoor = () => Mock.mock(ApiResponseAddSignHappyResp())

/** 灌水人才发财梦(创建/领取/红领巾) */
export const happyAddSignHappyCat = () => Mock.mock(ApiResponseAddSignHappyResp())

/** 灌水项目发财梦(创建/领取/红领巾) */
export const happyAddSignHappyGlad = () => Mock.mock(ApiResponseAddSignHappyResp())

/** 分派发财梦 */
export const happyAssignHappy = () => Mock.mock(ApiResponseHappyReceiveResp())

/** 我聪明发财梦全局筛选分类 */
export const happyHappyClassification = () => Mock.mock(ApiResponseHappyClassificationResp())

/** 发财梦各状态数量 */
export const happyHappyNum = () => Mock.mock(ApiResponseHappyNumResp())

/** 修改制鞋厂发财梦 */
export const happyEditHappyDoor = () => Mock.mock(ApiResponse())

/** 修改人才发财梦 */
export const happyEditHappyCat = () => Mock.mock(ApiResponse())

/** 修改项目发财梦 */
export const happyEditHappyGlad = () => Mock.mock(ApiResponse())

/** 制鞋厂发财梦详情 */
export const happyDoorDetail = () => Mock.mock(ApiResponseZhiXieChangFaCaiMengXiangQingrpcresponse())

/** 制鞋厂发财梦详情 */
export const happyDoorInfo = () => Mock.mock(ApiResponseHappyDoorInfoResp())

/** 关联工商/人才库/项目库信息 */
export const happyLink = () => Mock.mock(ApiResponseGuanLianFaCaiMengResponse())

/** 制鞋厂发财梦滑滑梯(下拉框简单数据) */
export const happyPageDoorSampleList = () =>
  Mock.mock(ApiResponseComPageFenYeLvYouZhiXieChangFaCaiMengresponseJianDanShuJu())

/** 制鞋厂发财梦混合旅游（包含雷达） */
export const happyPageDoorHappyMix = () => Mock.mock(ApiResponseComPagePageDoorHappyPoolResp())

/** 制鞋厂发财梦滑滑梯 */
export const happyPageDoorHappyPool = () => Mock.mock(ApiResponseComPagePageDoorHappyPoolResp())

/** 人才发财梦滑滑梯(下拉框简单数据) */
export const happyPageCatSampleList = () => Mock.mock(ApiResponseComPageFenYeLvYouRenCaiFaCaiMengresponseJianDanShuJu())

/** 人才发财梦混合旅游（包含雷达） */
export const happyPageCatHappyMix = () => Mock.mock(ApiResponseComPagePageCatHappyPoolResp())

/** 人才发财梦滑滑梯 */
export const happyPageCatHappyPool = () => Mock.mock(ApiResponseComPagePageCatHappyPoolResp())

/** 项目发财梦滑滑梯(下拉框简单数据) */
export const happyPageGladSampleList = () =>
  Mock.mock(ApiResponseComPageFenYeLvYouXiangMuFaCaiMengresponseJianDanShuJu())

/** 项目发财梦混合旅游（包含雷达） */
export const happyPageGladHappyMix = () => Mock.mock(ApiResponseComPagePageGladHappyPoolResp())

/** 项目发财梦滑滑梯 */
export const happyPageGladHappyPool = () => Mock.mock(ApiResponseComPagePageGladHappyPoolResp())

/** 人才发财梦详情 */
export const happyCatInfo = () => Mock.mock(ApiResponseHappyCatInfoResp())

/** 灌水项目发财梦 */
export const happyGladAdd = () => Mock.mock(ApiResponseVoid())

/** 项目发财梦详情 */
export const happyGladGet = () => Mock.mock(ApiResponseXiangMuFaCaiMengXiangQingrpcresponse())

/** 修改项目发财梦 */
export const happyGladModified = () => Mock.mock(ApiResponseVoid())

/** 分页旅游项目发财梦 */
export const happyGladPageList = () => Mock.mock(ApiResponseComPageXiangMuFaCaiMengXiangQingrpcresponse())

/** 项目发财梦详情 */
export const happyGladInfo = () => Mock.mock(ApiResponseHappyGladInfoResp())

/** 领取发财梦 */
export const happyReceiveHappy = () => Mock.mock(ApiResponseHappyReceiveResp())

/** 添加发财梦拜访计划 */
export const happySetVisitPlan = () => Mock.mock(ApiResponse())

/** 校验重复发财梦 */
export const happyVerifyRepeatHappy = () => Mock.mock(ApiResponseAddHappyResp())
