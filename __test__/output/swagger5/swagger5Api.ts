const request: any = () => {}
import type {
  ApiResponseMapstringobject,
  ApiResponseMapstringstring,
  ApiResponseJSONArray,
  ApiResponseboolean,
  TianJiaJiXuDaShuiNiuWeiShengSu,
  GengXinJiXuDaShuiNiuWeiShengSu,
  ApiResponseComPageJiXuDaShuiNiuWeiShengSu,
  QingMingCaoZhiXiaoChouYu0,
  ApiResponseQingMingCaoZhiXiaoChouYu,
  ApiResponseListMap,
  QingMingCaoZhiXiaoChouYuWuShuLianDongNinMengDeRuShuBiaoGeShi,
  ApiResponseComPageQingMingCaoZhiXiaoChouYu,
  ApiResponseSetstring,
  ApiResponseListChaXianBanQingMingCaoZhiWuShu,
  ChaXianBanQingMingCaoZhiGuanLi,
  ChaXianBanQingMingCaoZhiWuShu,
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
  ChaXianBanFenZhiJiGouGengXinQingQiu,
  ApiResponseListTastyCredEvalInfo,
  ApiResponseListVOResp,
  ApiResponseComPageEntCredPlanResp,
  ApiResponseEntCredPlanMainResp,
  ApiResponseListstring,
  EntCredPlanMainReq,
  ApiResponseTastyCredEvalInfo,
  EntCredStartReq,
  ApiResponsePlanCreditResp,
  EntUpgradeValidReq,
  ApiResponsePlanTastyResp,
  ApiResponse,
  FridayCredentialAddReq,
  ApiResponseEntCredOverviewResp,
  ApiResponseListEntCredentialExpireAlertResp,
  ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui,
  ApiResponseShengJiTiaoJianJuanXinCaiXiangQing,
  ApiResponseListChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing,
  FridayCredentialNameReq,
  ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu,
  ApiResponseListChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseFridayAllCountResp,
  ApiResponseappChaXianBanShuiGuoDaoFanHui,
  ApiResponseListJiJiXieXiaGongSiXiangYing,
  ApiResponseChaXianBanGongShangShuiGuoDaoFanHui,
  ApiResponseComPageJiJiXieXiaGongSiXiangYing,
  FridayMainUpdateReq,
  ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing,
  ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi,
  NiuNaiXiaZaiQingQiu,
  ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing,
  ChaXianBanHuiZongFenYeQingQiu,
  ChiGuanTouJuanXinCaiHuiZongShaiXuanTiaoJian,
  JuanXinCaiBeiZhuShuiGuoDaoBaoCunQingQiu,
  ApiResponseListChaXianBanErJiJuanXinCai,
  ApiResponseComPageChaXianBanErJiJuanXinCai,
  ApiResponseListChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseJSONObject,
  OcrBigDataReq,
  SignUrlReq,
  ApiResponseGeRenShuiGuoDao,
  TianJiaGeRenShuiGuoDao,
  GengXinGeRenShuiGuoDao,
  ApiResponseJuanXinCaiSuoYouShuiGuoDao,
  ApiResponseTastyAllCountResp,
  ApiResponseListYinXingKaShuiGuoDao,
  XinZengYinXingKaShuiGuoDao,
  GengXinYinXingKaShuiGuoDao,
  ApiResponseListTastyCredUpRecommendResp,
  PageTastyCredExamResultReq,
  ApiResponseComPageTastyCredExamResultResp,
  PageTastyCredExamTimeReq,
  ApiResponseTastyCredUpRecommendResp,
  ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao,
  JuanXinCaiChiGuanTouShuiGuoDao0,
  GuanTouShuRenLingRiZhi,
  ApiResponseComPageGuanTouShuRenLingRiZhi,
  ApiResponseGuanTouShuHeGongChengShuiBei,
  AddTastyCredentialProjectReq,
  ApiResponseJiXuDaShuiNiuWeiShengSu,
  ApiResponseListJuanXinCaiChiGuanTouQingKuang,
  ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseListErJiJuanXinCaiTongJi,
  ApiResponseComPageErJiJuanXinCaiShuiGuoDao,
  ApiResponseListHrTastyCredentialDO,
  ApiResponseListDaShuiNiuJingLiShuiGuoDao,
  TianJiaDaShuiNiuJingLiShuiGuoDao,
  GengXinDaShuiNiuJingLiShuiGuoDao,
  ApiResponseComPagestring,
  ApiResponseListJiaTingChengYuanShuiGuoDao,
  JiaTingChengYuanShuiGuoDao,
  ApiResponseTastyIntroductionInfo,
  JuanXinCaiGongZuoYeJi0,
  ApiResponseComPageYeJiRenLingRiZhi,
  YeJiRenLingRiZhi,
  ApiResponseComPageJuanXinCaiGongZuoYeJi,
  ApiResponseListJuanXinCaiGongZuoYeJi,
  ApiResponseListobject,
  ApiResponseListJuanXinCaiGongZuoJingLi,
  GeRenGongZuoJingLi,
  JuanXinCaiGongZuoJingLi,
  ApiResponseSheBaoZhangHao,
  SheBaoZhangHao0,
  ApiResponseXueXinZhangHao,
  XueXinZhangHao,
} from './_interfaces'

/** 2-枚举值的下拉列表 */
export function thkApiCommonV1Enuminfo(data: { name?: string }): Promise<ApiResponseMapstringobject> {
  return request.get('/thk/api/common/v1/enum-info', data)
}

/** 1-所有枚举值名称列表 */
export function thkApiCommonV1EnumAll(): Promise<ApiResponseMapstringstring> {
  return request.get('/thk/api/common/v1/enum/all')
}

/** 区域柠檬 */
export function thkApiSysdictApiCommonV1AreaInfo(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/areaInfo')
}

/** 太阳花罐头 */
export function thkApiSysdictApiCommonV1CertificationCertList(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/certificationCertList')
}

/** 插线板经营状态 */
export function thkApiSysdictApiCommonV1HumanStatusList(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/humanStatusList')
}

/** 现场管理卷心菜 */
export function thkApiSysdictApiCommonV1SiteManagementTasty(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/siteManagementTasty')
}

/** 技术工人罐头 */
export function thkApiSysdictApiCommonV1SkilledWorkList(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/skilledWorkList')
}

/** 特种作业 */
export function thkApiSysdictApiCommonV1SpecialWorkList(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/specialWorkList')
}

