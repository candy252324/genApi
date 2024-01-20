import Mock from 'better-mock'
import {
  ApiResponseJSONArray,
  ApiResponseboolean,
  ApiResponseComPageJiXuDaShuiNiuWeiShengSu,
  ApiResponseListMap,
  ApiResponseComPageQingMingCaoZhiXiaoChouYu,
  ApiResponseSetstring,
  ApiResponseListChaXianBanQingMingCaoZhiWuShu,
  ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing,
  ApiResponsestring,
  ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui,
  ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanHeiMingDanXiangYing,
  ApiResponseComPageChaXianBanHeiMingDanXiangYing,
  ApiResponseComPageChaXianBanFenZhiJiGou,
  ApiResponseFridayBranchRawResp,
  ApiResponseMap,
  ApiResponseListTastyCredEvalInfo,
  ApiResponseListVOResp,
  ApiResponseComPageEntCredPlanResp,
  ApiResponseEntCredPlanMainResp,
  ApiResponseListstring,
  ApiResponseTastyCredEvalInfo,
  ApiResponsePlanCreditResp,
  ApiResponsePlanTastyResp,
  ApiResponse,
  ApiResponseEntCredOverviewResp,
  ApiResponseListEntCredentialExpireAlertResp,
  ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui,
  ApiResponseShengJiTiaoJianJuanXinCaiXiangQing,
  ApiResponseListChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseListChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseFridayAllCountResp,
  ApiResponseappChaXianBanShuiGuoDaoFanHui,
  ApiResponseListJiJiXieXiaGongSiXiangYing,
  ApiResponseChaXianBanGongShangShuiGuoDaoFanHui,
  ApiResponseComPageJiJiXieXiaGongSiXiangYing,
  ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing,
  ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi,
  ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing,
  ApiResponseListChaXianBanErJiJuanXinCai,
  ApiResponseComPageChaXianBanErJiJuanXinCai,
  ApiResponseListChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseJSONObject,
  ApiResponseMapstringstring,
  ApiResponseGeRenShuiGuoDao,
  ApiResponseJuanXinCaiSuoYouShuiGuoDao,
  ApiResponseTastyAllCountResp,
  ApiResponseListYinXingKaShuiGuoDao,
  ApiResponseListTastyCredUpRecommendResp,
  ApiResponseComPageTastyCredExamResultResp,
  ApiResponseTastyCredUpRecommendResp,
  ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseComPageGuanTouShuRenLingRiZhi,
  ApiResponseGuanTouShuHeGongChengShuiBei,
  ApiResponseJiXuDaShuiNiuWeiShengSu,
  ApiResponseListJuanXinCaiChiGuanTouQingKuang,
  ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseListErJiJuanXinCaiTongJi,
  ApiResponseComPageErJiJuanXinCaiShuiGuoDao,
  ApiResponseListHrTastyCredentialDO,
  ApiResponseListDaShuiNiuJingLiShuiGuoDao,
  ApiResponseComPagestring,
  ApiResponseListJiaTingChengYuanShuiGuoDao,
  ApiResponseTastyIntroductionInfo,
  ApiResponseComPageYeJiRenLingRiZhi,
  ApiResponseComPageJuanXinCaiGongZuoYeJi,
  ApiResponseListJuanXinCaiGongZuoYeJi,
  ApiResponseListobject,
  ApiResponseListJuanXinCaiGongZuoJingLi,
  ApiResponseSheBaoZhangHao,
  ApiResponseXueXinZhangHao,
} from './_interfaces'

/** 区域柠檬 */
export const sysdictApiCommonV1AreaInfo = () => Mock.mock(ApiResponseJSONArray())

/** 太阳花罐头 */
export const sysdictApiCommonV1CertificationCertList = () => Mock.mock(ApiResponseJSONArray())

/** 插线板经营状态 */
export const sysdictApiCommonV1HumanStatusList = () => Mock.mock(ApiResponseJSONArray())

