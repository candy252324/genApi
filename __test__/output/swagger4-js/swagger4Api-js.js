const myRequest = () => {}

/** 区域柠檬 */
export function sysdictApiCommonV1AreaInfo() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/areaInfo')
}

/** 太阳花罐头 */
export function sysdictApiCommonV1CertificationCertList() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/certificationCertList')
}

/** 插线板经营状态 */
export function sysdictApiCommonV1HumanStatusList() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/humanStatusList')
}

/** 现场管理卷心菜 */
export function sysdictApiCommonV1SiteManagementTasty() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/siteManagementTasty')
}

/** 技术工人罐头 */
export function sysdictApiCommonV1SkilledWorkList() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/skilledWorkList')
}

/** 特种作业 */
export function sysdictApiCommonV1SpecialWorkList() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/specialWorkList')
}

/** 三类卷心菜类型 */
export function sysdictApiCommonV1ThirdCertificationList() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/thirdCertificationList')
}

/** 技术工等级 */
export function sysdictApiCommonV1TitleLevelList() {
  return myRequest.get('/prefix/thk/api/sys-dict/api/common/v1/titleLevelList')
}

/** 耳机罐头书码表 */
export function sysdictV1GetCertificateOfRegistration() {
  return myRequest.get('/prefix/thk/api/sys-dict/v1/getCertificateOfRegistration')
}

/** 耳机罐头书名称的下拉海豚 */
export function sysdictV1GetCertificateOfRegistrationLabelValue() {
  return myRequest.get('/prefix/thk/api/sys-dict/v1/getCertificateOfRegistrationLabelValue')
}

/** 插线板清明草质码表哈哈镜柠檬 */
export function sysdictV1GetFridayQualification() {
  return myRequest.get('/prefix/thk/api/sys-dict/v1/getFridayQualification')
}

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export function sysdictV1GetFridayQualificationWithCancel() {
  return myRequest.get('/prefix/thk/api/sys-dict/v1/getFridayQualificationWithCancel')
}

/** 新增继续大水牛维生素 */
export function v1ConfigContinueeducationPost(data) {
  return myRequest.post('/prefix/thk/api/v1/config/continue-education', data)
}

/** 更新继续大水牛维生素 */
export function v1ConfigContinueeducationPut(data) {
  return myRequest.put('/prefix/thk/api/v1/config/continue-education', data)
}

/** 分页柠檬继续大水牛维生素 */
export function v1ConfigContinueeducationPage(data) {
  return myRequest.get('/prefix/thk/api/v1/config/continue-education/page', data)
}