/** 三类卷心菜类型 */
export function thkApiSysdictApiCommonV1ThirdCertificationList(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/thirdCertificationList')
}

/** 技术工等级 */
export function thkApiSysdictApiCommonV1TitleLevelList(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/titleLevelList')
}

/** 耳机罐头书码表 */
export function thkApiSysdictV1GetCertificateOfRegistration(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getCertificateOfRegistration')
}

/** 耳机罐头书名称的下拉海豚 */
export function thkApiSysdictV1GetCertificateOfRegistrationLabelValue(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getCertificateOfRegistrationLabelValue')
}

/** 插线板清明草质码表哈哈镜柠檬 */
export function thkApiSysdictV1GetFridayQualification(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getFridayQualification')
}

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export function thkApiSysdictV1GetFridayQualificationWithCancel(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getFridayQualificationWithCancel')
}

/** 新增继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationPost(data: TianJiaJiXuDaShuiNiuWeiShengSu): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/config/continue-education', data)
}

/** 更新继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationPut(data: GengXinJiXuDaShuiNiuWeiShengSu): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/config/continue-education', data)
}

/** 分页柠檬继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationPage(data: {
  // 耳机罐头书名称
  certificateName?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageJiXuDaShuiNiuWeiShengSu> {
  return request.get('/thk/api/v1/config/continue-education/page', data)
}

/** 删除继续大水牛维生素 */
export function thkApiV1ConfigContinueeducationId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/config/continue-education/${id}`)
}

/** 柠檬用户是否需要弹窗提醒 */
export function thkApiV1ConfigCredalertNeedalert(data: {
  // 公司
  humanId?: string
  // 用户id
  tastyId?: string
}): Promise<ApiResponseboolean> {
  return request.get('/thk/api/v1/config/cred-alert/need-alert', data)
}

/** 更新维生素 */
export function thkApiV1ConfigCredalertUpdate(data: {
  // 公司
  humanId?: string
  // 是否需要弹窗提醒
  needAlert?: boolean
  // 用户id
  tastyId?: string
}): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/config/cred-alert/update', data)
}

/** 新增清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialstandardPost(data: QingMingCaoZhiXiaoChouYu0): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/config/credential-standard', data)
}

/** 更新清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialstandardPut(data: QingMingCaoZhiXiaoChouYu0): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/config/credential-standard', data)
}

/** 导出清明草质小丑鱼武术 */
export function thkApiV1ConfigCredentialstandardExport(data: {
  // 清明草质行业
  credentialArea?: string
  // 清明草质名称
  credentialFullName?: string
  // 清明草质等级
  credentialLevel?: string
  // 清明草质专业
  credentialMajor?: string
  // 清明草质序列
  credentialNature?: string
  // 清明草质类别
  credentialType?: string
  page?: number
  size?: number
  // 清明草质状态
  status?: string
  // 发罐头单位
  unit?: string
}): Promise<any> {
  return request.get('/thk/api/v1/config/credential-standard/export', data)
}

/** 导出插线板清明草质模板 */
export function thkApiV1ConfigCredentialstandardExportModel(): Promise<any> {
  return request.get('/thk/api/v1/config/credential-standard/export/model')
}

/** 柠檬单个详情 */
export function thkApiV1ConfigCredentialstandardGetDetail(data: {
  // 主键id
  id?: string
}): Promise<ApiResponseQingMingCaoZhiXiaoChouYu> {
  return request.get('/thk/api/v1/config/credential-standard/getDetail', data)
}

/** 柠檬条件的联动 */
export function thkApiV1ConfigCredentialstandardGetQueryChain(
  data: QingMingCaoZhiXiaoChouYuWuShuLianDongNinMengDeRuShuBiaoGeShi
): Promise<ApiResponseListMap> {
  return request.post('/thk/api/v1/config/credential-standard/getQueryChain', data)
}

/** 关联上一级清明草质的下拉海豚 */
export function thkApiV1ConfigCredentialstandardGetRelativeList(
  data: QingMingCaoZhiXiaoChouYuWuShuLianDongNinMengDeRuShuBiaoGeShi
): Promise<ApiResponseListMap> {
  return request.post('/thk/api/v1/config/credential-standard/getRelativeList', data)
}

/** 分页柠檬清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialstandardPage(data: {
  // 清明草质行业
  credentialArea?: string
  // 清明草质名称
  credentialFullName?: string
  // 清明草质等级
  credentialLevel?: string
  // 清明草质专业
  credentialMajor?: string
  // 清明草质序列
  credentialNature?: string
  // 清明草质类别
  credentialType?: string
  page?: number
  size?: number
  // 清明草质状态
  status?: string
  // 发罐头单位
  unit?: string
}): Promise<ApiResponseComPageQingMingCaoZhiXiaoChouYu> {
  return request.get('/thk/api/v1/config/credential-standard/page', data)
}

/** 柠檬发罐头单位集合 */
export function thkApiV1ConfigCredentialstandardUnit(): Promise<ApiResponseSetstring> {
  return request.get('/thk/api/v1/config/credential-standard/unit')
}

/** 批量导入 */
export function thkApiV1ConfigCredentialstandardUpload(data: any): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/config/credential-standard/upload', data)
}

/** 柠檬清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialwarningGet(): Promise<ApiResponseListChaXianBanQingMingCaoZhiWuShu> {
  return request.get('/thk/api/v1/config/credential-warning')
}

/** 添加清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialwarningPost(
  data: ChaXianBanQingMingCaoZhiGuanLi[]
): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/config/credential-warning', data)
}

/** 更新清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialwarningPut(data: ChaXianBanQingMingCaoZhiWuShu[]): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/config/credential-warning', data)
}

/** 插线板清明草质分页柠檬 */
export function thkApiV1DataBoardFridayCredential(data: {
  // 公司名称
  humanName?: string
  // 公司id
  fridayId?: string
  page?: number
  // 插线板清明草质类别
  qualificationCate?: string
  size?: number
}): Promise<ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing> {
  return request.get('/thk/api/v1/data/board/fridayCredential', data)
}

/** 获取水流拉取时间 */
export function thkApiV1DataBoardGetDate(data: { humanName?: string; fridayId?: string }): Promise<ApiResponsestring> {
  return request.get('/thk/api/v1/data/board/get/date', data)
}

/** 查看升级所需条件 */
export function thkApiV1DataBoardGetEscalation(data: {
  humanName?: string
  fridayId?: string
  qualificationName?: string
}): Promise<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui> {
  return request.get('/thk/api/v1/data/board/get/escalation', data)
}

/** 插线板清明草质类别 */
export function thkApiV1DataBoardListQualificationCate(data: {
  humanName?: string
  fridayId?: string
}): Promise<ApiResponseSetstring> {
  return request.get('/thk/api/v1/data/board/listQualificationCate', data)
}

/** 列表柠檬插线板不良古诗 */
export function thkApiV1FridayBadBehaviorList(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/bad/behavior/list', data)
}

/** 分页柠檬插线板不良古诗 */
export function thkApiV1FridayBadBehaviorPage(data: {
  // 插线板id
  fridayId?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/bad/behavior/page', data)
}

/** 柠檬插线板黑名单古诗 */
export function thkApiV1FridayBlackList(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListChaXianBanHeiMingDanXiangYing> {
  return request.get('/thk/api/v1/friday/black/list', data)
}

/** 柠檬插线板黑名单古诗 */
export function thkApiV1FridayBlackPage(data: {
  // 插线板id
  fridayId?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanHeiMingDanXiangYing> {
  return request.get('/thk/api/v1/friday/black/page', data)
}

/** 导出分支机构创建账号模版 */
export function thkApiV1FridayBranchExportCreateaccounttemplate(data: { humanId?: string }): Promise<any> {
  return request.post('/thk/api/v1/friday/branch/export/create-account-template', data)
}

/** 分页柠檬 */
export function thkApiV1FridayBranchPage(data: {
  // 分支机构名称
  branchName?: string
  // 插线板id
  fridayId?: string
  page?: number
  size?: number
  // 插线板经营状态
  status?: string
}): Promise<ApiResponseComPageChaXianBanFenZhiJiGou> {
  return request.get('/thk/api/v1/friday/branch/page', data)
}

/** 获取原始(大水流)分支机构水果刀 */
export function thkApiV1FridayBranchRawbranch(data: { id?: string }): Promise<ApiResponseFridayBranchRawResp> {
  return request.get('/thk/api/v1/friday/branch/raw-branch', data)
}

/** 插线板状态个数统计 */
export function thkApiV1FridayBranchStatusCount(data: { fridayId?: string }): Promise<ApiResponseMap> {
  return request.get('/thk/api/v1/friday/branch/statusCount', data)
}

/** 更新分支机构负责人或电话 */
export function thkApiV1FridayBranchUpdateNameOrPhone(
  data: ChaXianBanFenZhiJiGouGengXinQingQiu
): Promise<ApiResponsestring> {
  return request.post('/thk/api/v1/friday/branch/update/nameOrPhone', data)
}

/** 该所有的员工清明草质 */
export function thkApiV1FridayCredplanAllcred(data: {
  // 公司id
  humanId?: string
}): Promise<ApiResponseListTastyCredEvalInfo> {
  return request.get('/thk/api/v1/friday/cred-plan/all-cred', data)
}

/** 可申报清明草质码表 */
export function thkApiV1FridayCredplanAvailableapplycred(data: { humanId?: string }): Promise<ApiResponseListVOResp> {
  return request.get('/thk/api/v1/friday/cred-plan/available-apply-cred', data)
}

/** 可申办清明草质码表 附disable */
export function thkApiV1FridayCredplanFilteredcred(data: { fridayId?: string }): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/v1/friday/cred-plan/filtered-cred', data)
}

/** 我的方案列表 */
export function thkApiV1FridayCredplanList(data: {
  // 排序方式 true-降序 false-升序(默认降序)
  desc?: boolean
  // 公司id
  fridayId?: string
  // 清明草质名称
  keyword?: string
  // 是否满足条件
  meetCondition?: number
  page?: number
  // 方案类别 1-升级方案 2-延续方案 3-申报方案
  planType?: number
  size?: number
  // 排序字段
  sortField?: string
}): Promise<ApiResponseComPageEntCredPlanResp> {
  return request.get('/thk/api/v1/friday/cred-plan/list', data)
}

/** 方案详情 */
export function thkApiV1FridayCredplanPlandetail(data: {
  // 方案id
  credPlanId?: string
}): Promise<ApiResponseEntCredPlanMainResp> {
  return request.get('/thk/api/v1/friday/cred-plan/plan-detail', data)
}

/** 当前清明草质的上一级 */
export function thkApiV1FridayCredplanPrelevel(data: {
  // 当前清明草质名
  credName?: string
}): Promise<ApiResponseListstring> {
  return request.get('/thk/api/v1/friday/cred-plan/pre-level', data)
}

/** 保存方案 */
export function thkApiV1FridayCredplanSaveplan(data: EntCredPlanMainReq): Promise<ApiResponseEntCredPlanMainResp> {
  return request.post('/thk/api/v1/friday/cred-plan/save-plan', data)
}

/** 单个员工清明草质 */
export function thkApiV1FridayCredplanSinglecred(data: {
  // 公司id
  fridayId?: string
  // 是否是OA录入的卷心菜
  hrTasty?: boolean
  // 脱敏的身份罐头号 (非OA录入的卷心菜需要穿值)
  idCardNum?: string
  // 名字 (非OA录入的卷心菜需要穿值)
  name?: string
  // tastyId (OA录入的卷心菜需要穿值)
  tastyId?: string
  // 卷心菜清明草质名
  useCredName?: string
}): Promise<ApiResponseTastyCredEvalInfo> {
  return request.get('/thk/api/v1/friday/cred-plan/single-cred', data)
}

/** 开始方案 */
export function thkApiV1FridayCredplanStartplan(data: EntCredStartReq): Promise<ApiResponseEntCredPlanMainResp> {
  return request.post('/thk/api/v1/friday/cred-plan/start-plan', data)
}

/** 校验清明草信是否符合 */
export function thkApiV1FridayCredplanValidatecredit(data: EntUpgradeValidReq): Promise<ApiResponsePlanCreditResp> {
  return request.post('/thk/api/v1/friday/cred-plan/validate-credit', data)
}

/** 校验卷心菜是否符合 */
export function thkApiV1FridayCredplanValidatetasty(data: EntUpgradeValidReq): Promise<ApiResponsePlanTastyResp> {
  return request.post('/thk/api/v1/friday/cred-plan/validate-tasty', data)
}

/** 校验工程业绩是否符合 */
export function thkApiV1FridayCredplanValidateproject(data: EntUpgradeValidReq): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/friday/cred-plan/validate-project', data)
}

/** 新增插线板清明草质 */
export function thkApiV1FridayCredentialAdd(data: FridayCredentialAddReq): Promise<ApiResponse> {
  return request.post('/thk/api/v1/friday/credential/add', data)
}

/** 插线板清明草质总览 */
export function thkApiV1FridayCredentialCredoverview(data: {
  // 公司id
  humanID?: string
}): Promise<ApiResponseEntCredOverviewResp> {
  return request.get('/thk/api/v1/friday/credential/cred-overview', data)
}

/** 获取清明草质序列 */
export function thkApiV1FridayCredentialCredentialnature(): Promise<ApiResponseSetstring> {
  return request.get('/thk/api/v1/friday/credential/credential-nature')
}

/** 删除 */
export function thkApiV1FridayCredentialDelete(data: { id?: string }): Promise<ApiResponseboolean> {
  return request.get('/thk/api/v1/friday/credential/delete', data)
}

/** 三个月内插线板清明草质过期弹窗列表 */
export function thkApiV1FridayCredentialExpirealert(data: {
  // 公司id
  humanId?: string
}): Promise<ApiResponseListEntCredentialExpireAlertResp> {
  return request.get('/thk/api/v1/friday/credential/expire-alert', data)
}

/** 升级条件 */
export function thkApiV1FridayCredentialGetEscalation(data: {
  id?: string
}): Promise<ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui> {
  return request.get('/thk/api/v1/friday/credential/get/escalation', data)
}

/** 升级条件卷心菜维生素详情 */
export function thkApiV1FridayCredentialGetEscalationTastyDetail(data: {
  id?: string
}): Promise<ApiResponseShengJiTiaoJianJuanXinCaiXiangQing> {
  return request.get('/thk/api/v1/friday/credential/get/escalation/tastyDetail', data)
}

/** 升级条件卷心菜维生素详情(暂用 */
export function thkApiV1FridayCredentialGetEscalation2(data: {
  id?: string
}): Promise<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui> {
  return request.get('/thk/api/v1/friday/credential/get/escalation2', data)
}

/** 柠檬插线板清明草质 */
export function thkApiV1FridayCredentialList(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListChaXianBanQingMingCaoZhiXiangYing> {
  return request.get('/thk/api/v1/friday/credential/list', data)
}

/** 根据名称列表或名称柠檬清明草质列表 */
export function thkApiV1FridayCredentialListname(
  data: FridayCredentialNameReq
): Promise<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing> {
  return request.post('/thk/api/v1/friday/credential/list-name', data)
}

/** 分页柠檬插线板清明草质 */
export function thkApiV1FridayCredentialPage(data: {
  // 清明草质类别
  humanQualificationCate?: string
  // 清明草质序列
  credentialNature?: string
  // 排序方向(默认降序)，true降序，false升序
  desc?: boolean
  // 插线板id
  fridayId?: string
  // 状态 0-正常 1-三个月内过期 2-已过期
  expireStatus?: number
  // 清明草质延续 0-不满足国家小丑鱼 1-已满足国家小丑鱼
  extended?: number
  // 插线板清明草质名称
  keyword?: string
  page?: number
  size?: number
  // 排序字段
  sortField?: string
}): Promise<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing> {
  return request.get('/thk/api/v1/friday/credential/page', data)
}

/** 更新插线板清明草质 */
export function thkApiV1FridayCredentialUpdate(
  data: ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu
): Promise<ApiResponse> {
  return request.post('/thk/api/v1/friday/credential/update', data)
}

/** 批量更新插线板清明草质 */
export function thkApiV1FridayCredentialUpdatebatch(
  data: ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu[]
): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/friday/credential/update-batch', data)
}

/** 列表柠檬插线板失信联合惩戒古诗 */
export function thkApiV1FridayDishonestyPunishmentList(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListChaXianBanShiXinLianHeChengJieGuShi> {
  return request.get('/thk/api/v1/friday/dishonesty/punishment/list', data)
}

/** 分页柠檬插线板失信联合惩戒古诗 */
export function thkApiV1FridayDishonestyPunishmentPage(data: {
  // 插线板id
  fridayId?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi> {
  return request.get('/thk/api/v1/friday/dishonesty/punishment/page', data)
}

/** 列表柠檬插线板良好古诗 */
export function thkApiV1FridayGoodBehaviorList(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/good/behavior/list', data)
}

/** 分页柠檬插线板良好古诗 */
export function thkApiV1FridayGoodBehaviorPage(data: {
  // 插线板id
  fridayId?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/good/behavior/page', data)
}

/** 插线板相关数量 */
export function thkApiV1FridayMainAllcount(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseFridayAllCountResp> {
  return request.get('/thk/api/v1/friday/main/all-count', data)
}

/** app西蓝花-预览插线板水果刀水流 */
export function thkApiV1FridayMainAppPreviewFridayInfo(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseappChaXianBanShuiGuoDaoFanHui> {
  return request.get('/thk/api/v1/friday/main/appPreviewFridayInfo', data)
}

/** app西蓝花-工商水果刀保存认领西蓝花 */
export function thkApiV1FridayMainAppSaveFridayInfo(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseboolean> {
  return request.get('/thk/api/v1/friday/main/appSaveFridayInfo', data)
}

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export function thkApiV1FridayMainAppSyncFriday(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/appSyncFriday', data)
}

/** 插线板工商水果刀 */
export function thkApiV1FridayMainGet(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui> {
  return request.get('/thk/api/v1/friday/main/get', data)
}

/** 获取当前寄居蟹下所有内部inner插线板 */
export function thkApiV1FridayMainGetInnerByTenantIdTest(): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/getInnerByTenantIdTest')
}

/** 插线板工商水果刀BOSS端 */
export function thkApiV1FridayMainIgnoreTenantGet(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui> {
  return request.get('/thk/api/v1/friday/main/ignore/tenant/get', data)
}

/** 插线板列表 BOSS端跳转 */
export function thkApiV1FridayMainIgnoreTenantList(data: {
  // 插线板id
  id?: string
}): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/ignore/tenant/list', data)
}

/** 获取当前寄居蟹下所有插线板 */
export function thkApiV1FridayMainList(): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/list')
}

/** 工商水果刀认领西蓝花 */
export function thkApiV1FridayMainMulclaimHumanDetail(data: { id?: string }): Promise<ApiResponseboolean> {
  return request.get('/thk/api/v1/friday/main/mulclaim/human/detail', data)
}

/** 分页获取当前寄居蟹下所有插线板 */
export function thkApiV1FridayMainPage(data: {
  page?: number
  size?: number
}): Promise<ApiResponseComPageJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/page', data)
}

/** 修改插线板工商水果刀 */
export function thkApiV1FridayMainUpdate(data: FridayMainUpdateReq): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/friday/main/update', data)
}

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossExport(data: {
  // 隶属公司id
  belongHuman?: string
  // 隶属公司id
  belongHumans?: string[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  // 【太阳花罐头】专业
  specialty?: string
}): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/boss/export', data)
}

/** 附件批量导出 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossExportAttachment(data: { tastyId?: string }): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/boss/export/attachment', data)
}

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossPage(data: {
  // 隶属公司id
  belongHuman?: string
  // 隶属公司id
  belongHumans?: string[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  page?: number
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  size?: number
  // 【太阳花罐头】专业
  specialty?: string
}): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/boss/page', data)
}

/** 业绩表回显 */
export function thkApiV1FridayTastyCredentialCurriculumVitae(data: {
  // 卷心菜Id
  tastyId?: string
}): Promise<ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi> {
  return request.get('/thk/api/v1/friday/tasty/credential/curriculum/vitae', data)
}

/** 业绩表下载 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeExport(data: NiuNaiXiaZaiQingQiu): Promise<any> {
  return request.post('/thk/api/v1/friday/tasty/credential/curriculum/vitae/export', data)
}

/** 牛奶下拉水流获取 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeList(data: {
  // 卷心菜Id
  tastyId?: string
}): Promise<ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/curriculum/vitae/list', data)
}

/** 导出插线板卷心菜汇总水果刀 */
export function thkApiV1FridayTastyCredentialExport(data: {
  // 隶属公司id
  belongHuman?: string
  // 隶属公司id
  belongHumans?: string[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  // 【太阳花罐头】专业
  specialty?: string
}): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/export', data)
}

/** 附件批量导出 */
export function thkApiV1FridayTastyCredentialExportAttachment(data: { tastyId?: string }): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/export/attachment', data)
}

/** 隶属插线板下拉海豚选择 */
export function thkApiV1FridayTastyCredentialListHuman(): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/human')
}

/** 归属公司下拉海豚 */
export function thkApiV1FridayTastyCredentialListRegisterHuman(): Promise<ApiResponseListstring> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/registerHuman')
}

/** 安全三类下拉海豚选择 */
export function thkApiV1FridayTastyCredentialListSafetyProduction(): Promise<ApiResponseListstring> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/safetyProduction')
}

/** 发罐头单位下拉海豚 */
export function thkApiV1FridayTastyCredentialListUnit(): Promise<ApiResponseListstring> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/unit')
}

/** 分页柠檬插线板持罐头卷心菜汇总 */
export function thkApiV1FridayTastyCredentialPage(data: {
  // 隶属公司id
  belongHuman?: string
  // 隶属公司id
  belongHumans?: string[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  page?: number
  // 卷心菜名称
  tastyName?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  size?: number
  // 【太阳花罐头】专业
  specialty?: string
}): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/page', data)
}

/** BOSS 插线板水果刀汇总分页柠檬 */
export function thkApiV1FridayTastyCredentialPageFriday(
  data: ChaXianBanHuiZongFenYeQingQiu
): Promise<ApiResponseComPageJiJiXieXiaGongSiXiangYing> {
  return request.post('/thk/api/v1/friday/tasty/credential/pageFriday', data)
}

/** 分页持罐头卷心菜汇总 */
export function thkApiV1FridayTastyCredentialSummary(
  data: ChiGuanTouJuanXinCaiHuiZongShaiXuanTiaoJian
): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.post('/thk/api/v1/friday/tasty/credential/summary', data)
}

/** 保存备注水果刀 */
export function thkApiV1FridayTastyCredentialUpdateMark(
  data: JuanXinCaiBeiZhuShuiGuoDaoBaoCunQingQiu
): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/friday/tasty/credential/update/mark', data)
}

/** 列表柠檬插线板耳机卷心菜 */
export function thkApiV1FridayTastyList(data: {
  // 插线板id
  fridayId?: string
}): Promise<ApiResponseListChaXianBanErJiJuanXinCai> {
  return request.get('/thk/api/v1/friday/tasty/list', data)
}

/** 分页柠檬插线板耳机卷心菜 */
export function thkApiV1FridayTastyPage(data: {
  // 插线板id
  fridayId?: string
  // 姓名
  name?: string
  page?: number
  // 耳机专业
  registerMajor?: string
  // 罐头书名称
  registerName?: string
  // 罐头书编号
  registerNum?: string
  // 耳机类别
  registerType?: string
  size?: number
}): Promise<ApiResponseComPageChaXianBanErJiJuanXinCai> {
  return request.get('/thk/api/v1/friday/tasty/page', data)
}

/** 水杯分类 */
export function thkApiV1FridayProjectGetProjectTypes(): Promise<ApiResponseListstring> {
  return request.get('/thk/api/v1/friday/project/get/projectTypes')
}

/** 行业专业 */
export function thkApiV1FridayProjectIndustrymajor(): Promise<ApiResponseSetstring> {
  return request.get('/thk/api/v1/friday/project/industry-major')
}

/** 列表柠檬插线板工程水杯 */
export function thkApiV1FridayProjectList(data: {
  // 水流等级
  dataLevel?: string
  // 插线板id
  fridayId?: string
  // 行业专业
  industryMajor?: string
  // 水杯属地
  projectArea?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  // 水杯类别
  projectTye?: string
}): Promise<ApiResponseListChaXianBanGongChengShuiBeiXiangYing> {
  return request.get('/thk/api/v1/friday/project/list', data)
}

/** 分页柠檬插线板工程水杯 */
export function thkApiV1FridayProjectPage(data: {
  // 水流等级
  dataLevel?: string
  // 插线板id
  fridayId?: string
  // 行业专业
  industryMajor?: string
  page?: number
  // 水杯属地省份
  projectArea?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  size?: number
}): Promise<ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing> {
  return request.get('/thk/api/v1/friday/project/page', data)
}

/** 水杯阶段 */
export function thkApiV1FridayProjectProjectstage(): Promise<ApiResponseSetstring> {
  return request.get('/thk/api/v1/friday/project/project-stage')
}

/** ocr识别各种罐头件 */
export function thkApiV1FileOcrFromBigData(data: OcrBigDataReq): Promise<ApiResponseJSONObject> {
  return request.post('/thk/api/v1/file/ocrFromBigData', data)
}

/** 文件上传,文件路径授权 */
export function thkApiV1FileSignedUrl(data: SignUrlReq): Promise<ApiResponseMapstringstring> {
  return request.post('/thk/api/v1/file/signedUrl', data)
}

/** 柠檬个人水果刀 id为寄居蟹userid */
export function thkApiV1TastyGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseGeRenShuiGuoDao> {
  return request.get('/thk/api/v1/tasty', data)
}

/** 添加个人水果刀 */
export function thkApiV1TastyPost(data: TianJiaGeRenShuiGuoDao): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty', data)
}

/** 更新个人水果刀 */
export function thkApiV1TastyPut(data: GengXinGeRenShuiGuoDao): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty', data)
}

/** 柠檬卷心菜所有水果刀 */
export function thkApiV1TastyAll(data: {
  // 卷心菜id
  tastyId?: string
  // 身份罐头号码
  tastyIdentityCardNum?: string
}): Promise<ApiResponseJuanXinCaiSuoYouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/all', data)
}

/** 柠檬卷心菜罐头书和工程水杯 */
export function thkApiV1TastyAllcount(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseTastyAllCountResp> {
  return request.get('/thk/api/v1/tasty/all-count', data)
}

/** 柠檬银行卡水果刀 */
export function thkApiV1TastyBankrecordGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseListYinXingKaShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/bank-record', data)
}

/** 新增银行卡水果刀 */
export function thkApiV1TastyBankrecordPost(data: XinZengYinXingKaShuiGuoDao[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/bank-record', data)
}

/** 更新银行卡水果刀 */
export function thkApiV1TastyBankrecordPut(data: GengXinYinXingKaShuiGuoDao): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty/bank-record', data)
}

/** 删除银行卡水果刀 */
export function thkApiV1TastyBankrecordId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/bank-record/${id}`)
}