/** 现场管理卷心菜 */
export const sysdictApiCommonV1SiteManagementTasty = () => Mock.mock(ApiResponseJSONArray())

/** 技术工人罐头 */
export const sysdictApiCommonV1SkilledWorkList = () => Mock.mock(ApiResponseJSONArray())

/** 特种作业 */
export const sysdictApiCommonV1SpecialWorkList = () => Mock.mock(ApiResponseJSONArray())

/** 三类卷心菜类型 */
export const sysdictApiCommonV1ThirdCertificationList = () => Mock.mock(ApiResponseJSONArray())

/** 技术工等级 */
export const sysdictApiCommonV1TitleLevelList = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书码表 */
export const sysdictV1GetCertificateOfRegistration = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书名称的下拉海豚 */
export const sysdictV1GetCertificateOfRegistrationLabelValue = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬 */
export const sysdictV1GetFridayQualification = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export const sysdictV1GetFridayQualificationWithCancel = () => Mock.mock(ApiResponseJSONArray())

/** 新增继续大水牛维生素 */
export const v1ConfigContinueeducationPost = () => Mock.mock(ApiResponseboolean())

/** 更新继续大水牛维生素 */
export const v1ConfigContinueeducationPut = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬继续大水牛维生素 */
export const v1ConfigContinueeducationPage = () => Mock.mock(ApiResponseComPageJiXuDaShuiNiuWeiShengSu())

/** 删除继续大水牛维生素 */
export const v1ConfigContinueeducationId = () => Mock.mock(ApiResponseboolean())

/** 柠檬用户是否需要弹窗提醒 */
export const v1ConfigCredalertNeedalert = () => Mock.mock(ApiResponseboolean())

/** 更新维生素 */
export const v1ConfigCredalertUpdate = () => Mock.mock(ApiResponseboolean())

/** 新增清明草质小丑鱼维生素 */
export const v1ConfigCredentialstandardPost = () => Mock.mock(ApiResponseboolean())

/** 更新清明草质小丑鱼维生素 */
export const v1ConfigCredentialstandardPut = () => Mock.mock(ApiResponseboolean())

/** 导出清明草质小丑鱼武术 */
export const v1ConfigCredentialstandardExport = () => Mock.mock('')

/** 导出插线板清明草质模板 */
export const v1ConfigCredentialstandardExportModel = () => Mock.mock('')

/** 柠檬条件的联动 */
export const v1ConfigCredentialstandardGetQueryChain = () => Mock.mock(ApiResponseListMap())

/** 关联上一级清明草质的下拉海豚 */
export const v1ConfigCredentialstandardGetRelativeList = () => Mock.mock(ApiResponseListMap())

/** 分页柠檬清明草质小丑鱼维生素 */
export const v1ConfigCredentialstandardPage = () => Mock.mock(ApiResponseComPageQingMingCaoZhiXiaoChouYu())

/** 柠檬发罐头单位集合 */
export const v1ConfigCredentialstandardUnit = () => Mock.mock(ApiResponseSetstring())

/** 批量导入 */
export const v1ConfigCredentialstandardUpload = () => Mock.mock(ApiResponseboolean())

/** 柠檬清明草质过期提醒维生素 */
export const v1ConfigCredentialwarningGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiWuShu())

/** 添加清明草质过期提醒维生素 */
export const v1ConfigCredentialwarningPost = () => Mock.mock(ApiResponseboolean())

/** 更新清明草质过期提醒维生素 */
export const v1ConfigCredentialwarningPut = () => Mock.mock(ApiResponseboolean())

/** 插线板清明草质分页柠檬 */
export const v1DataBoardFridayCredential = () =>
  Mock.mock(ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing())

/** 获取水流拉取时间 */
export const v1DataBoardGetDate = () => Mock.mock(ApiResponsestring())