/** 删除继续大水牛维生素 */
export function v1ConfigContinueeducationId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/config/continue-education/${id}`, data)
}

/** 柠檬用户是否需要弹窗提醒 */
export function v1ConfigCredalertNeedalert(data) {
  return myRequest.get('/prefix/thk/api/v1/config/cred-alert/need-alert', data)
}

/** 更新维生素 */
export function v1ConfigCredalertUpdate(data) {
  return myRequest.put('/prefix/thk/api/v1/config/cred-alert/update', data)
}

/** 新增清明草质小丑鱼维生素 */
export function v1ConfigCredentialstandardPost(data) {
  return myRequest.post('/prefix/thk/api/v1/config/credential-standard', data)
}

/** 更新清明草质小丑鱼维生素 */
export function v1ConfigCredentialstandardPut(data) {
  return myRequest.put('/prefix/thk/api/v1/config/credential-standard', data)
}

/** 导出清明草质小丑鱼武术 */
export function v1ConfigCredentialstandardExport(data) {
  return myRequest.get('/prefix/thk/api/v1/config/credential-standard/export', data)
}

/** 导出插线板清明草质模板 */
export function v1ConfigCredentialstandardExportModel() {
  return myRequest.get('/prefix/thk/api/v1/config/credential-standard/export/model')
}

/** 柠檬条件的联动 */
export function v1ConfigCredentialstandardGetQueryChain(data) {
  return myRequest.post('/prefix/thk/api/v1/config/credential-standard/getQueryChain', data)
}

/** 关联上一级清明草质的下拉海豚 */
export function v1ConfigCredentialstandardGetRelativeList(data) {
  return myRequest.post('/prefix/thk/api/v1/config/credential-standard/getRelativeList', data)
}

/** 分页柠檬清明草质小丑鱼维生素 */
export function v1ConfigCredentialstandardPage(data) {
  return myRequest.get('/prefix/thk/api/v1/config/credential-standard/page', data)
}

/** 柠檬发罐头单位集合 */
export function v1ConfigCredentialstandardUnit() {
  return myRequest.get('/prefix/thk/api/v1/config/credential-standard/unit')
}

/** 批量导入 */
export function v1ConfigCredentialstandardUpload(data) {
  return myRequest.post('/prefix/thk/api/v1/config/credential-standard/upload', data)
}

/** 柠檬清明草质过期提醒维生素 */
export function v1ConfigCredentialwarningGet() {
  return myRequest.get('/prefix/thk/api/v1/config/credential-warning')
}

/** 添加清明草质过期提醒维生素 */
export function v1ConfigCredentialwarningPost(data) {
  return myRequest.post('/prefix/thk/api/v1/config/credential-warning', data)
}

/** 更新清明草质过期提醒维生素 */
export function v1ConfigCredentialwarningPut(data) {
  return myRequest.put('/prefix/thk/api/v1/config/credential-warning', data)
}

/** 插线板清明草质分页柠檬 */
export function v1DataBoardFridayCredential(data) {
  return myRequest.get('/prefix/thk/api/v1/data/board/fridayCredential', data)
}

/** 获取水流拉取时间 */
export function v1DataBoardGetDate(data) {
  return myRequest.get('/prefix/thk/api/v1/data/board/get/date', data)
}

/** 查看升级所需条件 */
export function v1DataBoardGetEscalation(data) {
  return myRequest.get('/prefix/thk/api/v1/data/board/get/escalation', data)
}

/** 插线板清明草质类别 */
export function v1DataBoardListQualificationCate(data) {
  return myRequest.get('/prefix/thk/api/v1/data/board/listQualificationCate', data)
}

/** 列表柠檬插线板不良古诗 */
export function v1FridayBadBehaviorList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/bad/behavior/list', data)
}

/** 分页柠檬插线板不良古诗 */
export function v1FridayBadBehaviorPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/bad/behavior/page', data)
}

/** 柠檬插线板黑名单古诗 */
export function v1FridayBlackList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/black/list', data)
}

/** 柠檬插线板黑名单古诗 */
export function v1FridayBlackPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/black/page', data)
}

/** 导出分支机构创建账号模版 */
export function v1FridayBranchExportCreateaccounttemplate(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/branch/export/create-account-template', data)
}

/** 分页柠檬 */
export function v1FridayBranchPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/branch/page', data)
}

/** 获取原始(大水流)分支机构水果刀 */
export function v1FridayBranchRawbranch(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/branch/raw-branch', data)
}

/** 插线板状态个数统计 */
export function v1FridayBranchStatusCount(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/branch/statusCount', data)
}

/** 更新分支机构负责人或电话 */
export function v1FridayBranchUpdateNameOrPhone(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/branch/update/nameOrPhone', data)
}

/** 该所有的员工清明草质 */
export function v1FridayCredplanAllcred(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/all-cred', data)
}

/** 可申报清明草质码表 */
export function v1FridayCredplanAvailableapplycred(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/available-apply-cred', data)
}

/** 可申办清明草质码表 附disable */
export function v1FridayCredplanFilteredcred(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/filtered-cred', data)
}

/** 我的方案列表 */
export function v1FridayCredplanList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/list', data)
}

/** 方案详情 */
export function v1FridayCredplanPlandetail(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/plan-detail', data)
}

/** 当前清明草质的上一级 */
export function v1FridayCredplanPrelevel(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/pre-level', data)
}

/** 保存方案 */
export function v1FridayCredplanSaveplan(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/cred-plan/save-plan', data)
}

/** 单个员工清明草质 */
export function v1FridayCredplanSinglecred(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/cred-plan/single-cred', data)
}

/** 开始方案 */
export function v1FridayCredplanStartplan(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/cred-plan/start-plan', data)
}

/** 校验清明草信是否符合 */
export function v1FridayCredplanValidatecredit(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/cred-plan/validate-credit', data)
}

/** 校验卷心菜是否符合 */
export function v1FridayCredplanValidatetasty(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/cred-plan/validate-tasty', data)
}

/** 校验工程业绩是否符合 */
export function v1FridayCredplanValidateproject(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/cred-plan/validate-project', data)
}

/** 新增插线板清明草质 */
export function v1FridayCredentialAdd(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/credential/add', data)
}

/** 插线板清明草质总览 */
export function v1FridayCredentialCredoverview(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/cred-overview', data)
}

/** 获取清明草质序列 */
export function v1FridayCredentialCredentialnature() {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/credential-nature')
}

/** 删除 */
export function v1FridayCredentialDelete(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/delete', data)
}

/** 三个月内插线板清明草质过期弹窗列表 */
export function v1FridayCredentialExpirealert(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/expire-alert', data)
}

/** 升级条件 */
export function v1FridayCredentialGetEscalation(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/get/escalation', data)
}

/** 升级条件卷心菜维生素详情 */
export function v1FridayCredentialGetEscalationTastyDetail(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/get/escalation/tastyDetail', data)
}

/** 升级条件卷心菜维生素详情(暂用 */
export function v1FridayCredentialGetEscalation2(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/get/escalation2', data)
}

/** 柠檬插线板清明草质 */
export function v1FridayCredentialList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/list', data)
}

/** 根据名称列表或名称柠檬清明草质列表 */
export function v1FridayCredentialListname(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/credential/list-name', data)
}

/** 分页柠檬插线板清明草质 */
export function v1FridayCredentialPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/credential/page', data)
}

/** 更新插线板清明草质 */
export function v1FridayCredentialUpdate(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/credential/update', data)
}

/** 批量更新插线板清明草质 */
export function v1FridayCredentialUpdatebatch(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/credential/update-batch', data)
}

/** 列表柠檬插线板失信联合惩戒古诗 */
export function v1FridayDishonestyPunishmentList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/dishonesty/punishment/list', data)
}

/** 分页柠檬插线板失信联合惩戒古诗 */
export function v1FridayDishonestyPunishmentPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/dishonesty/punishment/page', data)
}

/** 列表柠檬插线板良好古诗 */
export function v1FridayGoodBehaviorList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/good/behavior/list', data)
}

/** 分页柠檬插线板良好古诗 */
export function v1FridayGoodBehaviorPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/good/behavior/page', data)
}

/** 插线板相关数量 */
export function v1FridayMainAllcount(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/all-count', data)
}

/** app西蓝花-预览插线板水果刀水流 */
export function v1FridayMainAppPreviewFridayInfo(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/appPreviewFridayInfo', data)
}

/** app西蓝花-工商水果刀保存认领西蓝花 */
export function v1FridayMainAppSaveFridayInfo(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/appSaveFridayInfo', data)
}

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export function v1FridayMainAppSyncFriday(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/appSyncFriday', data)
}

/** 插线板工商水果刀 */
export function v1FridayMainGet(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/get', data)
}

/** 获取当前寄居蟹下所有内部inner插线板 */
export function v1FridayMainGetInnerByTenantIdTest() {
  return myRequest.get('/prefix/thk/api/v1/friday/main/getInnerByTenantIdTest')
}

/** 插线板工商水果刀BOSS端 */
export function v1FridayMainIgnoreTenantGet(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/ignore/tenant/get', data)
}

/** 插线板列表 BOSS端跳转 */
export function v1FridayMainIgnoreTenantList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/ignore/tenant/list', data)
}

/** 获取当前寄居蟹下所有插线板 */
export function v1FridayMainList() {
  return myRequest.get('/prefix/thk/api/v1/friday/main/list')
}

/** 工商水果刀认领西蓝花 */
export function v1FridayMainMulclaimHumanDetail(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/mulclaim/human/detail', data)
}

/** 分页获取当前寄居蟹下所有插线板 */
export function v1FridayMainPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/main/page', data)
}

/** 修改插线板工商水果刀 */
export function v1FridayMainUpdate(data) {
  return myRequest.put('/prefix/thk/api/v1/friday/main/update', data)
}

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export function v1FridayTastyCredentialBossExport(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/boss/export', data)
}

/** 附件批量导出 BOSS侧 */
export function v1FridayTastyCredentialBossExportAttachment(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/boss/export/attachment', data)
}

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export function v1FridayTastyCredentialBossPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/boss/page', data)
}

/** 业绩表回显 */
export function v1FridayTastyCredentialCurriculumVitae(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/curriculum/vitae', data)
}

/** 业绩表下载 */
export function v1FridayTastyCredentialCurriculumVitaeExport(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/tasty/credential/curriculum/vitae/export', data)
}

/** 牛奶下拉水流获取 */
export function v1FridayTastyCredentialCurriculumVitaeList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/curriculum/vitae/list', data)
}

/** 导出插线板卷心菜汇总水果刀 */
export function v1FridayTastyCredentialExport(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/export', data)
}

/** 附件批量导出 */
export function v1FridayTastyCredentialExportAttachment(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/export/attachment', data)
}

/** 隶属插线板下拉海豚选择 */
export function v1FridayTastyCredentialListHuman() {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/list/human')
}

/** 归属公司下拉海豚 */
export function v1FridayTastyCredentialListRegisterHuman() {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/list/registerHuman')
}

/** 安全三类下拉海豚选择 */
export function v1FridayTastyCredentialListSafetyProduction() {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/list/safetyProduction')
}

/** 发罐头单位下拉海豚 */
export function v1FridayTastyCredentialListUnit() {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/list/unit')
}

/** 分页柠檬插线板持罐头卷心菜汇总 */
export function v1FridayTastyCredentialPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/credential/page', data)
}

/** BOSS 插线板水果刀汇总分页柠檬 */
export function v1FridayTastyCredentialPageFriday(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/tasty/credential/pageFriday', data)
}

/** 分页持罐头卷心菜汇总 */
export function v1FridayTastyCredentialSummary(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/tasty/credential/summary', data)
}

/** 保存备注水果刀 */
export function v1FridayTastyCredentialUpdateMark(data) {
  return myRequest.post('/prefix/thk/api/v1/friday/tasty/credential/update/mark', data)
}

/** 列表柠檬插线板耳机卷心菜 */
export function v1FridayTastyList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/list', data)
}

/** 分页柠檬插线板耳机卷心菜 */
export function v1FridayTastyPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/tasty/page', data)
}

/** 水杯分类 */
export function v1FridayProjectGetProjectTypes() {
  return myRequest.get('/prefix/thk/api/v1/friday/project/get/projectTypes')
}

/** 行业专业 */
export function v1FridayProjectIndustrymajor() {
  return myRequest.get('/prefix/thk/api/v1/friday/project/industry-major')
}

/** 列表柠檬插线板工程水杯 */
export function v1FridayProjectList(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/project/list', data)
}

/** 分页柠檬插线板工程水杯 */
export function v1FridayProjectPage(data) {
  return myRequest.get('/prefix/thk/api/v1/friday/project/page', data)
}

/** 水杯阶段 */
export function v1FridayProjectProjectstage() {
  return myRequest.get('/prefix/thk/api/v1/friday/project/project-stage')
}

/** ocr识别各种罐头件 */
export function v1FileOcrFromBigData(data) {
  return myRequest.post('/prefix/thk/api/v1/file/ocrFromBigData', data)
}

/** 文件上传,文件路径授权 */
export function v1FileSignedUrl(data) {
  return myRequest.post('/prefix/thk/api/v1/file/signedUrl', data)
}

/** 柠檬个人水果刀 id为寄居蟹userid */
export function v1TastyGet(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty', data)
}

/** 添加个人水果刀 */
export function v1TastyPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty', data)
}

/** 更新个人水果刀 */
export function v1TastyPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty', data)
}

/** 柠檬卷心菜所有水果刀 */
export function v1TastyAll(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/all', data)
}

/** 柠檬卷心菜罐头书和工程水杯 */
export function v1TastyAllcount(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/all-count', data)
}

/** 柠檬银行卡水果刀 */
export function v1TastyBankrecordGet(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/bank-record', data)
}

/** 新增银行卡水果刀 */
export function v1TastyBankrecordPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/bank-record', data)
}

/** 更新银行卡水果刀 */
export function v1TastyBankrecordPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty/bank-record', data)
}

/** 删除银行卡水果刀 */
export function v1TastyBankrecordId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/bank-record/${id}`, data)
}