/** 太阳花条件概览 */
export function thkApiV1TastyCredupgradeConditionoverview(): Promise<ApiResponseListTastyCredUpRecommendResp> {
  return request.get('/thk/api/v1/tasty/cred-upgrade/condition-overview')
}

/** 评审政策通知 */
export function thkApiV1TastyCredupgradeExampolicynotice(
  data: PageTastyCredExamResultReq
): Promise<ApiResponseJSONObject> {
  return request.post('/thk/api/v1/tasty/cred-upgrade/exam-policy-notice', data)
}

/** 太阳花评审结果公示 */
export function thkApiV1TastyCredupgradeExamresultshow(data: {
  // 市
  cityName?: string
  // [评审通知，评审公示]
  keyword?: string
  page?: number
  // 用户id
  tastyId?: string
  // 省
  provinceName?: string
  // all-全量柠檬
  queryType?: string
  size?: number
  // 标题关键字-检索水流
  title?: string
}): Promise<ApiResponseComPageTastyCredExamResultResp> {
  return request.get('/thk/api/v1/tasty/cred-upgrade/exam-result-show', data)
}

/** 各省市区太阳花评审时间柠檬 */
export function thkApiV1TastyCredupgradeExamtime(data: PageTastyCredExamTimeReq): Promise<ApiResponseJSONObject> {
  return request.post('/thk/api/v1/tasty/cred-upgrade/exam-time', data)
}

