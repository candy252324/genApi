export interface AddBusinessEnterpriseReq {
  /** 企业地址 */
  addr: string
  /** 区县 */
  area: string
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 所属行业 */
  categoryName: string
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 法人名称 */
  corporateName: string
  /** 国家 */
  country: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  enableSaveOrUpdate: boolean
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  id: number
  isDelete: number
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  modified: string
  /** 联系电话 */
  phone: string
  /** 省份 */
  province: string
  /** 注册人员数 */
  regPersonCnt: number
  /** 注册资本(单位元) */
  registeredCapital: number
  /** 四库业绩数 */
  skAchievementCnt: number
  /** 四库资质数 */
  skQualificationCnt: number
  /** 步骤   1需要验证  2直接新增 */
  step: number
  /** 三方id */
  thirdId: number
  type: string
  updateId: number
  updateName: string
}
export interface AddBusinessPersonCertificateReq {
  id: number
  /** 证书专业 */
  major: string
  /** 证书名称 */
  name: string
}
export interface AddBusinessPersonReq {
  /** 个人业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 不良行为数 */
  badBehaviorCnt: number
  /** 黑名单数 */
  blacklistRecordCnt: number
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 执业资格证列表 */
  certificateList: AddBusinessPersonCertificateReq[]
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  /** 学历 */
  education: string
  enableSaveOrUpdate: boolean
  /** 性别 男 male 女 female */
  gender: string
  /** 良好行为数 */
  goodBehaviorCnt: number
  id: number
  isDelete: number
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  modified: string
  /** 人才名称 */
  personName: string
  /** 人员风险  0无风险 1有风险 */
  personnelRisk: number
  /** 手机号 */
  phone: string
  /** 省份 */
  province: string
  /** 四库证书数 */
  skCertificateCnt: number
  /** 步骤   1需要验证  2直接新增 */
  step: number
  /** 三方id */
  thirdId: number
  /** 职称列表 */
  titleList: AddBusinessPersonTitleReq[]
  type: string
  updateId: number
  updateName: string
}
export interface AddBusinessPersonTitleReq {
  id: number
  /** 职称级别 */
  level: string
  /** 职称专业 */
  major: string
}
export interface AddBusinessProjectReq {
  /** 代理机构 */
  agencies: string
  /** 代理机构地址 */
  agenciesAddr: string
  /** 代理机构地址坐标 */
  agenciesAddrCoordinate: string
  /** 招标单位地址纬度 */
  agenciesAddrLat: string
  /** 招标单位地址经度 */
  agenciesAddrLng: string
  /** 代理机构区县 */
  agenciesArea: string
  /** 代理机构城市 */
  agenciesCity: string
  /** 代理机构国家 */
  agenciesCountry: string
  /** 代理机构电话 */
  agenciesPhone: string
  /** 代理机构省份 */
  agenciesProvince: string
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位地址坐标 */
  biddingCorpAddrCoordinate: string
  /** 招标单位地址纬度 */
  biddingCorpAddrLat: string
  /** 招标单位地址经度 */
  biddingCorpAddrLng: string
  /** 招标单位区县 */
  biddingCorpArea: string
  /** 招标单位城市 */
  biddingCorpCity: string
  /** 招标单位国家 */
  biddingCorpCountry: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 招标单位省份 */
  biddingCorpProvince: string
  /** 投标结束时间 */
  biddingEndTime: string
  /** 开标时间 */
  biddingOpeningTime: string
  /** 投标开始时间 */
  biddingStartTime: string
  /** 招标类型 */
  biddingType: string
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 坐标 */
  coordinate: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  enableSaveOrUpdate: boolean
  /** 文件下载结束时间 */
  fileDownloadEndTime: string
  /** 文件下载开始时间 */
  fileDownloadStartTime: string
  id: number
  /** 行业类型 */
  industryType: string
  isDelete: number
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  modified: string
  /** 项目联系方式 */
  phone: string
  /** 招标预算 */
  projectBudget: number
  /** 项目名称 */
  projectName: string
  /** 项目编码 */
  projectNum: string
  /** 项目类型 */
  projectType: string
  /** 步骤   1需要验证  2直接新增 */
  step: number
  /** 三方id */
  thirdId: number
  type: string
  updateId: number
  updateName: string
  /** 原网页url */
  webPageUrl: string
}
export interface AddBusinessReq {
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 坐标 */
  coordinate: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  enableSaveOrUpdate: boolean
  id: number
  isDelete: number
  /** 纬度 */
  lat: string
  /** 经度 */
  lng: string
  modified: string
  /** 步骤   1需要验证  2直接新增 */
  step: number
  type: string
  updateId: number
  updateName: string
}
export interface AddBusinessResp {
  /** 失败数量 */
  failCnt: number
  /** id */
  id: number
  /** 重复校验的列表 */
  list: object[]
  /** 领取人姓名 */
  receiveName: string
  /** 成功数量 */
  successCnt: number
}
export interface AddSignBusinessEnterpriseReq {
  /** 企业地址 */
  addr: string
  /** 区县 */
  area: string
  /** 商机ID */
  businessId: number
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 所属行业 */
  categoryName: string
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 法人名称 */
  corporateName: string
  /** 国家 */
  country: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  /** 客户ID */
  customerId: number
  /** 客户类型 */
  customerType: string
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  id: number
  isDelete: number
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  modified: string
  /** 联系电话 */
  phone: string
  /** 省份 */
  province: string
  /** 注册人员数 */
  regPersonCnt: number
  /** 注册资本(单位元) */
  registeredCapital: number
  /** 评分 */
  score: number
  /** 签约类型 */
  signType: string
  /** 四库业绩数 */
  skAchievementCnt: number
  /** 四库资质数 */
  skQualificationCnt: number
  /** 步骤   1需要验证  2直接新增 */
  step: number
  type: string
  updateId: number
  updateName: string
}
export interface AddSignBusinessPersonReq {
  /** 个人业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 商机ID */
  businessId: number
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 执业资格证列表 */
  certificateList: AddBusinessPersonCertificateReq[]
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  /** 客户ID */
  customerId: number
  /** 客户类型 */
  customerType: string
  /** 学历 */
  education: string
  /** 性别 男 male 女 female */
  gender: string
  id: number
  isDelete: number
  /** 纬度 */
  lat: string
  /** 经度 */
  lng: string
  modified: string
  /** 人才名称 */
  personName: string
  /** 手机号 */
  phone: string
  /** 省份 */
  province: string
  /** 签约类型 */
  signType: string
  /** 步骤   1需要验证  2直接新增 */
  step: number
  /** 职称列表 */
  titleList: AddBusinessPersonTitleReq[]
  type: string
  updateId: number
  updateName: string
}
export interface AddSignBusinessProjectReq {
  /** 代理机构 */
  agencies: string
  /** 代理机构地址 */
  agenciesAddr: string
  /** 代理机构地址坐标 */
  agenciesAddrCoordinate: string
  /** 招标单位地址纬度 */
  agenciesAddrLat: string
  /** 招标单位地址经度 */
  agenciesAddrLng: string
  /** 代理机构区县 */
  agenciesArea: string
  /** 代理机构城市 */
  agenciesCity: string
  /** 代理机构国家 */
  agenciesCountry: string
  /** 代理机构电话 */
  agenciesPhone: string
  /** 代理机构省份 */
  agenciesProvince: string
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位地址坐标 */
  biddingCorpAddrCoordinate: string
  /** 招标单位地址纬度 */
  biddingCorpAddrLat: string
  /** 招标单位地址经度 */
  biddingCorpAddrLng: string
  /** 招标单位区县 */
  biddingCorpArea: string
  /** 招标单位城市 */
  biddingCorpCity: string
  /** 招标单位国家 */
  biddingCorpCountry: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 招标单位省份 */
  biddingCorpProvince: string
  /** 投标结束时间 */
  biddingEndTime: string
  /** 开标时间 */
  biddingOpeningTime: string
  /** 投标开始时间 */
  biddingStartTime: string
  /** 招标类型 */
  biddingType: string
  /** 商机ID */
  businessId: number
  businessSource: string
  /** 商机类型 ENTERPRISE PERSON PROJECT */
  businessType: string
  /** 坐标 */
  coordinate: string
  createId: number
  createName: string
  /** 创建来源 我的:myself 公海:open_sea 客户:customer */
  createSource: string
  created: string
  /** 客户ID */
  customerId: number
  /** 客户类型 */
  customerType: string
  /** 文件下载结束时间 */
  fileDownloadEndTime: string
  /** 文件下载开始时间 */
  fileDownloadStartTime: string
  id: number
  /** 行业类型 */
  industryType: string
  isDelete: number
  /** 纬度 */
  lat: string
  /** 经度 */
  lng: string
  modified: string
  /** 项目联系方式 */
  phone: string
  /** 招标预算 */
  projectBudget: number
  /** 项目名称 */
  projectName: string
  /** 项目编码 */
  projectNum: string
  /** 项目类型 */
  projectType: string
  /** 签约类型 */
  signType: string
  /** 步骤   1需要验证  2直接新增 */
  step: number
  type: string
  updateId: number
  updateName: string
  /** 原网页url */
  webPageUrl: string
}
export interface AddSignBusinessResp {
  /** 商机ID */
  businessId: number
  /** 重复校验的列表 */
  list: object[]
  /** 手机号 */
  mobile: string
  /** 签约记录ID */
  signId: number
}
export interface ResOfApiBusinessEditBusinessEnterprise {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessEditBusinessPerson {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessEditBusinessProject {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessSubscribeEdit {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerEnterpriseUpdate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonAddCertificate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonAddTitle {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonDeleteCertificate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonDeleteTitle {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonUpdate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestInsert {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessVerifyRepeatBusiness {
  code: number
  data: AddBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAddSignBusinessEnterprise {
  code: number
  data: AddSignBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAddSignBusinessPerson {
  code: number
  data: AddSignBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAddSignBusinessProject {
  code: number
  data: AddSignBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessEnterpriseInfo {
  code: number
  data: BusinessEnterpriseInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPersonInfo {
  code: number
  data: BusinessPersonInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessProjectInfo {
  code: number
  data: BusinessProjectInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAddBusinessEnterprise {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAddBusinessPerson {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAddBusinessProject {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessAssignBusiness {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessReceiveBusiness {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessSubscribeInfo {
  code: number
  data: BusinessSubscribeInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerEnterprisePageList {
  code: number
  data: ComPageCustomerEnterpriseInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfInnerCustomerEnterprisePageList {
  code: number
  data: ComPageCustomerEnterpriseInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonPageList {
  code: number
  data: ComPageCustomerPersonInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessFollowEmployeeList {
  code: number
  data: ComPageEmployeeListResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPageEnterpriseBusinessPool {
  code: number
  data: ComPagePageEnterpriseBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessRecommendPageEnterpriseBusiness {
  code: number
  data: ComPagePageEnterpriseBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPagePersonBusinessPool {
  code: number
  data: ComPagePagePersonBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessRecommendPagePersonBusiness {
  code: number
  data: ComPagePagePersonBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPageProjectBusinessPool {
  code: number
  data: ComPagePageProjectBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessRecommendPageProjectBusiness {
  code: number
  data: ComPagePageProjectBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPagePersonSampleList {
  code: number
  data: ComPageFenYeChaXunRenCaiShangJiresponseJianDanShuJu
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPageEnterpriseSampleList {
  code: number
  data: ComPageFenYeChaXunQiYeShangJiresponseJianDanShuJu
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPageProjectSampleList {
  code: number
  data: ComPageFenYeChaXunXiangMuShangJiresponseJianDanShuJu
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessFollowList {
  code: number
  data: ComPageLieBiaoQingQiu
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiImportTaskImportList {
  code: number
  data: ComPageDaoRuLieBiaoXiangYing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonSampleList {
  code: number
  data: ComPageSouSuoRenCaiKeHuresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerEnterpriseSampleList {
  code: number
  data: ComPageSouSuoQiYeKeHuresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiOperateLogPageList {
  code: number
  data: ComPageCaoZuoRiZhiFenYeresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiSigningPageList {
  code: number
  data: ComPageQianYueJiLuFenYeresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessContactList {
  code: number
  data: ComPageLianXiRenLieBiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfInnerCustomerEnterpriseContactPageList {
  code: number
  data: ComPageLianXiRenLieBiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessProjectPageList {
  code: number
  data: ComPageXiangMuShangJiXiangQingrpcresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerEnterpriseAdd {
  code: number
  data: CustomerEnterpriseAddResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfInnerCustomerEnterpriseAdd {
  code: number
  data: CustomerEnterpriseAddResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerEnterpriseDetail {
  code: number
  data: CustomerEnterpriseDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfInnerCustomerEnterpriseDetail {
  code: number
  data: CustomerEnterpriseDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonAdd {
  code: number
  data: CustomerPersonAddResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiCustomerPersonDetail {
  code: number
  data: CustomerPersonDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiUserGetEmployeeInfo {
  code: number
  data: EmployeeResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiConfigGetPersonCertificateLabel {
  code: number
  data: object[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiConfigGetPersonTitleLabel {
  code: number
  data: object[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfOpenapiBusinessProjectSignInfo {
  code: number
  data: ProjectSignInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessPersonNotifySign {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessProjectAdd {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessProjectModified {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiSigningRemove {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessCertificateDelete {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessContactAdd {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessContactDeleteById {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessFollowFollow {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessFollowFollowAgain {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessFollowGiveUp {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessFollowTransfer {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfInnerCustomerEnterpriseUpdate {
  code: number
  data: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestCheck {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestGet {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestGetCustomer {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestGetEnterprise {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestLogin {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestPost {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestSent {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiTestSubscribeBusiness {
  code: number
  data: string
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiFileUploadFile {
  code: number
  data: ShangChuanWenJianFanHui
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessEnterpriseDetail {
  code: number
  data: QiYeShangJiXiangQingrpcresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessLink {
  code: number
  data: GuanLianShangJiResponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiSigningSave {
  code: number
  data: QianYueJieGuoresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiImportTaskImportExcel {
  code: number
  data: DuRuWenJianXiangYing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfApiBusinessProjectGet {
  code: number
  data: XiangMuShangJiXiangQingrpcresponse
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface AssignBusinessReq {
  /** 商机列表 */
  businessList: AddBusinessReq[]
  /** 商机来源 雷达:radar 公海:open_sea 高级搜索:advanced_search 重复列表:bigdata_search */
  businessReceiveSource: string
  /** 商机类型 ENTERPRISE PROJECT PERSON */
  businessType: string
  /** 被分派人id */
  receiverId: number
  /** 被分派人名称 */
  receiverName: string
}
export interface BusinessEnterpriseInfoResp {
  /** 地址 */
  addr: string
  /** 地区 */
  area: string
  /** 商机状态  */
  businessStatus: string
  /** 行业名称 */
  categoryName: string
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 法人名称 */
  corporateName: string
  /** 国家 */
  country: string
  /** 创建时间 */
  created: string
  /** 客户id */
  customerId: number
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态  存续   吊销 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  /** 电话 */
  phone: string
  /** 省市 */
  province: string
  /** 注册人员数 */
  regPersonCnt: number
  /** 注册资本(单位元) */
  registeredCapital: number
  /** 评分 */
  score: number
  /** 签约记录ID */
  signId: number
  /** 四库业绩数 */
  skAchievementCnt: number
  /** 四库资质数 */
  skQualificationCnt: number
  /** 来源 */
  source: string
  tenantId: number
  /** 三方id */
  thirdId: string
}
export interface BusinessPersonCertificateResp {
  /** 添加人 */
  createName: string
  /** 添加时间 */
  created: string
  /** 证书关联id */
  id: number
  /** 专业 */
  major: string
  /** 证书名称 */
  name: string
  /** 是否注册 */
  registered: string
}
export interface BusinessPersonInfoResp {
  /** 个人业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 地区 */
  area: string
  /** 不良行为数 */
  badBehaviorCnt: number
  /** 黑名单数 */
  blacklistRecordCnt: number
  /** 商机状态  */
  businessStatus: string
  /** 执业资格证 */
  certificateList: BusinessPersonCertificateResp[]
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  /** 创建时间 */
  created: string
  /** 客户id */
  customerId: number
  /** 客户手机号 */
  customerMobile: string
  /** 客户名称 */
  customerName: string
  /** 学历 */
  education: string
  /** 跟进人id */
  followerId: number
  /** 性别 男 女 */
  gender: string
  /** 良好行为数 */
  goodBehaviorCnt: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  /** 人才名称 */
  personName: string
  /** 电话 */
  phone: string
  /** 省市 */
  province: string
  /** 签约记录ID */
  signId: number
  /** 四库证书数 */
  skCertificateCnt: number
  /** 来源 */
  source: string
  tenantId: number
  /** 三方id */
  thirdId: string
  /** 职称 */
  titleList: BusinessPersonTitleResp[]
}
export interface BusinessPersonTitleResp {
  id: number
  /** 级别 */
  level: string
  /** 专业 */
  major: string
}
export interface BusinessProjectInfoResp {
  /** 代理机构 */
  agencies: string
  /** 代理机构地址 */
  agenciesAddr: string
  /** 招标单位地址纬度 */
  agenciesAddrLat: string
  /** 招标单位地址经度 */
  agenciesAddrLng: string
  /** 代理机构区县 */
  agenciesArea: string
  /** 代理机构城市 */
  agenciesCity: string
  /** 代理机构国家 */
  agenciesCountry: string
  /** 代理机构电话 */
  agenciesPhone: string
  /** 代理机构省份 */
  agenciesProvince: string
  /** 地区 */
  area: string
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位地址纬度 */
  biddingCorpAddrLat: string
  /** 招标单位地址经度 */
  biddingCorpAddrLng: string
  /** 招标单位区县 */
  biddingCorpArea: string
  /** 招标单位城市 */
  biddingCorpCity: string
  /** 招标单位国家 */
  biddingCorpCountry: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 招标单位省份 */
  biddingCorpProvince: string
  /** 投标结束时间 */
  biddingEndTime: string
  /** 开标时间 */
  biddingOpeningTime: string
  /** 投标开始时间 */
  biddingStartTime: string
  /** 投标时间 */
  biddingTime: string
  /** 招标类型 public:公开招标,invite:邀请招标,inquiry:询价,single:单一来源,negotiation:竞争性谈判,consultation:竞争性磋商,bidding:竞价 */
  biddingType: string
  /** 商机状态  */
  businessStatus: string
  /** 城市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  /** 创建时间 */
  created: string
  /** 客户id */
  customerId: number
  /** 文件下载结束时间 */
  fileDownloadEndTime: string
  /** 文件下载开始时间 */
  fileDownloadStartTime: string
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 行业类型 */
  industryType: string
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 纬度 */
  lat: string
  /** 工商信息id */
  licenseId: string
  /** 经度 */
  lng: string
  /** 电话 */
  phone: string
  /** 招标预算(单位元) */
  projectBudget: number
  /** 项目名称 */
  projectName: string
  /** 项目编码 */
  projectNum: string
  /** 项目类型 */
  projectType: string
  /** 省市 */
  province: string
  /** 签约记录ID */
  signId: number
  /** 来源 */
  source: string
  tenantId: number
  /** 三方id */
  thirdId: string
  /** 原网页url */
  webPageUrl: string
}
export interface BusinessReceiveResp {
  /** 失败数量 */
  failCnt: number
  /** id */
  id: number
  /** 领取人姓名 */
  receiveName: string
  /** 成功数量 */
  successCnt: number
}
export interface BusinessSubscribeInfoReq {
  createId: number
  createName: string
  created: string
  /** 企业开关 0关 1开 */
  enterpriseEnable: number
  /** 企业json */
  enterpriseJson: object
  id: number
  isDelete: number
  modified: string
  /** 人才开关 0关 1开 */
  personEnable: number
  /** 人才json */
  personJson: object
  /** 项目开关 0关 1开 */
  projectEnable: number
  /** 项目json */
  projectJson: object
  updateId: number
  updateName: string
}
export interface BusinessSubscribeInfoResp {
  /** 企业开关 0关 1开 */
  enterpriseEnable: number
  /** 企业json */
  enterpriseJson: string
  /** 人才开关 0关 1开 */
  personEnable: number
  /** 人才json */
  personJson: string
  /** 项目开关 0关 1开 */
  projectEnable: number
  /** 项目json */
  projectJson: string
}
export interface CharSequence {
}
export interface ComPageCustomerEnterpriseInfoResp {
  current: number
  records: CustomerEnterpriseInfoResp[]
  size: number
  total: number
}
export interface ComPageCustomerPersonInfoResp {
  current: number
  records: CustomerPersonInfoResp[]
  size: number
  total: number
}
export interface ComPageEmployeeListResp {
  current: number
  records: EmployeeListResp[]
  size: number
  total: number
}
export interface ComPagePageEnterpriseBusinessPoolResp {
  current: number
  records: PageEnterpriseBusinessPoolResp[]
  size: number
  total: number
}
export interface ComPagePagePersonBusinessPoolResp {
  current: number
  records: PagePersonBusinessPoolResp[]
  size: number
  total: number
}
export interface ComPagePageProjectBusinessPoolResp {
  current: number
  records: PageProjectBusinessPoolResp[]
  size: number
  total: number
}
export interface ComPageFenYeChaXunRenCaiShangJiresponseJianDanShuJu {
  current: number
  records: FenYeChaXunRenCaiShangJiresponseJianDanShuJu[]
  size: number
  total: number
}
export interface ComPageFenYeChaXunQiYeShangJiresponseJianDanShuJu {
  current: number
  records: FenYeChaXunQiYeShangJiresponseJianDanShuJu[]
  size: number
  total: number
}
export interface ComPageFenYeChaXunXiangMuShangJiresponseJianDanShuJu {
  current: number
  records: FenYeChaXunXiangMuShangJiresponseJianDanShuJu[]
  size: number
  total: number
}
export interface ComPageLieBiaoQingQiu {
  current: number
  records: LieBiaoQingQiu[]
  size: number
  total: number
}
export interface ComPageDaoRuLieBiaoXiangYing {
  current: number
  records: DaoRuLieBiaoXiangYing[]
  size: number
  total: number
}
export interface ComPageSouSuoRenCaiKeHuresponse {
  current: number
  records: SouSuoRenCaiKeHuresponse[]
  size: number
  total: number
}
export interface ComPageSouSuoQiYeKeHuresponse {
  current: number
  records: SouSuoQiYeKeHuresponse[]
  size: number
  total: number
}
export interface ComPageCaoZuoRiZhiFenYeresponse {
  current: number
  records: CaoZuoRiZhiFenYeresponse[]
  size: number
  total: number
}
export interface ComPageQianYueJiLuFenYeresponse {
  current: number
  records: QianYueJiLuFenYeresponse[]
  size: number
  total: number
}
export interface ComPageLianXiRenLieBiao {
  current: number
  records: LianXiRenLieBiao[]
  size: number
  total: number
}
export interface ComPageXiangMuShangJiXiangQingrpcresponse {
  current: number
  records: XiangMuShangJiXiangQingrpcresponse[]
  size: number
  total: number
}
export interface Comparable {
}
export interface CustomerEnterpriseAddReq {
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 所属行业 */
  categoryName: string
  /** 市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 企业法人 */
  corporateName: string
  /** 国家 */
  country: string
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 标签 */
  labels: string[]
  /** 住址 */
  location: string
  /** 联系电话 */
  phone: string
  /** 省份 */
  province: string
  /** 注册人员 */
  regPersonCnt: number
  /** 注册资金 */
  registeredCapital: number
  /** 四库业绩 */
  skAchievementCnt: number
  /** 四库资质 */
  skQualificationCnt: number
  /** 步骤   1需要验证  2直接新增 */
  step: number
}
export interface CustomerEnterpriseAddResp {
  /** 主键 Id */
  id: number
  /** 重复数据集合 */
  list: CustomerEnterpriseInfoResp[]
}
export interface CustomerEnterpriseDetailResp {
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 所属行业 */
  categoryName: string
  /** 市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 企业法人 */
  corporateName: string
  /** 国家 */
  country: string
  /** 创建人 */
  createName: string
  /** 创建时间 */
  created: string
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 标签 */
  labels: CustomerLabelResp[]
  /** 工商信息 Id */
  licenseId: string
  /** 住址 */
  location: string
  /** 联系电话 */
  phone: string
  /** 省份 */
  province: string
  /** 注册人员 */
  regPersonCnt: number
  /** 注册资金 */
  registeredCapital: number
  /** 四库业绩 */
  skAchievementCnt: number
  /** 四库资质 */
  skQualificationCnt: number
}
export interface CustomerEnterpriseInfoResp {
  /** 地址 */
  addr: string
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 主键Id */
  id: number
  /** 标签 */
  label: string
  /** 联系电话 */
  phone: string
  /** 注册人员 */
  regPersonCnt: number
  /** 注册资金 */
  registeredCapital: number
  /** 评分 */
  score: number
  /** 四库业绩 */
  skAchievementCnt: number
  /** 四库资质 */
  skQualificationCnt: number
}
export interface CustomerEnterpriseUpReq {
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 所属行业 */
  categoryName: string
  /** 市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 企业法人 */
  corporateName: string
  /** 国家 */
  country: string
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 主键 Id */
  id: number
  /** 标签 */
  labels: CustomerLabelReq[]
  /** 住址 */
  location: string
  /** 联系电话 */
  phone: string
  /** 省份 */
  province: string
  /** 注册人员 */
  regPersonCnt: number
  /** 注册资金 */
  registeredCapital: number
  /** 四库业绩 */
  skAchievementCnt: number
  /** 四库资质 */
  skQualificationCnt: number
}
export interface CustomerLabelReq {
  /** 标签主键 Id */
  id: number
  /** 标签名称 */
  labelName: string
}
export interface CustomerLabelResp {
  /** 主键 Id */
  id: number
  /** 标签名称 */
  labelName: string
}
export interface CustomerPersonAddReq {
  /** 业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 执业资格证 */
  certificateList: CustomerPersonCertificateReq[]
  /** 市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  /** 学历 */
  education: string
  /** 性别 */
  gender: string
  /** 标签 */
  labels: string[]
  /** 住址 */
  location: string
  /** 姓名 */
  personName: string
  /** 手机号 */
  phone: string
  /** 省份 */
  province: string
  /** 步骤   1需要验证  2直接新增 */
  step: number
  /** 职称 */
  titleList: CustomerPersonTitleReq[]
}
export interface CustomerPersonAddResp {
  /** 主键 Id */
  id: number
  /** 重复数据集合 */
  list: CustomerPersonInfoResp[]
}
export interface CustomerPersonCertificateInfoResp {
  /** 创建人 */
  createName: string
  /** 创建时间 */
  created: string
  /**  客户 Id */
  customerId: number
  /** 主键 Id */
  id: number
  /** 专业 */
  major: string
  /** 证书名称 */
  name: string
  /** 是否注册 */
  registered: string
}
export interface CustomerPersonCertificateReq {
  /**  客户 Id，新增客户时不用传 */
  customerId: number
  /**  主键 Id */
  id: number
  /** 专业 */
  major: string
  /** 证书名称 */
  name: string
}
export interface CustomerPersonDetailResp {
  /** 业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 执业资格证 */
  certificateList: CustomerPersonCertificateInfoResp[]
  /** 市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  /** 创建人 */
  createName: string
  /** 创建时间 */
  created: string
  /** 学历 */
  education: string
  /** 性别 */
  gender: string
  /** 标签 */
  labels: CustomerLabelResp[]
  /** 住址 */
  location: string
  /** 姓名 */
  personName: string
  /** 手机号 */
  phone: string
  /** 省份 */
  province: string
  /** 人才信息 Id */
  talentId: string
  /** 职称级别 */
  titleList: CustomerPersonTitleInfoResp[]
}
export interface CustomerPersonInfoResp {
  /** 业绩 */
  achievementCnt: number
  /** 区 */
  area: string
  /** 不良行为 */
  badBehaviorCnt: number
  /** 黑名单记录 */
  blacklistRecordCnt: number
  /** 职业资格证 */
  certificate: string
  /** 市 */
  city: string
  /** 学历 */
  education: string
  /** 性别 */
  gender: string
  /** 良好行为 */
  goodBehaviorCnt: number
  /** 主键 */
  id: number
  /** 标签 */
  label: string
  /** 姓名 */
  personName: string
  /** 手机号 */
  phone: string
  /** 省 */
  province: string
  /** 四库证书数量 */
  skCertificateCnt: number
  /** 职称 */
  title: string
}
export interface CustomerPersonTitleInfoResp {
  /**  客户 Id */
  customerId: number
  /** 主键 Id */
  id: number
  /** 级别 */
  level: string
  /** 专业 */
  major: string
}
export interface CustomerPersonTitleReq {
  /**  客户 Id，新增客户时不用传 */
  customerId: number
  /** 主键 Id */
  id: number
  /** 级别 */
  level: string
  /** 专业 */
  major: string
}
export interface CustomerPersonUpReq {
  /** 业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 区县 */
  area: string
  /** 执业资格证 */
  certificateList: CustomerPersonCertificateReq[]
  /** 市 */
  city: string
  /** 坐标 */
  coordinate: string
  /** 国家 */
  country: string
  /** 学历 */
  education: string
  /** 性别 */
  gender: string
  /** 主键 Id */
  id: number
  /** 标签 */
  labels: CustomerLabelReq[]
  /** 住址 */
  location: string
  /** 姓名 */
  personName: string
  /** 手机号 */
  phone: string
  /** 省份 */
  province: string
  /** 职称 */
  titleList: CustomerPersonTitleReq[]
}
export interface DelReq {
  /** 删除id */
  id: number
}
export interface DeleteReq {
  /** 删除证书id */
  id: number
}
export interface EmployeeListResp {
  /** 员工id */
  id: number
  /** 名称 */
  name: string
  /** 手机号 */
  phone: string
}
export interface EmployeeResp {
  /** 员工id */
  id: number
  /** 手机号 */
  mobile: string
  /** 员工姓名 */
  userName: string
}
export interface FailData {
  /** excel行数 */
  excelNum: number
  /** 第一列名称 */
  firstName: string
  /** 失败原因 */
  reason: string
}
export interface FollowAgainReq {
  /** 商机id */
  businessId: number
  /** 商机类型  enterprise project person */
  businessType: string
}
export interface FollowReq {
  /** 地址 */
  addr: string
  /** 商机id */
  businessId: number
  /** 商机类型  ENTERPRISE:企业商机,PERSON：人才商机,PROJECT：项目商机 */
  businessType: string
  /** 联系人id */
  contactPersonId: number
  /** 联系人名称 */
  contactPersonName: string
  /** 沟通内容 */
  content: string
  /** 坐标,经度,纬度 */
  coordinate: string
  /** 图片文件id列表 */
  fileIdList: number[]
  /** 跟进结果 HIGH：高意向,MIDDLE：中意向,LOW：低意向,NONE：无意向,UNKNOWN：意向不明 */
  followResult: string
  /** 跟进方式 PHONE：电话,WECHAT：微信,VISIT：登门拜访,OFFLINE_MEETING：线下会谈OTHER：其他 */
  followType: string
}
export interface InnerRpcCustomerEnterpriseAddReq {
  req: CustomerEnterpriseAddReq
}
export interface InnerRpcCustomerEnterpriseUpReq {
  req: CustomerEnterpriseUpReq
}
export interface InnerRpcPageContactReq {
  req: PageContactReq
}
export interface InnerRpcPageCustomerEnterpriseReq {
  req: PageCustomerEnterpriseReq
}
export interface InnerRpclong {
  req: number
}
export interface InnerRpcXinZengXiangMuShangJirpcJieKou {
  req: XinZengXiangMuShangJirpcJieKou
}
export interface PageContactReq {
  /** 关联业务id */
  enterpriseId: number
  /** 联系人名称 */
  name: string
  page: number
  size: number
}
export interface PageCustomerEnterpriseReq {
  /** 企业查询：企业名称/法人/信用代码 */
  enterprise: string
  /** 信用代码 */
  enterpriseCode: string
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态 */
  enterpriseStatus: string
  /** 成立时间结束 */
  establishmentTimeEnd: string
  /** 成立时间开始 */
  establishmentTimeStart: string
  /** 标签 */
  labelList: string[]
  /** 排序字段 sk_qualification_cnt四库资质，reg_person_cnt注册人员,sk_achievement_cnt四库业绩,score评分 */
  orderColumn: string
  /** 排序类型：1倒序，2正序 */
  orderType: number
  /** 是否是我的:true 是，false 否 */
  own: boolean
  page: number
  /** 注册资本结束 */
  registeredCapitalMax: number
  /** 注册资本开始 */
  registeredCapitalMin: number
  /** 签约/未签约：2未签约，1已签约 */
  sign: string
  size: number
}
export interface PageCustomerPersonReq {
  /** 职业资格证专业 */
  certificateMajor: string
  /** 职业资格证名称 */
  certificateName: string
  /** 标签 */
  labelList: string[]
  /** 职称 */
  level: string
  /** 职称专业 */
  major: string
  /** 排序字段:sk_certificate_cnt四库证书数量,achievement_cnt业绩,bad_behavior_cnt不良行为,ggood_behavior_cnt良好行为,blacklist_record_cnt */
  orderColumn: string
  /** 排序类型：1倒序，2正序 */
  orderType: number
  /** 是否是我的:true 是，false 否 */
  own: boolean
  page: number
  /** 人才查询 */
  person: string
  /** 姓名 */
  personName: string
  /** 电话 */
  phone: string
  /** 签约/未签约：2未签约，1已签约 */
  sign: string
  size: number
}
export interface PageEnterpriseBusinessPoolResp {
  /** 地址 */
  addr: string
  /** 商机状态  */
  businessStatus: string
  /** 坐标 */
  coordinate: string
  /** 创建时间 */
  created: string
  /** 关联客户ID */
  customerId: number
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态  存续   吊销 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否是自己 0否 1是 */
  isMyself: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 电话 */
  phone: string
  /** 注册人员数 */
  regPersonCnt: number
  /** 注册资本(单位元) */
  registeredCapital: number
  /** 评分 */
  score: number
  /** 签约记录ID */
  signId: number
  /** 四库业绩数 */
  skAchievementCnt: number
  /** 四库资质数 */
  skQualificationCnt: number
  /** 来源  雷达 公海 高级搜索 小程序历史数据 */
  source: string
  tenantId: number
}
export interface PagePersonBusinessPoolResp {
  /** 个人业绩 */
  achievementCnt: number
  /** 地址 */
  addr: string
  /** 不良行为数 */
  badBehaviorCnt: number
  /** 黑名单数 */
  blacklistRecordCnt: number
  /** 商机状态  */
  businessStatus: string
  /** 执业资格证 */
  certificateName: string
  /** 坐标 */
  coordinate: string
  /** 创建时间 */
  created: string
  /** 客户ID */
  customerId: number
  /** 客户手机号 */
  customerMobile: string
  /** 客户手机号 */
  customerName: string
  /** 学历 */
  education: string
  /** 跟进人id */
  followerId: number
  /** 性别 男 女 */
  gender: string
  /** 良好行为数 */
  goodBehaviorCnt: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否是自己 0否 1是 */
  isMyself: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 客户id */
  licenseId: string
  /** 人才名称 */
  personName: string
  /** 人员风险  0无风险 1有风险 */
  personnelRisk: number
  /** 电话 */
  phone: string
  /** 签约记录ID */
  signId: number
  /** 四库证书数 */
  skCertificateCnt: number
  /** 来源  雷达 公海 高级搜索 小程序历史数据 */
  source: string
  tenantId: number
  /** 职称 */
  title: string
}
export interface PageProjectBusinessPoolResp {
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 投标结束时间 */
  biddingEndTime: string
  /** 开标时间 */
  biddingOpeningTime: string
  /** 投标开始时间 */
  biddingStartTime: string
  /** 招标类型 all:全部,public:公开招标,invite:邀请招标),inquiry:询价,single:单一来源,negotiation:竞争性谈判,consultation :竞争性磋商,bidding：竞价 */
  biddingType: string
  /** 商机状态  */
  businessStatus: string
  /** 坐标 */
  coordinate: string
  /** 创建时间 */
  created: string
  /** 关联客户ID */
  customerId: number
  /** 文件下载结束时间 */
  fileDownloadEndTime: string
  /** 文件下载开始时间 */
  fileDownloadStartTime: string
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否是自己 0否 1是 */
  isMyself: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 电话 */
  phone: string
  /** 招标预算 */
  projectBudget: number
  /** 项目名称 */
  projectName: string
  /** 项目类型 */
  projectType: string
  /** 签约记录ID */
  signId: number
  /** 来源  雷达 公海 高级搜索 小程序历史数据 */
  source: string
  tenantId: number
}
export interface PostDTO {
  channel: string
  date: string
}
export interface ProjectSignInfoResp {
  /** 申请人ID */
  applyUserId: number
  /** 申请人名称 */
  applyUserName: string
  /** 所属公司 */
  belongCompany: string
  /** 所属公司ID */
  belongCompanyId: number
  /** 投标结束时间 */
  bidEndDate: string
  /** 开标时间 */
  bidOpenDate: string
  /** 投标开始时间 */
  bidStartDate: string
  /** 招标代理机构ID */
  biddingAgencyId: number
  /** 招标代理机构名称 */
  biddingAgencyName: string
  /** 商机状态 */
  businessStatus: string
  /** 招标平台id */
  cainfoId: string
  /** 招标平台名称 */
  cainfoName: string
  /** 市 */
  city: string
  /** 区 */
  county: string
  /** 客户ID */
  customerId: number
  /** 客户名称 */
  customerName: string
  /** 是否投标项目 */
  isBid: boolean
  /** 是否预立项 */
  isPreApproval: boolean
  /** 项目类型id（一级） */
  paramsOneId: number
  /** 项目类型名称（一级） */
  paramsOneName: string
  /** 项目名称 */
  projectName: string
  /** 省 */
  province: string
  /** 街道 */
  street: string
  /** 模版ID */
  templateId: number
  /** 模版名称 */
  templateName: string
  /** 乡镇 */
  township: string
}
export interface ReceiveBusinessReq {
  /** 商机列表 */
  businessList: object[]
  /** 商机来源 雷达:radar 雷达:create 公海:open_sea 高级搜索:advanced_search 重复列表:bigdata_search */
  businessReceiveSource: string
  /** 商机类型 ENTERPRISE PROJECT PERSON */
  businessType: string
}
export interface SignResultReq {
  /** CRM签约记录ID */
  crmSignId: number
  /** 邀请人员工ID */
  inviter: number
  /** 职务，多个用英文逗号拼接 */
  job: string
  /** 手机号 */
  mobile: string
  /** 岗位，多个用英文逗号拼接 */
  post: string
  /** 处理结果状态 SUCCESS:入职成功,FAIL:入职失败,EXPIRED:过期 */
  state: string
}
export interface TreeNodeConfig {
  childrenKey: string
  deep: number
  idKey: string
  nameKey: string
  parentIdKey: string
  weightKey: string
}
export interface VerifyRepeatBusinessReq {
  /** 商机类型  ENTERPRISE  PERSON  PROJECT */
  businessType: string
  /** 代码 */
  code: string
  /** 名称 */
  name: string
}
export interface ShangChuanWenJianFanHui {
  /** 生成的文件访问链接 */
  fileUrl: string
  /** 上传文件id */
  id: number
}
export interface BuZaiGenJin {
  /** 商机id */
  businessId: number
  /** 商机类型 ENTERPRISE:企业商机 PERSON:人才商机 PROJECT:项目商机 */
  businessType: string
  /** 流转方式,BACK:放回,INVALID:无效 */
  flowType: string
  /** 不再跟进理由 */
  noFollowReason: string
}
export interface QiYeShangJiXiangQingrpcresponse {
  /** 企业地址 */
  addr: string
  /** 行业名称 */
  categoryName: string
  /** 联系人电话 */
  contactMobile: string
  /** 联系人姓名 */
  contactName: string
  /** 法人名称 */
  corporateName: string
  /** 企业信用代码 */
  enterpriseCode: string
  /** 企业商机ID */
  enterpriseId: number
  /** 企业名称 */
  enterpriseName: string
  /** 企业状态  存续   吊销 */
  enterpriseStatus: string
  /** 成立时间 */
  establishmentTime: string
  /** 跟进人ID */
  followerId: number
  /** 跟进人名称 */
  followerName: string
  /** 企业电话 */
  phone: string
  /** 注册人员数 */
  regPersonCnt: number
  /** 注册资本(单位元) */
  registeredCapital: number
  /** 评分 */
  score: number
  /** 四库业绩数 */
  skAchievementCnt: number
  /** 四库资质数 */
  skQualificationCnt: number
}
export interface GuanLianShangJiRequest {
  /** 商机ID */
  businessId: number
  /** 商机类型  enterprise project person */
  businessType: string
  /** 三方信息ID */
  thirdId: number
}
export interface GuanLianShangJiResponse {
}
export interface FenYeChaXunRenCaiShangJiresponseJianDanShuJu {
  /** 商机状态  */
  businessStatus: string
  /** 坐标 */
  coordinate: string
  /** 创建时间 */
  created: string
  /** 关联客户ID */
  customerId: number
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否是自己 0否 1是 */
  isMyself: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 人才名称 */
  personName: string
  /** 签约记录ID */
  signId: number
  /** 来源  雷达 公海 高级搜索 小程序历史数据 */
  source: string
  tenantId: number
}
export interface FenYeChaXunRenCaiShangJiJianDanShuJu {
  /** 商机状态 all:全部  1:已签约  2:未签约 */
  businessStatus: string
  /** 客户id */
  customerId: number
  /** 客户类型 ENTERPRISE：企业客户 PERSON：人才客户 */
  customerType: string
  /** 人才名称 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  size: number
  /** 查询类型 1：我的商机 2：公海，9:全部（不限制跟进人） */
  type: number
}
export interface FenYeChaXunRenCaiShangJiGongHai {
  /** 商机状态 all:全部  1:已签约  2:未签约 */
  businessStatus: string
  /** 执业资格证专业 */
  certificateMajor: string
  /** 执业资格证名称 */
  certificateName: string
  /** 客户id */
  customerId: number
  /** 客户类型 ENTERPRISE：企业客户 PERSON：人才客户 */
  customerType: string
  /** 职称 */
  level: string
  /** 职称专业 */
  major: string
  /** 主查询 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  size: number
  /** 查询类型 1：我的商机 2：公海，9:全部（不限制跟进人） */
  type: number
}
export interface FenYeChaXunRenCaiShangJiTuiJian {
  /** 执业资格证专业 */
  certificateMajor: string
  /** 执业资格证名称 */
  certificateName: string
  /** 职称 */
  level: string
  /** 职称专业 */
  major: string
  /** 主查询 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  /** 人员风险 true:有风险，false:人员风险 */
  personnelRisk: boolean
  size: number
  /** 查询类型 1：今日 2：历史 */
  type: number
}
export interface FenYeChaXunQiYeShangJiresponseJianDanShuJu {
  /** 商机状态  */
  businessStatus: string
  /** 坐标 */
  coordinate: string
  /** 创建时间 */
  created: string
  /** 关联客户ID */
  customerId: number
  /** 企业名称 */
  enterpriseName: string
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否是自己 0否 1是 */
  isMyself: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 签约记录ID */
  signId: number
  /** 来源  雷达 公海 高级搜索 小程序历史数据 */
  source: string
  tenantId: number
}
export interface FenYeChaXunQiYeShangJiJianDanShuJu {
  /** 企业名称 */
  name: string
  page: number
  size: number
}
export interface FenYeChaXunQiYeShangJiGongHai {
  /** 商机状态 all:全部  1:已签约  2:未签约 */
  businessStatus: string
  /** 客户id */
  customerId: number
  /** 客户类型 ENTERPRISE：企业客户 PERSON：人才客户 */
  customerType: string
  /** 成立结束时间 */
  endTime: string
  /** 企业状态  */
  enterpriseStatus: string
  /** 主查询 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  /** 注册资本最大值 */
  registeredCapitalMax: number
  /** 注册资本最小值 */
  registeredCapitalMin: number
  size: number
  /** 成立开始时间 */
  startTime: string
  /** 查询类型 1：我的商机 2：公海，9:全部（不限制跟进人） */
  type: number
}
export interface FenYeChaXunQiYeShangJiTuiJian {
  /** 成立结束时间 */
  endTime: string
  /** 企业状态  */
  enterpriseStatus: string
  /** 主查询 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  /** 注册资本最大值 */
  registeredCapitalMax: number
  /** 注册资本最小值 */
  registeredCapitalMin: number
  size: number
  /** 成立开始时间 */
  startTime: string
  /** 查询类型 1：今日 2：历史 */
  type: number
}
export interface FenYeChaXunXiangMuShangJiresponseJianDanShuJu {
  /** 商机状态  */
  businessStatus: string
  /** 坐标 */
  coordinate: string
  /** 创建时间 */
  created: string
  /** 关联客户ID */
  customerId: number
  /** 跟进人id */
  followerId: number
  /** 是否有客户 企业和人才使用 */
  hasCustomer: boolean
  id: number
  /** 是否是自己 0否 1是 */
  isMyself: number
  /** 是否阅读 */
  isRead: number
  /** 最近获取时间 */
  lastFetchTime: string
  /** 最近跟进时间 */
  lastFollowTime: string
  /** 项目名称 */
  projectName: string
  /** 签约记录ID */
  signId: number
  /** 来源  雷达 公海 高级搜索 小程序历史数据 */
  source: string
  tenantId: number
}
export interface FenYeChaXunXiangMuShangJiJianDanShuJu {
  /** 商机状态 all:全部  1:已签约  2:未签约 */
  businessStatus: string
  /** 客户id */
  customerId: number
  /** 客户类型 ENTERPRISE：企业客户 PERSON：人才客户 */
  customerType: string
  /** 项目名称 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  size: number
  /** 查询类型 1：我的商机 2：公海，9:全部（不限制跟进人） */
  type: number
}
export interface FenYeChaXunXiangMuShangJiTuiJian {
  /** 招标类型 */
  biddingType: string
  /** 主查询 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  size: number
  /** 查询类型 1：今日 2：历史 */
  type: number
}
export interface LieBiaoQingQiu {
  /** 地址 */
  addr: string
  /** 商机id */
  businessId: number
  /** 商机状态 */
  businessStatus: string
  /** 商机类型 */
  businessType: string
  /** 联系人id */
  contactPersonId: number
  /** 联系人名称 */
  contactPersonName: string
  /** 沟通内容 */
  content: string
  /** 坐标,经度-纬度 */
  coordinate: string
  /** 跟进结果 */
  followResult: string
  /** 跟进时间 */
  followTime: string
  /** 跟进方式 PHONE：电话,WECHAT：微信,VISIT：登门拜访,OFFLINE_MEETING：线下会谈OTHER：其他 */
  followType: string
  /** 跟进人 */
  follower: string
  /** 图片列表 */
  imageUrlList: string[]
}
export interface LieBiaoQingQiu0 {
  /** 商机id */
  businessId: number
  /** 商机类型 */
  businessType: string
  /** 跟进类型 FOLLOW:跟进 TRANSFER:转让,BACK:放回,INVALID:无效 */
  flowType: string[]
  page: number
  size: number
}
export interface YuanGongLieBiaoQingQiu {
  page: number
  size: number
  /** 姓名 */
  userName: string
}
export interface DaoRuLieBiaoXiangYing {
  /** 失败数据 */
  failData: FailData[]
  /** 失败数 */
  failNum: number
  /** 文件名称 */
  fileName: string
  /** 文件链接 为空则为已失效 */
  fileUrl: string
  /** 导入时间 */
  importTime: string
  /** 操作人 */
  operator: string
  page: number
  size: number
  /** 状态 1：进行中 2：已结束  3：发生异常 */
  status: number
  /** 成功数 */
  successNum: number
}
export interface DaoRuLieBiaoQingQiu {
  /** 结束时间 */
  endTime: string
  page: number
  size: number
  /** 开始时间 */
  startTime: string
  /** 业务类型 1:企业商机 2:人才商机 3:项目商机 4:企业客户 5:个人客户 */
  taskType: number
}
export interface SouSuoRenCaiKeHurequest {
  page: number
  /** 人才名称 */
  personName: string
  size: number
}
export interface SouSuoRenCaiKeHuresponse {
  /** 人才ID */
  id: number
  /** 人才名称 */
  personName: string
}
export interface SouSuoQiYeKeHurequest {
  /** 企业名称 */
  enterpriseName: string
  page: number
  size: number
}
export interface SouSuoQiYeKeHuresponse {
  /** 企业名称 */
  enterpriseName: string
  /** 主键 ID */
  id: number
}
export interface CaoZuoRiZhiFenYerequest {
  /** 业务ID */
  bizId: number
  /** 业务类型 */
  bizType: string
  page: number
  size: number
}
export interface CaoZuoRiZhiFenYeresponse {
  /** 操作内容 */
  content: string
  /** 日志ID */
  logId: number
  /** 操作时间 */
  operateTime: string
  /** 操作类型 */
  operateType: string
  /** 操作人 */
  operator: string
}
export interface XinZengXiangMuShangJirpcJieKou {
  /** 代理机构 */
  agencies: string
  /** 代理机构地址 */
  agenciesAddr: string
  /** 代理机构地址坐标 */
  agenciesAddrCoordinate: string
  /** 招标单位地址纬度 */
  agenciesAddrLat: string
  /** 招标单位地址经度 */
  agenciesAddrLng: string
  /** 代理机构区县 */
  agenciesArea: string
  /** 代理机构城市 */
  agenciesCity: string
  /** 代理机构国家 */
  agenciesCountry: string
  /** 代理机构电话 */
  agenciesPhone: string
  /** 代理机构省份 */
  agenciesProvince: string
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位地址坐标 */
  biddingCorpAddrCoordinate: string
  /** 招标单位地址纬度 */
  biddingCorpAddrLat: string
  /** 招标单位地址经度 */
  biddingCorpAddrLng: string
  /** 招标单位区县 */
  biddingCorpArea: string
  /** 招标单位城市 */
  biddingCorpCity: string
  /** 招标单位国家 */
  biddingCorpCountry: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 招标单位省份 */
  biddingCorpProvince: string
  /** 投标结束时间 */
  biddingEndTime: string
  /** 开标时间 */
  biddingOpeningTime: string
  /** 投标开始时间 */
  biddingStartTime: string
  /** 招标类型 */
  biddingType: string
  /** 文件下载结束时间 */
  fileDownloadEndTime: string
  /** 文件下载开始时间 */
  fileDownloadStartTime: string
  /** 行业类型 */
  industryType: string
  /** 项目联系方式 */
  phone: string
  /** 招标预算 */
  projectBudget: number
  /** 项目名称 */
  projectName: string
  /** 项目编码 */
  projectNum: string
  /** 项目类型 */
  projectType: string
}
export interface TianJiaLianXiRenQingQiu {
  /** 联系人姓名 */
  name: string
  /** 关联业务id */
  relId: number
  /** 联系人关联类型 1:企业商机 2:人才商机 3:项目商机 4:企业客户 5:个人客户 */
  relType: number
  /** 备注 */
  remark: string
  /** 联系方式 1：电话 2：邮箱 3：微信 */
  type: number
  /** 联系号码 */
  value: string
}
export interface QianYueRequest {
  /** 商机ID */
  businessId: number
  /** 商机来源 */
  businessSource: string
  /** 商机类型 */
  businessType: string
  /** 客户ID */
  customerId: number
  /** 客户类型 */
  customerType: string
  /** 雷达商机ID */
  radarBusinessId: number
  /** 签约类型 */
  signType: string
}
export interface QianYueJieGuoresponse {
  /** 商机ID */
  businessId: number
  /** 手机号 */
  mobile: string
  /** 签约记录ID */
  signId: number
}
export interface QianYueJiLuFenYerequest {
  /** 商机ID */
  businessId: number
  /** 客户ID */
  customerId: number
  page: number
  size: number
}
export interface QianYueJiLuFenYeresponse {
  /** 商机ID */
  businessId: number
  /** 商机名称 */
  businessName: string
  /** 商机类型 */
  businessType: string
  /** 成交内容 */
  content: string
  /** 创建时间 */
  created: string
  /** 客户ID */
  customerId: number
  /** 客户类型 */
  customerType: string
  /** 成交时间 */
  dealTime: string
  /** 成交方式 */
  dealType: string
  /** 负责人 */
  handler: string
  /** 负责人 */
  handlerId: number
  /** 签约记录ID */
  id: number
  /** 进度 */
  schedule: string
  /** 签约类型 */
  signingType: string
  /** 三方ID */
  thirdId: number
}
export interface LianXiRenLieBiao {
  /** 添加日期 */
  addDate: string
  /** 添加人 */
  addName: string
  /** 联系人id */
  id: number
  /** 联系人姓名 */
  name: string
  /** 备注 */
  remark: string
  /** 联系方式 1：电话 2：邮箱 3：微信 */
  type: number
  /** 联系号码 */
  value: string
}
export interface LianXiRenLieBiaoQingQiu {
  /** 联系人名称 */
  name: string
  page: number
  /** 关联业务id */
  relId: number
  /** 联系人关联类型 1:企业商机 2:人才商机 3:项目商机 4:企业客户 5:个人客户 */
  relType: number
  size: number
  /** 联系人类型 */
  type: number
}
export interface JieChuQianYuerequest {
  /** 商机ID */
  businessId: number
  /** 商机类型 */
  businessType: string
}
export interface DuRuWenJianXiangYing {
  /** id */
  id: number
}
export interface ZhuanRangQingQiu {
  /** 商机id */
  businessId: number[]
  /** 商机类型 ENTERPRISE:企业商机,PERSON：人才商机,PROJECT：项目商机 */
  businessType: string
  /** 转让跟进者id */
  followerId: number
  /** 转让者名称 */
  followerName: string
}
export interface XiangMuShangJiXiuGairpcrequest {
  /** 代理机构 */
  agencies: string
  /** 代理机构地址 */
  agenciesAddr: string
  /** 代理机构地址坐标 */
  agenciesAddrCoordinate: string
  /** 招标单位地址纬度 */
  agenciesAddrLat: string
  /** 招标单位地址经度 */
  agenciesAddrLng: string
  /** 代理机构区县 */
  agenciesArea: string
  /** 代理机构城市 */
  agenciesCity: string
  /** 代理机构国家 */
  agenciesCountry: string
  /** 代理机构电话 */
  agenciesPhone: string
  /** 代理机构省份 */
  agenciesProvince: string
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位地址坐标 */
  biddingCorpAddrCoordinate: string
  /** 招标单位地址纬度 */
  biddingCorpAddrLat: string
  /** 招标单位地址经度 */
  biddingCorpAddrLng: string
  /** 招标单位区县 */
  biddingCorpArea: string
  /** 招标单位城市 */
  biddingCorpCity: string
  /** 招标单位国家 */
  biddingCorpCountry: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 招标单位省份 */
  biddingCorpProvince: string
  /** 投标结束时间 */
  biddingEndTime: string
  /** 开标时间 */
  biddingOpeningTime: string
  /** 投标开始时间 */
  biddingStartTime: string
  /** 招标类型 */
  biddingType: string
  /** 文件下载结束时间 */
  fileDownloadEndTime: string
  /** 文件下载开始时间 */
  fileDownloadStartTime: string
  /** 行业类型 */
  industryType: string
  /** 项目联系方式 */
  phone: string
  /** 招标预算 */
  projectBudget: number
  /** 项目商机ID */
  projectId: number
  /** 项目名称 */
  projectName: string
  /** 项目编码 */
  projectNum: string
  /** 项目类型 */
  projectType: string
}
export interface XiangMuShangJiGongHaiChaXun {
  /** 招标类型 */
  biddingType: string
  /** 商机状态 all:全部  1:已签约  2:未签约 */
  businessStatus: string
  /** 客户id */
  customerId: number
  /** 客户类型 ENTERPRISE：企业客户 PERSON：人才客户 */
  customerType: string
  /** 主查询 */
  name: string
  /** 排序字段 字段参数名 */
  orderColumn: string
  /** 排序规则 1：倒叙,2：正序 */
  orderType: number
  page: number
  size: number
  /** 查询类型 1：我的商机 2：公海，9:全部（不限制跟进人） */
  type: number
}
export interface XiangMuShangJiFenYeChaXunrpcrequest {
  page: number
  projectName: string
  size: number
}
export interface XiangMuShangJiXiangQingrpcresponse {
  /** 代理机构 */
  agencies: string
  /** 代理机构地址 */
  agenciesAddr: string
  /** 代理机构电话 */
  agenciesPhone: string
  /** 招标单位地址 */
  biddingCorpAddr: string
  /** 招标单位名称 */
  biddingCorpName: string
  /** 招标单位电话 */
  biddingCorpPhone: string
  /** 投标时间 */
  biddingTime: string
  /** 招标类型 */
  biddingType: string
  /** 行业类型 */
  industryType: string
  /** 联系方式 */
  phone: string
  /** 招标预算(元) */
  projectBudget: number
  /** 项目id */
  projectId: number
  /** 项目名称 */
  projectName: string
  /** 项目编码 */
  projectNum: string
  /** 项目类型 */
  projectType: string
}