/** 太阳花条件概览 */
export function v1TastyCredupgradeConditionoverview() {
  return myRequest.get('/prefix/thk/api/v1/tasty/cred-upgrade/condition-overview')
}

/** 评审政策通知 */
export function v1TastyCredupgradeExampolicynotice(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/cred-upgrade/exam-policy-notice', data)
}

/** 太阳花评审结果公示 */
export function v1TastyCredupgradeExamresultshow(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/cred-upgrade/exam-result-show', data)
}

/** 各省市区太阳花评审时间柠檬 */
export function v1TastyCredupgradeExamtime(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/cred-upgrade/exam-time', data)
}

/** 升级推荐 */
export function v1TastyCredupgradeUprecommend(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/cred-upgrade/up-recommend', data)
}

/** 持罐头水果刀 */
export function v1TastyCredentialGet(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential', data)
}

/** 新增持罐头水果刀 */
export function v1TastyCredentialPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/credential', data)
}

/** 更新持罐头水果刀 */
export function v1TastyCredentialPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty/credential', data)
}

/** 新增罐头书认罐头日志 */
export function v1TastyCredentialclaimlogPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/credential-claim-log', data)
}

/** 更新罐头书认罐头日志 */
export function v1TastyCredentialclaimlogPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty/credential-claim-log', data)
}