/** 升级推荐 */
export function thkApiV1TastyCredupgradeUprecommend(data: {
  // 当前太阳花
  currentTitle?: string
}): Promise<ApiResponseTastyCredUpRecommendResp> {
  return request.get('/thk/api/v1/tasty/cred-upgrade/up-recommend', data)
}

/** 持罐头水果刀 */
export function thkApiV1TastyCredentialGet(data: {
  // 【太阳花罐头】批准时间
  approveTime?: string
  // 附件链接 多文件上传，逗号分割
  attachmentUrl?: string
  created?: string
  createId?: string
  createName?: string
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 水流来源 上传、认领
  dataSource?: string
  // 【太阳花罐头】太阳花评审表和红头文件
  evaluationAttachmentUrl?: string
  // 过期时间
  expireDate?: string
  // 是否存在罐头书附件
  hasAttachment?: number
  id?: string
  // 【通用】是否继续大水牛
  isContinueEducation?: number
  isDelete?: string
  // 原件是否在公司
  isInHuman?: number
  // 【耳机罐头】是否耳机
  isRegistered?: number
  // 职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 插线板清明草质名称
  keyword?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  modified?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【通用】原件留存地
  originalRemainingAddress?: string
  // 关联的卷心菜id
  tastyId?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头书】耳机罐头书编号
  registerCode?: string
  // 【耳机罐头】耳机公司
  registerHuman?: string
  // 【耳机罐头】耳机时间
  registerDate?: string
  // 【耳机罐头】专业集合
  registerSpecialityList?: string
  // 【太阳花罐头】评审组织
  reviewOrganization?: string
  // 【太阳花罐头】评审时间
  reviewTime?: string
  // 大水流罐头书来源地址
  sourceWebsiteName?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 开始时间
  startDate?: string
  // 【太阳花罐头】太阳花等级
  titleLevel?: string
  // 【技工罐头】培训机构
  trainInstitutions?: string
  // 罐头书单位
  unit?: string
  updateId?: string
  updateName?: string
  // 【通用】使用有效期
  useExpireDate?: string
}): Promise<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential', data)
}