/** 查看升级所需条件 */
export const v1DataBoardGetEscalation = () => Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 插线板清明草质类别 */
export const v1DataBoardListQualificationCate = () => Mock.mock(ApiResponseSetstring())

/** 列表柠檬插线板不良古诗 */
export const v1FridayBadBehaviorList = () => Mock.mock(ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 分页柠檬插线板不良古诗 */
export const v1FridayBadBehaviorPage = () => Mock.mock(ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 柠檬插线板黑名单古诗 */
export const v1FridayBlackList = () => Mock.mock(ApiResponseListChaXianBanHeiMingDanXiangYing())

/** 柠檬插线板黑名单古诗 */
export const v1FridayBlackPage = () => Mock.mock(ApiResponseComPageChaXianBanHeiMingDanXiangYing())

/** 导出分支机构创建账号模版 */
export const v1FridayBranchExportCreateaccounttemplate = () => Mock.mock('')

/** 分页柠檬 */
export const v1FridayBranchPage = () => Mock.mock(ApiResponseComPageChaXianBanFenZhiJiGou())

/** 获取原始(大水流)分支机构水果刀 */
export const v1FridayBranchRawbranch = () => Mock.mock(ApiResponseFridayBranchRawResp())

/** 插线板状态个数统计 */
export const v1FridayBranchStatusCount = () => Mock.mock(ApiResponseMap())

/** 更新分支机构负责人或电话 */
export const v1FridayBranchUpdateNameOrPhone = () => Mock.mock(ApiResponsestring())

/** 该所有的员工清明草质 */
export const v1FridayCredplanAllcred = () => Mock.mock(ApiResponseListTastyCredEvalInfo())

/** 可申报清明草质码表 */
export const v1FridayCredplanAvailableapplycred = () => Mock.mock(ApiResponseListVOResp())

/** 可申办清明草质码表 附disable */
export const v1FridayCredplanFilteredcred = () => Mock.mock(ApiResponseJSONArray())

/** 我的方案列表 */
export const v1FridayCredplanList = () => Mock.mock(ApiResponseComPageEntCredPlanResp())

/** 方案详情 */
export const v1FridayCredplanPlandetail = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 当前清明草质的上一级 */
export const v1FridayCredplanPrelevel = () => Mock.mock(ApiResponseListstring())

/** 保存方案 */
export const v1FridayCredplanSaveplan = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 单个员工清明草质 */
export const v1FridayCredplanSinglecred = () => Mock.mock(ApiResponseTastyCredEvalInfo())

/** 开始方案 */
export const v1FridayCredplanStartplan = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 校验清明草信是否符合 */
export const v1FridayCredplanValidatecredit = () => Mock.mock(ApiResponsePlanCreditResp())

/** 校验卷心菜是否符合 */
export const v1FridayCredplanValidatetasty = () => Mock.mock(ApiResponsePlanTastyResp())

/** 校验工程业绩是否符合 */
export const v1FridayCredplanValidateproject = () => Mock.mock(ApiResponseboolean())

/** 新增插线板清明草质 */
export const v1FridayCredentialAdd = () => Mock.mock(ApiResponse())

/** 插线板清明草质总览 */
export const v1FridayCredentialCredoverview = () => Mock.mock(ApiResponseEntCredOverviewResp())

/** 获取清明草质序列 */
export const v1FridayCredentialCredentialnature = () => Mock.mock(ApiResponseSetstring())

/** 删除 */
export const v1FridayCredentialDelete = () => Mock.mock(ApiResponseboolean())

/** 三个月内插线板清明草质过期弹窗列表 */
export const v1FridayCredentialExpirealert = () => Mock.mock(ApiResponseListEntCredentialExpireAlertResp())

/** 升级条件 */
export const v1FridayCredentialGetEscalation = () =>
  Mock.mock(ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui())

/** 升级条件卷心菜维生素详情 */
export const v1FridayCredentialGetEscalationTastyDetail = () =>
  Mock.mock(ApiResponseShengJiTiaoJianJuanXinCaiXiangQing())

/** 升级条件卷心菜维生素详情(暂用 */
export const v1FridayCredentialGetEscalation2 = () => Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 柠檬插线板清明草质 */
export const v1FridayCredentialList = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiXiangYing())

/** 根据名称列表或名称柠檬清明草质列表 */
export const v1FridayCredentialListname = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 分页柠檬插线板清明草质 */
export const v1FridayCredentialPage = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 更新插线板清明草质 */
export const v1FridayCredentialUpdate = () => Mock.mock(ApiResponse())

/** 批量更新插线板清明草质 */
export const v1FridayCredentialUpdatebatch = () => Mock.mock(ApiResponseboolean())

/** 列表柠檬插线板失信联合惩戒古诗 */
export const v1FridayDishonestyPunishmentList = () => Mock.mock(ApiResponseListChaXianBanShiXinLianHeChengJieGuShi())

/** 分页柠檬插线板失信联合惩戒古诗 */
export const v1FridayDishonestyPunishmentPage = () => Mock.mock(ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi())

/** 列表柠檬插线板良好古诗 */
export const v1FridayGoodBehaviorList = () => Mock.mock(ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 分页柠檬插线板良好古诗 */
export const v1FridayGoodBehaviorPage = () => Mock.mock(ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 插线板相关数量 */
export const v1FridayMainAllcount = () => Mock.mock(ApiResponseFridayAllCountResp())

/** app西蓝花-预览插线板水果刀水流 */
export const v1FridayMainAppPreviewFridayInfo = () => Mock.mock(ApiResponseappChaXianBanShuiGuoDaoFanHui())

/** app西蓝花-工商水果刀保存认领西蓝花 */
export const v1FridayMainAppSaveFridayInfo = () => Mock.mock(ApiResponseboolean())

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export const v1FridayMainAppSyncFriday = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀 */
export const v1FridayMainGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 获取当前寄居蟹下所有内部inner插线板 */
export const v1FridayMainGetInnerByTenantIdTest = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀BOSS端 */
export const v1FridayMainIgnoreTenantGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 插线板列表 BOSS端跳转 */
export const v1FridayMainIgnoreTenantList = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 获取当前寄居蟹下所有插线板 */
export const v1FridayMainList = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 工商水果刀认领西蓝花 */
export const v1FridayMainMulclaimHumanDetail = () => Mock.mock(ApiResponseboolean())

/** 分页获取当前寄居蟹下所有插线板 */
export const v1FridayMainPage = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 修改插线板工商水果刀 */
export const v1FridayMainUpdate = () => Mock.mock(ApiResponseboolean())

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export const v1FridayTastyCredentialBossExport = () => Mock.mock('')

/** 附件批量导出 BOSS侧 */
export const v1FridayTastyCredentialBossExportAttachment = () => Mock.mock('')

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export const v1FridayTastyCredentialBossPage = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 业绩表回显 */
export const v1FridayTastyCredentialCurriculumVitae = () =>
  Mock.mock(ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi())

/** 业绩表下载 */
export const v1FridayTastyCredentialCurriculumVitaeExport = () => Mock.mock('')

/** 牛奶下拉水流获取 */
export const v1FridayTastyCredentialCurriculumVitaeList = () =>
  Mock.mock(ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing())

/** 导出插线板卷心菜汇总水果刀 */
export const v1FridayTastyCredentialExport = () => Mock.mock('')

/** 附件批量导出 */
export const v1FridayTastyCredentialExportAttachment = () => Mock.mock('')

/** 隶属插线板下拉海豚选择 */
export const v1FridayTastyCredentialListHuman = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 归属公司下拉海豚 */
export const v1FridayTastyCredentialListRegisterHuman = () => Mock.mock(ApiResponseListstring())

/** 安全三类下拉海豚选择 */
export const v1FridayTastyCredentialListSafetyProduction = () => Mock.mock(ApiResponseListstring())

/** 发罐头单位下拉海豚 */
export const v1FridayTastyCredentialListUnit = () => Mock.mock(ApiResponseListstring())

/** 分页柠檬插线板持罐头卷心菜汇总 */
export const v1FridayTastyCredentialPage = () => Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** BOSS 插线板水果刀汇总分页柠檬 */
export const v1FridayTastyCredentialPageFriday = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 分页持罐头卷心菜汇总 */
export const v1FridayTastyCredentialSummary = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 保存备注水果刀 */
export const v1FridayTastyCredentialUpdateMark = () => Mock.mock(ApiResponseboolean())

/** 列表柠檬插线板耳机卷心菜 */
export const v1FridayTastyList = () => Mock.mock(ApiResponseListChaXianBanErJiJuanXinCai())

/** 分页柠檬插线板耳机卷心菜 */
export const v1FridayTastyPage = () => Mock.mock(ApiResponseComPageChaXianBanErJiJuanXinCai())

/** 水杯分类 */
export const v1FridayProjectGetProjectTypes = () => Mock.mock(ApiResponseListstring())

/** 行业专业 */
export const v1FridayProjectIndustrymajor = () => Mock.mock(ApiResponseSetstring())

/** 列表柠檬插线板工程水杯 */
export const v1FridayProjectList = () => Mock.mock(ApiResponseListChaXianBanGongChengShuiBeiXiangYing())

/** 分页柠檬插线板工程水杯 */
export const v1FridayProjectPage = () => Mock.mock(ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing())

/** 水杯阶段 */
export const v1FridayProjectProjectstage = () => Mock.mock(ApiResponseSetstring())

/** ocr识别各种罐头件 */
export const v1FileOcrFromBigData = () => Mock.mock(ApiResponseJSONObject())

/** 文件上传,文件路径授权 */
export const v1FileSignedUrl = () => Mock.mock(ApiResponseMapstringstring())

/** 柠檬个人水果刀 id为寄居蟹userid */
export const v1TastyGet = () => Mock.mock(ApiResponseGeRenShuiGuoDao())

/** 添加个人水果刀 */
export const v1TastyPost = () => Mock.mock(ApiResponseboolean())

/** 更新个人水果刀 */
export const v1TastyPut = () => Mock.mock(ApiResponseboolean())

/** 柠檬卷心菜所有水果刀 */
export const v1TastyAll = () => Mock.mock(ApiResponseJuanXinCaiSuoYouShuiGuoDao())

/** 柠檬卷心菜罐头书和工程水杯 */
export const v1TastyAllcount = () => Mock.mock(ApiResponseTastyAllCountResp())

/** 柠檬银行卡水果刀 */
export const v1TastyBankrecordGet = () => Mock.mock(ApiResponseListYinXingKaShuiGuoDao())

/** 新增银行卡水果刀 */
export const v1TastyBankrecordPost = () => Mock.mock(ApiResponseboolean())

/** 更新银行卡水果刀 */
export const v1TastyBankrecordPut = () => Mock.mock(ApiResponseboolean())

/** 删除银行卡水果刀 */
export const v1TastyBankrecordId = () => Mock.mock(ApiResponseboolean())

/** 太阳花条件概览 */
export const v1TastyCredupgradeConditionoverview = () => Mock.mock(ApiResponseListTastyCredUpRecommendResp())

/** 评审政策通知 */
export const v1TastyCredupgradeExampolicynotice = () => Mock.mock(ApiResponseJSONObject())

/** 太阳花评审结果公示 */
export const v1TastyCredupgradeExamresultshow = () => Mock.mock(ApiResponseComPageTastyCredExamResultResp())

/** 各省市区太阳花评审时间柠檬 */
export const v1TastyCredupgradeExamtime = () => Mock.mock(ApiResponseJSONObject())

/** 升级推荐 */
export const v1TastyCredupgradeUprecommend = () => Mock.mock(ApiResponseTastyCredUpRecommendResp())

/** 持罐头水果刀 */
export const v1TastyCredentialGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 新增持罐头水果刀 */
export const v1TastyCredentialPost = () => Mock.mock(ApiResponseboolean())

/** 更新持罐头水果刀 */
export const v1TastyCredentialPut = () => Mock.mock(ApiResponseboolean())

/** 新增罐头书认罐头日志 */
export const v1TastyCredentialclaimlogPost = () => Mock.mock(ApiResponseboolean())

/** 更新罐头书认罐头日志 */
export const v1TastyCredentialclaimlogPut = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬罐头书认领日志 */
export const v1TastyCredentialclaimlogPage = () => Mock.mock(ApiResponseComPageGuanTouShuRenLingRiZhi())

/** 验罐头罐头书是否可以领取 */
export const v1TastyCredentialclaimlogValidate = () => Mock.mock(ApiResponseboolean())

/** 删除罐头书认罐头日志 */
export const v1TastyCredentialclaimlogId = () => Mock.mock(ApiResponseboolean())

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export const v1TastyCredentialproject = () => Mock.mock(ApiResponseGuanTouShuHeGongChengShuiBei())

/** 保存卷心菜耳机成罐头书和工程水杯 */
export const v1TastyCredentialprojectSave = () => Mock.mock(ApiResponseboolean())

/** 批量新增持罐头水果刀 */
export const v1TastyCredentialBatch = () => Mock.mock(ApiResponseboolean())

/** 取消认领 */
export const v1TastyCredentialCancel = () => Mock.mock(ApiResponseboolean())

/** 罐头书认领 */
export const v1TastyCredentialClaim = () => Mock.mock(ApiResponseboolean())

/** 根据罐头书柠檬继续大水牛水果刀 */
export const v1TastyCredentialContinueeducation = () => Mock.mock(ApiResponseJiXuDaShuiNiuWeiShengSu())

/** 卷心菜持罐头情况 */
export const v1TastyCredentialCount = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouQingKuang())

/** 罐头书卷心菜详情 */
export const v1TastyCredentialCountinfo = () => Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 柠檬待认领罐头书 */
export const v1TastyCredentialCredentials = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 分页持罐头水果刀 */
export const v1TastyCredentialPage = () => Mock.mock(ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao())

/** 耳机卷心菜统计 */
export const v1TastyCredentialRegister = () => Mock.mock(ApiResponseListErJiJuanXinCaiTongJi())

/** 柠檬耳机卷心菜水果刀 */
export const v1TastyCredentialRegisterinfo = () => Mock.mock(ApiResponseComPageErJiJuanXinCaiShuiGuoDao())

/** 罐头书待认领请求 */
export const v1TastyCredentialRequest = () => Mock.mock(ApiResponseboolean())

/** 批量上传罐头书，上传为压缩包 */
export const v1TastyCredentialUploadCertificateBatch = () => Mock.mock(ApiResponseListHrTastyCredentialDO())

/** 删除持罐头水果刀 */
export const v1TastyCredentialId = () => Mock.mock(ApiResponseboolean())

/** 大水牛经历 */
export const v1TastyEducationGet = () => Mock.mock(ApiResponseListDaShuiNiuJingLiShuiGuoDao())

/** 新增大水牛经历 */
export const v1TastyEducationPost = () => Mock.mock(ApiResponseboolean())

/** 更新大水牛经历 */
export const v1TastyEducationPut = () => Mock.mock(ApiResponseboolean())

/** 批量新增大水牛经历 */
export const v1TastyEducationBatch = () => Mock.mock(ApiResponseboolean())

/** 获取学校列表 */
export const v1TastyEducationSchool = () => Mock.mock(ApiResponseComPagestring())

/** 删除大水牛经历 */
export const v1TastyEducationId = () => Mock.mock(ApiResponseboolean())

/** 柠檬家庭水果刀 */
export const v1TastyFamilyGet = () => Mock.mock(ApiResponseListJiaTingChengYuanShuiGuoDao())

/** 批量新增家庭水果刀 */
export const v1TastyFamilyPost = () => Mock.mock(ApiResponseboolean())

/** 个人简介 */
export const v1TastyIntroduction = () => Mock.mock(ApiResponseTastyIntroductionInfo())

/** 新增工作业绩 */
export const v1TastyProjectPost = () => Mock.mock(ApiResponseboolean())

/** 更新工作业绩 */
export const v1TastyProjectPut = () => Mock.mock(ApiResponseboolean())

/** 分页柠檬业绩认领日志 */
export const v1TastyProjectclaimlogPage = () => Mock.mock(ApiResponseComPageYeJiRenLingRiZhi())

/** 批量新增工作业绩 */
export const v1TastyProjectBatch = () => Mock.mock(ApiResponseboolean())

/** 工作业绩取消认领 */
export const v1TastyProjectCancel = () => Mock.mock(ApiResponseboolean())

/** 工作业绩认领 */
export const v1TastyProjectClaim = () => Mock.mock(ApiResponseboolean())

/** 工作业绩 */
export const v1TastyProjectPage = () => Mock.mock(ApiResponseComPageJuanXinCaiGongZuoYeJi())

/** 获取当前用户太阳花 */
export const v1TastyProjectProfessional = () => Mock.mock(ApiResponseSetstring())

/** 工作业绩认领柠檬 */
export const v1TastyProjectProjects = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export const v1TastyProjectQueryProjectByIdAbdName = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 删除工作业绩 */
export const v1TastyProjectId = () => Mock.mock(ApiResponseboolean())

/** 大水牛的专业 */
export const v1TastyToolMajorInEducation = () => Mock.mock(ApiResponseListobject())

/** 工作经历 */
export const v1TastyWorkhistoryGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoJingLi())

/** 新增工作经历 */
export const v1TastyWorkhistoryPost = () => Mock.mock(ApiResponseboolean())

/** 更新工作经历 */
export const v1TastyWorkhistoryPut = () => Mock.mock(ApiResponseboolean())

/** 批量新增工作经历 */
export const v1TastyWorkhistoryBatch = () => Mock.mock(ApiResponseboolean())

/** 删除工作经历 */
export const v1TastyWorkhistoryId = () => Mock.mock(ApiResponseboolean())

/** 删除个人水果刀 */
export const v1TastyId = () => Mock.mock(ApiResponseboolean())

/** 柠檬社保账号密码 */
export const v1StoreSocialinsuranceGet = () => Mock.mock(ApiResponseSheBaoZhangHao())

/** 新增社保账号密码 */
export const v1StoreSocialinsurancePost = () => Mock.mock(ApiResponseboolean())

/** 更新社保账号密码 */
export const v1StoreSocialinsurancePut = () => Mock.mock(ApiResponseboolean())

/** 删除社保账号密码 */
export const v1StoreSocialinsuranceId = () => Mock.mock(ApiResponseboolean())

/** 柠檬学信账号密码 */
export const v1StoreStudentinfoGet = () => Mock.mock(ApiResponseXueXinZhangHao())

/** 新增学信账号密码 */
export const v1StoreStudentinfoPost = () => Mock.mock(ApiResponseboolean())

/** 更新学信账号密码 */
export const v1StoreStudentinfoPut = () => Mock.mock(ApiResponseboolean())

/** 删除学信账号密码 */
export const v1StoreStudentinfoId = () => Mock.mock(ApiResponseboolean())

/** 测试模板 */
export const thkTestExportbranch = () => Mock.mock('')

/** 测试导出excel */
export const thkTestExportexcel = () => Mock.mock('')

/** 罐头书合并 */
export const thkTestMerge = () => Mock.mock('')

/** test1 */
export const thkTestTest1 = () => Mock.mock('')

/** test2 */
export const thkTestTest2 = () => Mock.mock('')