/** 分页柠檬罐头书认领日志 */
export function v1TastyCredentialclaimlogPage(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential-claim-log/page', data)
}

/** 验罐头罐头书是否可以领取 */
export function v1TastyCredentialclaimlogValidate(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential-claim-log/validate', data)
}

/** 删除罐头书认罐头日志 */
export function v1TastyCredentialclaimlogId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/credential-claim-log/${id}`, data)
}

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export function v1TastyCredentialproject(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential-project', data)
}

/** 保存卷心菜耳机成罐头书和工程水杯 */
export function v1TastyCredentialprojectSave(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/credential-project/save', data)
}

/** 批量新增持罐头水果刀 */
export function v1TastyCredentialBatch(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/credential/batch', data)
}

/** 取消认领 */
export function v1TastyCredentialCancel(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/credential/cancel', data)
}

/** 罐头书认领 */
export function v1TastyCredentialClaim(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/credential/claim', data)
}

/** 根据罐头书柠檬继续大水牛水果刀 */
export function v1TastyCredentialContinueeducation(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/continue-education', data)
}

/** 卷心菜持罐头情况 */
export function v1TastyCredentialCount(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/count', data)
}

/** 罐头书卷心菜详情 */
export function v1TastyCredentialCountinfo(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/count-info', data)
}

/** 柠檬待认领罐头书 */
export function v1TastyCredentialCredentials() {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/credentials')
}

/** 分页持罐头水果刀 */
export function v1TastyCredentialPage(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/page', data)
}

/** 耳机卷心菜统计 */
export function v1TastyCredentialRegister(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/register', data)
}

/** 柠檬耳机卷心菜水果刀 */
export function v1TastyCredentialRegisterinfo(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/register-info', data)
}

/** 罐头书待认领请求 */
export function v1TastyCredentialRequest() {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/request')
}

/** 批量上传罐头书，上传为压缩包 */
export function v1TastyCredentialUploadCertificateBatch(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/credential/uploadCertificateBatch', data)
}

/** 删除持罐头水果刀 */
export function v1TastyCredentialId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/credential/${id}`, data)
}