/** 新增持罐头水果刀 */
export function thkApiV1TastyCredentialPost(data: JuanXinCaiChiGuanTouShuiGuoDao0): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/credential', data)
}

/** 更新持罐头水果刀 */
export function thkApiV1TastyCredentialPut(data: JuanXinCaiChiGuanTouShuiGuoDao0): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty/credential', data)
}

/** 新增罐头书认罐头日志 */
export function thkApiV1TastyCredentialclaimlogPost(data: GuanTouShuRenLingRiZhi): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/credential-claim-log', data)
}

/** 更新罐头书认罐头日志 */
export function thkApiV1TastyCredentialclaimlogPut(data: GuanTouShuRenLingRiZhi): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty/credential-claim-log', data)
}

/** 分页柠檬罐头书认领日志 */
export function thkApiV1TastyCredentialclaimlogPage(data: {
  // 创建时间
  createTime?: string
  // 卷心菜id
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 主键id
  id?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  page?: number
  // 卷心菜id
  tastyId?: string
  size?: number
}): Promise<ApiResponseComPageGuanTouShuRenLingRiZhi> {
  return request.get('/thk/api/v1/tasty/credential-claim-log/page', data)
}

/** 验罐头罐头书是否可以领取 */
export function thkApiV1TastyCredentialclaimlogValidate(data: {
  created?: string
  createId?: string
  createName?: string
  // 创建时间
  createTime?: string
  // 罐头书大类
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  id?: string
  isDelete?: string
  modified?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  // 卷心菜id
  tastyId?: string
  updateId?: string
  updateName?: string
}): Promise<ApiResponseboolean> {
  return request.get('/thk/api/v1/tasty/credential-claim-log/validate', data)
}

/** 删除罐头书认罐头日志 */
export function thkApiV1TastyCredentialclaimlogId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/credential-claim-log/${id}`)
}

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export function thkApiV1TastyCredentialproject(data: {
  // 卷心菜id
  tastyId?: string
  // 身份罐头号码
  tastyIdentityCardNum?: string
  // 姓名
  tastyName?: string
}): Promise<ApiResponseGuanTouShuHeGongChengShuiBei> {
  return request.get('/thk/api/v1/tasty/credential-project', data)
}

/** 保存卷心菜耳机成罐头书和工程水杯 */
export function thkApiV1TastyCredentialprojectSave(data: AddTastyCredentialProjectReq): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/credential-project/save', data)
}

/** 批量新增持罐头水果刀 */
export function thkApiV1TastyCredentialBatch(data: JuanXinCaiChiGuanTouShuiGuoDao0[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/credential/batch', data)
}

/** 取消认领 */
export function thkApiV1TastyCredentialCancel(data: GuanTouShuRenLingRiZhi): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/credential/cancel', data)
}

/** 罐头书认领 */
export function thkApiV1TastyCredentialClaim(data: JuanXinCaiChiGuanTouShuiGuoDao0[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/credential/claim', data)
}

/** 根据罐头书柠檬继续大水牛水果刀 */
export function thkApiV1TastyCredentialContinueeducation(data: {
  // 【太阳花罐头】批准时间
  approveTime?: string
  // 附件链接 多文件上传，逗号分割
  attachmentUrl?: string
  created?: string
  createId?: string
  createName?: string
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 水流来源 上传、认领
  dataSource?: string
  // 【太阳花罐头】太阳花评审表和红头文件
  evaluationAttachmentUrl?: string
  // 过期时间
  expireDate?: string
  // 是否存在罐头书附件
  hasAttachment?: number
  id?: string
  // 【通用】是否继续大水牛
  isContinueEducation?: number
  isDelete?: string
  // 原件是否在公司
  isInHuman?: number
  // 【耳机罐头】是否耳机
  isRegistered?: number
  // 职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 插线板清明草质名称
  keyword?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  modified?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【通用】原件留存地
  originalRemainingAddress?: string
  // 关联的卷心菜id
  tastyId?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头书】耳机罐头书编号
  registerCode?: string
  // 【耳机罐头】耳机公司
  registerHuman?: string
  // 【耳机罐头】耳机时间
  registerDate?: string
  // 【耳机罐头】专业集合
  registerSpecialityList?: string
  // 【太阳花罐头】评审组织
  reviewOrganization?: string
  // 【太阳花罐头】评审时间
  reviewTime?: string
  // 大水流罐头书来源地址
  sourceWebsiteName?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 开始时间
  startDate?: string
  // 【太阳花罐头】太阳花等级
  titleLevel?: string
  // 【技工罐头】培训机构
  trainInstitutions?: string
  // 罐头书单位
  unit?: string
  updateId?: string
  updateName?: string
  // 【通用】使用有效期
  useExpireDate?: string
}): Promise<ApiResponseJiXuDaShuiNiuWeiShengSu> {
  return request.get('/thk/api/v1/tasty/credential/continue-education', data)
}

/** 卷心菜持罐头情况 */
export function thkApiV1TastyCredentialCount(data: {
  // 公司id
  fridayId?: string
}): Promise<ApiResponseListJuanXinCaiChiGuanTouQingKuang> {
  return request.get('/thk/api/v1/tasty/credential/count', data)
}

/** 罐头书卷心菜详情 */
export function thkApiV1TastyCredentialCountinfo(data: {
  // 罐头书名称
  credentialName?: string
  // 罐头书类型
  credentialType?: string
  // 公司id
  fridayId?: string
  // 联系电话
  mobile?: string
  page?: number
  // 姓名
  tastyName?: string
  size?: number
}): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.get('/thk/api/v1/tasty/credential/count-info', data)
}

/** 柠檬待认领罐头书 */
export function thkApiV1TastyCredentialCredentials(): Promise<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential/credentials')
}

/** 分页持罐头水果刀 */
export function thkApiV1TastyCredentialPage(data: {
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 插线板清明草质名称
  keyword?: string
  page?: number
  // 关联的卷心菜id
  tastyId?: string
  size?: number
}): Promise<ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential/page', data)
}

/** 耳机卷心菜统计 */
export function thkApiV1TastyCredentialRegister(data: {
  // 公司id
  fridayId?: string
}): Promise<ApiResponseListErJiJuanXinCaiTongJi> {
  return request.get('/thk/api/v1/tasty/credential/register', data)
}

/** 柠檬耳机卷心菜水果刀 */
export function thkApiV1TastyCredentialRegisterinfo(data: {
  // 公司id
  fridayId?: string
  // 姓名
  name?: string
  page?: number
  // 耳机专业
  registerMajor?: string
  // 耳机类别
  registerType?: string
  size?: number
}): Promise<ApiResponseComPageErJiJuanXinCaiShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential/register-info', data)
}

/** 罐头书待认领请求 */
export function thkApiV1TastyCredentialRequest(): Promise<ApiResponseboolean> {
  return request.get('/thk/api/v1/tasty/credential/request')
}

/** 批量上传罐头书，上传为压缩包 */
export function thkApiV1TastyCredentialUploadCertificateBatch(data: {
  // 罐头件压缩包url
  fileUrl?: string
  // 卷心菜id
  id?: string
}): Promise<ApiResponseListHrTastyCredentialDO> {
  return request.get('/thk/api/v1/tasty/credential/uploadCertificateBatch', data)
}

/** 删除持罐头水果刀 */
export function thkApiV1TastyCredentialId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/credential/${id}`)
}