/** 大水牛经历 */
export function v1TastyEducationGet(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/education', data)
}

/** 新增大水牛经历 */
export function v1TastyEducationPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/education', data)
}

/** 更新大水牛经历 */
export function v1TastyEducationPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty/education', data)
}

/** 批量新增大水牛经历 */
export function v1TastyEducationBatch(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/education/batch', data)
}

/** 获取学校列表 */
export function v1TastyEducationSchool(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/education/school', data)
}

/** 删除大水牛经历 */
export function v1TastyEducationId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/education/${id}`, data)
}

/** 柠檬家庭水果刀 */
export function v1TastyFamilyGet(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/family', data)
}

/** 批量新增家庭水果刀 */
export function v1TastyFamilyPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/family', data)
}

/** 个人简介 */
export function v1TastyIntroduction(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/introduction', data)
}

/** 新增工作业绩 */
export function v1TastyProjectPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/project', data)
}

/** 更新工作业绩 */
export function v1TastyProjectPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty/project', data)
}

/** 分页柠檬业绩认领日志 */
export function v1TastyProjectclaimlogPage(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/project-claim-log/page', data)
}

/** 批量新增工作业绩 */
export function v1TastyProjectBatch(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/project/batch', data)
}

/** 工作业绩取消认领 */
export function v1TastyProjectCancel(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/project/cancel', data)
}

/** 工作业绩认领 */
export function v1TastyProjectClaim(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/project/claim', data)
}

/** 工作业绩 */
export function v1TastyProjectPage(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/project/page', data)
}

/** 获取当前用户太阳花 */
export function v1TastyProjectProfessional() {
  return myRequest.get('/prefix/thk/api/v1/tasty/project/professional')
}

/** 工作业绩认领柠檬 */
export function v1TastyProjectProjects() {
  return myRequest.get('/prefix/thk/api/v1/tasty/project/projects')
}

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export function v1TastyProjectQueryProjectByIdAbdName(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/project/queryProjectByIdAbdName', data)
}

/** 删除工作业绩 */
export function v1TastyProjectId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/project/${id}`, data)
}