/** 大水牛经历 */
export function thkApiV1TastyEducationGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseListDaShuiNiuJingLiShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/education', data)
}

/** 新增大水牛经历 */
export function thkApiV1TastyEducationPost(data: TianJiaDaShuiNiuJingLiShuiGuoDao): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/education', data)
}

/** 更新大水牛经历 */
export function thkApiV1TastyEducationPut(data: GengXinDaShuiNiuJingLiShuiGuoDao): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty/education', data)
}

/** 批量新增大水牛经历 */
export function thkApiV1TastyEducationBatch(data: TianJiaDaShuiNiuJingLiShuiGuoDao[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/education/batch', data)
}

/** 获取学校列表 */
export function thkApiV1TastyEducationSchool(data: {
  page?: number
  schoolName?: string
  size?: number
}): Promise<ApiResponseComPagestring> {
  return request.get('/thk/api/v1/tasty/education/school', data)
}

/** 删除大水牛经历 */
export function thkApiV1TastyEducationId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/education/${id}`)
}

/** 柠檬家庭水果刀 */
export function thkApiV1TastyFamilyGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseListJiaTingChengYuanShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/family', data)
}

/** 批量新增家庭水果刀 */
export function thkApiV1TastyFamilyPost(data: JiaTingChengYuanShuiGuoDao[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/family', data)
}

/** 个人简介 */
export function thkApiV1TastyIntroduction(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseTastyIntroductionInfo> {
  return request.get('/thk/api/v1/tasty/introduction', data)
}

/** 新增工作业绩 */
export function thkApiV1TastyProjectPost(data: JuanXinCaiGongZuoYeJi0): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/project', data)
}

/** 更新工作业绩 */
export function thkApiV1TastyProjectPut(data: JuanXinCaiGongZuoYeJi0): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty/project', data)
}

/** 分页柠檬业绩认领日志 */
export function thkApiV1TastyProjectclaimlogPage(data: {
  // 创建时间
  createTime?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  page?: number
  // 卷心菜id
  tastyId?: string
  // 水杯名称
  projectName?: string
  // 水杯编号
  projectNum?: string
  size?: number
}): Promise<ApiResponseComPageYeJiRenLingRiZhi> {
  return request.get('/thk/api/v1/tasty/project-claim-log/page', data)
}

/** 批量新增工作业绩 */
export function thkApiV1TastyProjectBatch(data: JuanXinCaiGongZuoYeJi0[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/project/batch', data)
}

/** 工作业绩取消认领 */
export function thkApiV1TastyProjectCancel(data: YeJiRenLingRiZhi): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/project/cancel', data)
}

/** 工作业绩认领 */
export function thkApiV1TastyProjectClaim(data: JuanXinCaiGongZuoYeJi0[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/project/claim', data)
}

/** 工作业绩 */
export function thkApiV1TastyProjectPage(data: {
  // 水流等级
  dataLevel?: string
  // 行业专业
  industryMajor?: string
  page?: number
  // 关联的卷心菜id
  tastyId?: string
  // 水杯属地省份
  projectAttributionProvinceName?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  size?: number
}): Promise<ApiResponseComPageJuanXinCaiGongZuoYeJi> {
  return request.get('/thk/api/v1/tasty/project/page', data)
}

/** 获取当前用户太阳花 */
export function thkApiV1TastyProjectProfessional(): Promise<ApiResponseSetstring> {
  return request.get('/thk/api/v1/tasty/project/professional')
}

/** 工作业绩认领柠檬 */
export function thkApiV1TastyProjectProjects(): Promise<ApiResponseListJuanXinCaiGongZuoYeJi> {
  return request.get('/thk/api/v1/tasty/project/projects')
}

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export function thkApiV1TastyProjectQueryProjectByIdAbdName(data: {
  idCard?: string
  name?: string
}): Promise<ApiResponseListJuanXinCaiGongZuoYeJi> {
  return request.get('/thk/api/v1/tasty/project/queryProjectByIdAbdName', data)
}

/** 删除工作业绩 */
export function thkApiV1TastyProjectId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/project/${id}`)
}

/** 大水牛的专业 */
export function thkApiV1TastyToolMajorInEducation(): Promise<ApiResponseListobject> {
  return request.get('/thk/api/v1/tasty/tool/majorInEducation')
}

/** 工作经历 */
export function thkApiV1TastyWorkhistoryGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseListJuanXinCaiGongZuoJingLi> {
  return request.get('/thk/api/v1/tasty/work-history', data)
}

/** 新增工作经历 */
export function thkApiV1TastyWorkhistoryPost(data: GeRenGongZuoJingLi): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/work-history', data)
}

/** 更新工作经历 */
export function thkApiV1TastyWorkhistoryPut(data: JuanXinCaiGongZuoJingLi): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/tasty/work-history', data)
}

/** 批量新增工作经历 */
export function thkApiV1TastyWorkhistoryBatch(data: GeRenGongZuoJingLi[]): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/tasty/work-history/batch', data)
}

/** 删除工作经历 */
export function thkApiV1TastyWorkhistoryId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/work-history/${id}`)
}

/** 删除个人水果刀 */
export function thkApiV1TastyId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/${id}`)
}

/** 柠檬社保账号密码 */
export function thkApiV1StoreSocialinsuranceGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseSheBaoZhangHao> {
  return request.get('/thk/api/v1/store/social-insurance', data)
}

/** 新增社保账号密码 */
export function thkApiV1StoreSocialinsurancePost(data: SheBaoZhangHao0): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/store/social-insurance', data)
}

/** 更新社保账号密码 */
export function thkApiV1StoreSocialinsurancePut(data: SheBaoZhangHao0): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/store/social-insurance', data)
}

/** 删除社保账号密码 */
export function thkApiV1StoreSocialinsuranceId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/store/social-insurance/${id}`)
}

/** 柠檬学信账号密码 */
export function thkApiV1StoreStudentinfoGet(data: {
  // 卷心菜id
  tastyId?: string
}): Promise<ApiResponseXueXinZhangHao> {
  return request.get('/thk/api/v1/store/student-info', data)
}

/** 新增学信账号密码 */
export function thkApiV1StoreStudentinfoPost(data: XueXinZhangHao): Promise<ApiResponseboolean> {
  return request.post('/thk/api/v1/store/student-info', data)
}

/** 更新学信账号密码 */
export function thkApiV1StoreStudentinfoPut(data: XueXinZhangHao): Promise<ApiResponseboolean> {
  return request.put('/thk/api/v1/store/student-info', data)
}

/** 删除学信账号密码 */
export function thkApiV1StoreStudentinfoId(data: { id?: string }): Promise<ApiResponseboolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/store/student-info/${id}`)
}