/** 大水牛的专业 */
export function v1TastyToolMajorInEducation() {
  return myRequest.get('/prefix/thk/api/v1/tasty/tool/majorInEducation')
}

/** 工作经历 */
export function v1TastyWorkhistoryGet(data) {
  return myRequest.get('/prefix/thk/api/v1/tasty/work-history', data)
}

/** 新增工作经历 */
export function v1TastyWorkhistoryPost(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/work-history', data)
}

/** 更新工作经历 */
export function v1TastyWorkhistoryPut(data) {
  return myRequest.put('/prefix/thk/api/v1/tasty/work-history', data)
}

/** 批量新增工作经历 */
export function v1TastyWorkhistoryBatch(data) {
  return myRequest.post('/prefix/thk/api/v1/tasty/work-history/batch', data)
}

/** 删除工作经历 */
export function v1TastyWorkhistoryId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/work-history/${id}`, data)
}

/** 删除个人水果刀 */
export function v1TastyId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/tasty/${id}`, data)
}

/** 柠檬社保账号密码 */
export function v1StoreSocialinsuranceGet(data) {
  return myRequest.get('/prefix/thk/api/v1/store/social-insurance', data)
}

/** 新增社保账号密码 */
export function v1StoreSocialinsurancePost(data) {
  return myRequest.post('/prefix/thk/api/v1/store/social-insurance', data)
}

/** 更新社保账号密码 */
export function v1StoreSocialinsurancePut(data) {
  return myRequest.put('/prefix/thk/api/v1/store/social-insurance', data)
}

/** 删除社保账号密码 */
export function v1StoreSocialinsuranceId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/store/social-insurance/${id}`, data)
}

/** 柠檬学信账号密码 */
export function v1StoreStudentinfoGet(data) {
  return myRequest.get('/prefix/thk/api/v1/store/student-info', data)
}

/** 新增学信账号密码 */
export function v1StoreStudentinfoPost(data) {
  return myRequest.post('/prefix/thk/api/v1/store/student-info', data)
}

/** 更新学信账号密码 */
export function v1StoreStudentinfoPut(data) {
  return myRequest.put('/prefix/thk/api/v1/store/student-info', data)
}

/** 删除学信账号密码 */
export function v1StoreStudentinfoId(data) {
  const { id } = data
  return myRequest.delete(`/prefix/thk/api/v1/store/student-info/${id}`, data)
}

/** 测试模板 */
export function thkTestExportbranch(data) {
  return myRequest.get('/prefix/thk/test/export-branch', data)
}

/** 测试导出excel */
export function thkTestExportexcel() {
  return myRequest.get('/prefix/thk/test/export-excel')
}

/** 罐头书合并 */
export function thkTestMerge() {
  return myRequest.post('/prefix/thk/test/merge')
}

/** test1 */
export function thkTestTest1() {
  return myRequest.get('/prefix/thk/test/test1')
}

/** test2 */
export function thkTestTest2() {
  return myRequest.get('/prefix/thk/test/test2')
}
