export interface AddBusinessEnterpriseReq {
  /**企业地址*/
  addr: string
  /**商机类型 ENTERPRISE PERSON PROJECT*/
  businessType: string
  /**行业名称*/
  categoryName: string
  /**坐标*/
  coordinate: string
  /**法人名称*/
  corporateName: string
  createId: number
  createName: string
  created: string
  /**企业信用代码*/
  enterpriseCode: string
  /**企业名称*/
  enterpriseName: string
  /**企业状态*/
  enterpriseStatus: string
  /**成立时间*/
  establishmentTime: string
  id: number
  isDelete: number
  /**工商信息id*/
  licenseId: number
  modified: string
  /**电话*/
  phone: string
  /**注册人员数*/
  regPersonCnt: number
  /**注册资本*/
  registeredCapital: number
  /**四库业绩数*/
  skAchievementCnt: number
  /**四库资质数*/
  skQualificationCnt: number
  /**步骤   1需要验证  2直接新增*/
  step: number
  /**三方id*/
  thirdId: number
  updateId: number
  updateName: string
}
export interface AddBusinessPersonCertificateReq {
  /**证书专业*/
  major: string
  /**证书名称*/
  name: string
}
export interface AddBusinessPersonReq {
  /**个人业绩*/
  achievementCnt: number
  /**地址*/
  addr: string
  /**商机类型 ENTERPRISE PERSON PROJECT*/
  businessType: string
  /**执业资格证列表*/
  certificateList: AddBusinessPersonCertificateReq[]
  /**坐标*/
  coordinate: string
  createId: number
  createName: string
  created: string
  /**学历*/
  education: string
  /**性别 男 女*/
  gender: string
  id: number
  isDelete: number
  /**工商信息id*/
  licenseId: number
  modified: string
  /**人才名称*/
  personName: string
  /**手机号*/
  phone: string
  /**步骤   1需要验证  2直接新增*/
  step: number
  /**三方id*/
  thirdId: number
  /**职称列表*/
  titleList: AddBusinessPersonTitleReq[]
  updateId: number
  updateName: string
}
export interface AddBusinessPersonTitleReq {
  /**职称级别*/
  level: string
  /**职称专业*/
  major: string
}
export interface AddBusinessProjectReq {
  /**代理机构*/
  agencies: string
  /**代理机构地址*/
  agenciesAddr: string
  /**代理机构电话*/
  agenciesPhone: string
  /**招标单位地址*/
  biddingCorpAddr: string
  /**招标单位名称*/
  biddingCorpName: string
  /**招标单位电话*/
  biddingCorpPhone: string
  /**招标类型*/
  biddingType: string
  /**商机类型 ENTERPRISE PERSON PROJECT*/
  businessType: string
  /**坐标*/
  coordinate: string
  createId: number
  createName: string
  created: string
  /**文件下载时间*/
  fileDownloadTime: string
  id: number
  /**行业类型*/
  industryType: number
  isDelete: number
  /**工商信息id*/
  licenseId: number
  modified: string
  /**项目联系方式*/
  phone: string
  /**招标预算*/
  projectBudget: number
  /**项目名称*/
  projectName: string
  /**项目编码*/
  projectNum: string
  /**项目类型*/
  projectType: string
  /**步骤   1需要验证  2直接新增*/
  step: number
  /**三方id*/
  thirdId: number
  updateId: number
  updateName: string
}
export interface AddBusinessReq {
  /**商机类型 ENTERPRISE PERSON PROJECT*/
  businessType: string
  /**坐标*/
  coordinate: string
  createId: number
  createName: string
  created: string
  id: number
  isDelete: number
  modified: string
  /**步骤   1需要验证  2直接新增*/
  step: number
  updateId: number
  updateName: string
}
export interface AddBusinessResp {
  id: number
  /**重复校验的列表*/
  list: object[]
}
export interface ResOfWygtechcrmApiBusinessEditBusinessEnterprise {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessEditBusinessPerson {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessEditBusinessProject {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerEnterpriseAdd {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerEnterpriseUpdate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonAdd {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonAddCertificate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonAddTitle {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonDeleteCertificate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonDeleteTitle {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonUpdate {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessAddBusinessEnterprise {
  code: number
  data: AddBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessAddBusinessPerson {
  code: number
  data: AddBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessAddBusinessProject {
  code: number
  data: AddBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessVerifyRepeatBusiness {
  code: number
  data: AddBusinessResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessEnterpriseInfo {
  code: number
  data: BusinessEnterpriseInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessPersonInfo {
  code: number
  data: BusinessPersonInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessProjectInfo {
  code: number
  data: BusinessProjectInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessAssignBusiness {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessReceiveAndCreateBusiness {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessReceiveBusiness {
  code: number
  data: BusinessReceiveResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerEnterprisePageList {
  code: number
  data: ComPageCustomerEnterpriseInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonPageList {
  code: number
  data: ComPageCustomerPersonInfoResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessFollowEmployeeList {
  code: number
  data: ComPageEmployeeListResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessPageEnterpriseBusinessPool {
  code: number
  data: ComPagePageEnterpriseBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessPagePersonBusinessPool {
  code: number
  data: ComPagePagePersonBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessPageProjectBusinessPool {
  code: number
  data: ComPagePageProjectBusinessPoolResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessFollowList {
  code: number
  data: ComPageLieBiaoQingQiu
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiImportTaskImportList {
  code: number
  data: ComPageDaoRuLieBiaoXiangYing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessPersonSearch {
  code: number
  data: ComPageSouSuoGuanLianRenCaiShangJi response
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessEnterpriseSearch {
  code: number
  data: ComPageSouSuoGuanLianQiYeShangJi response
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessProjectSearch {
  code: number
  data: ComPageSouSuoGuanLianXiangMuShangJi response
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiOperateLogPageList {
  code: number
  data: ComPageCaoZuoRiZhiFenYe response
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiSigningPageList {
  code: number
  data: ComPageQianYueJiLuFenYe response
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessContactList {
  code: number
  data: ComPageLianXiRenLieBiao
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerEnterpriseDetail {
  code: number
  data: CustomerEnterpriseDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonDetail {
  code: number
  data: CustomerPersonDetailResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessEnterpriseGet {
  code: number
  data: EnterpriseResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiConfigGetPersonTitleLabel {
  code: number
  data: object[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerPersonSearch {
  code: number
  data: SouSuoRenCaiKeHu response[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiCustomerEnterpriseSearch {
  code: number
  data: SouSuoQiYeKeHu response[]
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessPersonGet {
  code: number
  data: PersonResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessProjectGet {
  code: number
  data: ProjectResp
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiSigningRemove {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiSigningSave {
  code: number
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessContactAdd {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessContactDeleteById {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessFollowFollow {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessFollowFollowAgain {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessFollowGiveUp {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessFollowTransfer {
  code: number
  data: boolean
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiTestCheck {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiTestLogin {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiTestUuid {
  code: number
  data: object
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiFileUploadFile {
  code: number
  data: ShangChuanWenJianFanHui
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiBusinessLink {
  code: number
  data: GuanLianShangJi Response
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface ResOfWygtechcrmApiImportTaskImportExcel {
  code: number
  data: DuRuWenJianXiangYing
  msg: string
  success: boolean
  timestamp: number
  traceId: string
}
export interface AssignBusinessReq {
  /**商机类型 enterprise project person*/
  businessType: string
  /**跟进人id*/
  followerId: number
  /**列表id*/
  ids: number[]
}
export interface BasePageReq {
  page: number
  size: number
}
export interface BusinessEnterpriseInfoResp {
  /**地址*/
  addr: string
  /**商机状态 */
  businessStatus: string
  /**行业名称*/
  categoryName: string
  /**坐标*/
  coordinate: string[]
  /**法人名称*/
  corporateName: string
  /**创建时间*/
  created: number
  /**客户id*/
  customerId: number
  /**企业信用代码*/
  enterpriseCode: string
  /**企业名称*/
  enterpriseName: string
  /**企业状态  存续   吊销*/
  enterpriseStatus: string
  /**成立时间*/
  establishmentTime: string
  /**跟进人id*/
  followId: number
  id: number
  /**是否阅读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: number
  /**工商信息id*/
  licenseId: number
  /**电话*/
  phone: string
  /**注册人员数*/
  regPersonCnt: number
  /**注册资本(单位元)*/
  registeredCapital: number
  /**评分*/
  score: number
  /**四库业绩数*/
  skAchievementCnt: number
  /**四库资质数*/
  skQualificationCnt: number
  /**来源 */
  source: string
  tenantId: number
  /**三方id*/
  thirdId: number
}
export interface BusinessPersonCertificateResp {
  /**添加人*/
  createName: string
  /**添加时间*/
  created: string
  /**专业*/
  major: string
  /**证书名称*/
  name: string
  /**是否注册*/
  registered: string
}
export interface BusinessPersonInfoResp {
  /**个人业绩*/
  achievementCnt: number
  /**地址*/
  addr: string
  /**不良行为数*/
  badBehaviorCnt: number
  /**黑名单数*/
  blacklistRecordCnt: number
  /**商机状态 */
  businessStatus: string
  /**执业资格证*/
  certificateList: BusinessPersonCertificateResp[]
  /**坐标*/
  coordinate: string[]
  /**创建时间*/
  created: number
  /**客户id*/
  customerId: number
  /**学历*/
  education: string
  /**跟进人id*/
  followId: number
  /**性别 男 女*/
  gender: string
  /**良好行为数*/
  goodBehaviorCnt: number
  id: number
  /**是否阅读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: number
  /**工商信息id*/
  licenseId: number
  /**人才名称*/
  personName: string
  /**电话*/
  phone: string
  /**四库证书数*/
  skCertificateCnt: number
  /**来源*/
  source: string
  tenantId: number
  /**三方id*/
  thirdId: number
  /**职称*/
  titleList: BusinessPersonTitleResp[]
}
export interface BusinessPersonTitleResp {
  /**级别*/
  level: string
  /**专业*/
  major: string
}
export interface BusinessProjectInfoResp {
  /**代理机构*/
  agencies: string
  /**代理机构地址*/
  agenciesAddr: string
  /**代理机构电话*/
  agenciesPhone: string
  /**招标单位地址*/
  biddingCorpAddr: string
  /**招标单位名称*/
  biddingCorpName: string
  /**招标单位电话*/
  biddingCorpPhone: string
  /**投标时间*/
  biddingTime: number
  /**商机状态 */
  businessStatus: string
  /**坐标*/
  coordinate: string[]
  /**创建时间*/
  created: number
  /**客户id*/
  customerId: number
  /**文件下载时间*/
  fileDownloadTime: number
  /**跟进人id*/
  followId: number
  id: number
  /**是否阅读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: number
  /**工商信息id*/
  licenseId: number
  /**电话*/
  phone: string
  /**招标预算(单位元)*/
  projectBudget: number
  /**项目名称*/
  projectName: string
  /**项目编码*/
  projectNum: string
  /**项目类型*/
  projectType: string
  /**来源 */
  source: string
  tenantId: number
  /**三方id*/
  thirdId: number
  /**原网页url*/
  webPageUrl: string
}
export interface BusinessReceiveResp {
  /**失败数量*/
  failCnt: number
  /**领取人姓名*/
  receiveName: string
  /**成功数量*/
  successCnt: number
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
export interface ComPageSouSuoGuanLianRenCaiShangJi response {
  current: number
  records: SouSuoGuanLianRenCaiShangJi response[]
  size: number
  total: number
}
export interface ComPageSouSuoGuanLianQiYeShangJi response {
  current: number
  records: SouSuoGuanLianQiYeShangJi response[]
  size: number
  total: number
}
export interface ComPageSouSuoGuanLianXiangMuShangJi response {
  current: number
  records: SouSuoGuanLianXiangMuShangJi response[]
  size: number
  total: number
}
export interface ComPageCaoZuoRiZhiFenYe response {
  current: number
  records: CaoZuoRiZhiFenYe response[]
  size: number
  total: number
}
export interface ComPageQianYueJiLuFenYe response {
  current: number
  records: QianYueJiLuFenYe response[]
  size: number
  total: number
}
export interface ComPageLianXiRenLieBiao {
  current: number
  records: LianXiRenLieBiao[]
  size: number
  total: number
}
export interface Comparable {
}
export interface CustomerEnterpriseAddReq {
  /**地址*/
  address: string
  /**区县*/
  area: string
  /**市*/
  city: string
  /**坐标*/
  coordinate: string
  /**国家*/
  country: string
  /**企业信用代码*/
  creditCode: string
  /**所属行业*/
  industry: string
  /**标签*/
  labels: string[]
  /**企业法人*/
  legalPerson: string
  /**住址*/
  location: string
  /**企业名称*/
  name: string
  /**四库业绩*/
  performance: number
  /**联系电话*/
  phone: string
  /**省份*/
  province: string
  /**四库资质*/
  qualifications: number
  /**注册资金*/
  registeredCapital: number
  /**注册人员*/
  registeredMember: number
  /**成立时间*/
  registeredTime: string
}
export interface CustomerEnterpriseDetailResp {
  /**地址*/
  address: string
  /**创建人*/
  createName: string
  /**创建时间*/
  created: string
  /**企业信用代码*/
  creditCode: string
  /**所属行业*/
  industry: string
  /**标签*/
  labels: CustomerLabelResp[]
  /**企业法人*/
  legalPerson: string
  /**企业名称*/
  name: string
  /**联系电话*/
  phone: string
  /**注册资金*/
  registeredCapital: number
  /**成立时间*/
  registeredTime: string
}
export interface CustomerEnterpriseInfoResp {
  /**地址*/
  address: string
  /**主键Id*/
  id: number
  /**标签*/
  label: string
  /**企业名称*/
  name: string
  /**四库业绩*/
  performance: number
  /**联系电话*/
  phone: string
  /**四库资质*/
  qualifications: number
  /**注册资金*/
  registeredCapital: number
  /**注册人员*/
  registeredMember: number
  /**成立时间*/
  registeredTime: string
  /**评分*/
  score: number
  /**企业状态*/
  status: string
}
export interface CustomerEnterpriseUpReq {
  /**地址*/
  address: string
  /**区县*/
  area: string
  /**市*/
  city: string
  /**坐标*/
  coordinate: string
  /**国家*/
  country: string
  /**企业信用代码*/
  creditCode: string
  /**主键 Id*/
  id: number
  /**所属行业*/
  industry: string
  /**标签*/
  labels: CustomerLabelReq[]
  /**企业法人*/
  legalPerson: string
  /**住址*/
  location: string
  /**企业名称*/
  name: string
  /**四库业绩*/
  performance: number
  /**联系电话*/
  phone: string
  /**省份*/
  province: string
  /**四库资质*/
  qualifications: number
  /**注册资金*/
  registeredCapital: number
  /**注册人员*/
  registeredMember: number
  /**成立时间*/
  registeredTime: string
}
export interface CustomerLabelReq {
  /**标签主键 Id*/
  id: number
  /**标签名称*/
  labelName: string
}
export interface CustomerLabelResp {
  /**主键 Id*/
  id: number
  /**标签名称*/
  labelName: string
}
export interface CustomerPersonAddReq {
  /**地址*/
  address: string
  /**区县*/
  area: string
  /**执业资格证*/
  certificateList: CustomerPersonCertificateReq[]
  /**市*/
  city: string
  /**坐标*/
  coordinate: string
  /**国家*/
  country: string
  /**学历*/
  education: string
  /**邮箱*/
  email: string
  /**标签*/
  labels: string[]
  /**住址*/
  location: string
  /**姓名*/
  name: string
  /**手机号*/
  phone: string
  /**省份*/
  province: string
  /**性别*/
  sex: string
  /**职称*/
  titleList: CustomerPersonTitleReq[]
}
export interface CustomerPersonCertificateInfoResp {
  /**创建人*/
  createName: string
  /**创建时间*/
  created: string
  /** 客户 Id*/
  customerId: number
  /**主键 Id*/
  id: number
  /**专业*/
  major: string
  /**证书名称*/
  name: string
  /**是否注册*/
  registered: string
}
export interface CustomerPersonCertificateReq {
  /** 客户 Id，新增客户时不用传*/
  customerId: number
  /**专业*/
  major: string
  /**证书名称*/
  name: string
}
export interface CustomerPersonDetailResp {
  /**地址*/
  address: string
  /**职业类型*/
  careerType: string
  /**执业资格证*/
  certificateList: CustomerPersonCertificateInfoResp[]
  /**创建人*/
  createName: string
  /**创建时间*/
  created: string
  /**学历*/
  education: string
  /**标签*/
  labels: CustomerLabelResp[]
  /**姓名*/
  name: string
  /**业绩*/
  performance: number
  /**手机号*/
  phone: string
  /**性别*/
  sex: string
  /**职称级别*/
  titleList: CustomerPersonTitleInfoResp[]
}
export interface CustomerPersonInfoResp {
  /**区*/
  area: string
  /**不良行为*/
  badBehavior: number
  /**黑名单记录*/
  blacklistRecords: number
  /**职业资格证*/
  certificate: string
  /**四库证书数量*/
  certificateNum: number
  /**市*/
  city: string
  /**学历*/
  education: string
  /**良好行为*/
  goodBehavior: number
  /**主键*/
  id: number
  /**标签*/
  label: string
  /**姓名*/
  name: string
  /**业绩*/
  performance: number
  /**手机号*/
  phone: string
  /**省*/
  province: string
  /**职称*/
  title: string
}
export interface CustomerPersonTitleInfoResp {
  /** 客户 Id*/
  customerId: number
  /**主键 Id*/
  id: number
  /**级别*/
  level: string
  /**专业*/
  major: string
}
export interface CustomerPersonTitleReq {
  /** 客户 Id，新增客户时不用传*/
  customerId: number
  /**级别*/
  level: string
  /**专业*/
  major: string
}
export interface CustomerPersonUpReq {
  /**地址*/
  address: string
  /**区县*/
  area: string
  /**市*/
  city: string
  /**坐标*/
  coordinate: string
  /**国家*/
  country: string
  /**学历*/
  education: string
  /**姓名*/
  email: string
  /**主键 Id*/
  id: number
  /**标签*/
  labels: CustomerLabelReq[]
  /**住址*/
  location: string
  /**姓名*/
  name: string
  /**手机号*/
  phone: string
  /**省份*/
  province: string
  /**性别*/
  sex: string
}
export interface DelReq {
  /**删除id*/
  id: number
}
export interface EmployeeListResp {
  /**员工id*/
  id: number
  /**名称*/
  name: string
}
export interface EnterpriseResp {
  addr: string
  categoryName: string
  corporateName: string
  enterpriseCode: string
  enterpriseId: number
  enterpriseName: string
  enterpriseStatus: string
  establishmentTime: string
  phone: string
  regPersonCnt: number
  registeredCapital: number
  score: number
  skAchievementCnt: number
  skQualificationCnt: number
  thirdId: number
}
export interface FailData {
  /**excel行数*/
  excelNum: number
  /**第一列名称*/
  firstName: string
  /**失败原因*/
  reason: string
}
export interface FollowAgainReq {
  /**商机id*/
  businessId: number
  /**商机类型  enterprise project person*/
  businessType: string
}
export interface FollowReq {
  /**地址*/
  addr: string
  /**商机id*/
  businessId: number
  /**商机类型  enterprise project person*/
  businessType: string
  /**沟通内容*/
  content: string
  /**坐标,经度-纬度*/
  coordinate: string[]
  /**图片文件id列表*/
  fileIdList: number[]
  /**跟进结果*/
  followResult: string
  /**跟进方式*/
  followType: string
  /**接收人id*/
  receiverId: number
}
export interface PageCustomerEnterpriseReq {
  /**企业查询：企业名称/法人/信用代码*/
  enterprise: string
  /**标签*/
  labelList: string[]
  /**是否是我的:true 是，false 否*/
  own: boolean
  page: number
  /**四库业绩：0正序，1倒序*/
  performance: number
  /**四库资质：0正序，1倒序*/
  qualifications: number
  /**注册资本结束*/
  registeredCapitalEnd: number
  /**注册资本开始*/
  registeredCapitalStart: number
  /**注册人员：0正序，1倒序*/
  registeredMember: number
  /**成立时间结束*/
  registeredTimeEnd: string
  /**成立时间开始*/
  registeredTimeStart: string
  /**评分：0正序，1倒序*/
  score: number
  /**签约/未签约：0未签约，1已签约*/
  sign: number
  size: number
  /**企业状态*/
  status: string
}
export interface PageCustomerPersonReq {
  /**不良行为：0正序，1倒序*/
  badBehavior: number
  /**黑名单记录：0正序，1倒序*/
  blacklistRecords: number
  /**职业资格证*/
  certificate: string
  /**四库证书数量，0正序，1倒序*/
  certificateNum: number
  /**良好行为：0正序，1倒序*/
  goodBehavior: number
  /**标签*/
  labelList: string[]
  /**职称*/
  level: string
  /**职称专业*/
  major: string
  /**是否是我的:true 是，false 否*/
  own: boolean
  page: number
  /**业绩：0正序，1倒序*/
  performance: number
  /**人才查询*/
  person: string
  size: number
}
export interface PageEnterpriseBusinessPoolResp {
  /**地址*/
  addr: string
  /**商机状态 */
  businessStatus: string
  /**坐标*/
  coordinate: string[]
  /**创建时间*/
  created: number
  /**企业名称*/
  enterpriseName: string
  /**企业状态  存续   吊销*/
  enterpriseStatus: string
  /**成立时间*/
  establishmentTime: string
  /**跟进人id*/
  followId: number
  id: number
  /**是否阅读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: number
  /**电话*/
  phone: string
  /**注册人员数*/
  regPersonCnt: number
  /**注册资本(单位元)*/
  registeredCapital: number
  /**评分*/
  score: number
  /**四库业绩数*/
  skAchievementCnt: number
  /**四库资质数*/
  skQualificationCnt: number
  /**来源  雷达 公海 高级搜索 小程序历史数据*/
  source: string
  tenantId: number
}
export interface PagePersonBusinessPoolResp {
  /**个人业绩*/
  achievementCnt: number
  /**地址*/
  addr: string
  /**不良行为数*/
  badBehaviorCnt: number
  /**黑名单数*/
  blacklistRecordCnt: number
  /**商机状态 */
  businessStatus: string
  /**执业资格证*/
  certificateName: string
  /**坐标*/
  coordinate: string[]
  /**最近获取时间*/
  created: number
  /**学历*/
  education: string
  /**跟进人id*/
  followId: number
  /**性别 男 女*/
  gender: string
  /**良好行为数*/
  goodBehaviorCnt: number
  id: number
  /**是否阅读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: number
  /**客户id*/
  licenseId: number
  /**人才名称*/
  personName: string
  /**电话*/
  phone: string
  /**四库证书数*/
  skCertificateCnt: number
  /**来源  雷达 公海 高级搜索 小程序历史数据*/
  source: string
  tenantId: number
  /**职称*/
  title: string
}
export interface PageProjectBusinessPoolResp {
  /**招标单位地址*/
  biddingCorpAddr: string
  /**招标单位名称*/
  biddingCorpName: string
  /**招标单位电话*/
  biddingCorpPhone: string
  /**投标时间*/
  biddingTime: number
  /**招标类型 all:全部,public:公开招标,invite:邀请招标),inquiry:询价,single:单一来源,negotiation:竞争性谈判,consultation :竞争性磋商,bidding：竞价*/
  biddingType: string
  /**商机状态 */
  businessStatus: string
  /**坐标*/
  coordinate: string[]
  /**创建时间*/
  created: number
  /**文件下载时间*/
  fileDownloadTime: number
  /**跟进人id*/
  followId: number
  id: number
  /**是否阅读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: number
  /**电话*/
  phone: string
  /**项目名称*/
  projectName: string
  /**项目类型*/
  projectType: string
  /**来源  雷达 公海 高级搜索 小程序历史数据*/
  source: string
  tenantId: number
}
export interface PersonResp {
  achievementCnt: number
  addr: string
  badBehaviorCnt: number
  blacklistRecordCnt: number
  certificateName: string
  education: string
  gender: string
  goodBehaviorCnt: number
  personId: number
  personName: string
  phone: string
  skCertificateCnt: number
  thirdId: number
}
export interface ProjectResp {
  agencies: string
  agenciesAddr: string
  agenciesPhone: string
  biddingCorpAddr: string
  biddingCorpName: string
  biddingCorpPhone: string
  biddingTime: string
  biddingType: string
  fileDownloadTime: string
  industryType: number
  phone: string
  projectBudget: number
  projectId: number
  projectName: string
  projectNum: string
  projectType: string
  thirdId: number
}
export interface ReceiveBusinessReq {
  /**商机类型 enterprise project person*/
  businessType: string
  /**三方id列表*/
  ids: number[]
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
  /**商机类型  ENTERPRISE  PERSON  PROJECT*/
  businessType: string
  /**代码*/
  code: string
  /**名称*/
  name: string
}
export interface ShangChuanWenJianFanHui {
  /**生成的文件访问链接*/
  fileUrl: string
  /**上传文件id*/
  id: number
}
export interface BuZaiGenJin {
  /**商机id*/
  businessId: number
  /**商机类型 ENTERPRISE:企业商机 PERSON:人才商机 PROJECT:项目商机*/
  businessType: string
  /**跟进方式,BACK:放回,INVALID:无效*/
  flowType: string
  /**不再跟进理由*/
  noFollowReason: string
}
export interface GuanLianShangJi Request {
  /**商机ID*/
  businessId: number
  /**商机类型  enterprise project person*/
  businessType: string
  /**三方信息ID*/
  thirdId: number
}
export interface GuanLianShangJi Response {
}
export interface FenYeChaXunRenCaiShangJiGongHai {
  /**商机状态*/
  businessStatus: string
  /**执业资格证*/
  certificateName: string
  /**职称*/
  level: string
  /**职称专业*/
  major: string
  /**主查询*/
  name: string
  /**排序字段 字段参数名*/
  orderColumn: string
  /**排序规则 1：倒叙,2：正序*/
  orderType: number
  page: number
  size: number
  /**查询类型 1：我的商机 2：公海*/
  type: number
}
export interface FenYeChaXunQiYeShangJiGongHai {
  /**商机状态*/
  businessStatus: string
  /**成立结束时间*/
  endTime: number
  /**企业状态 */
  enterpriseStatus: string
  /**主查询*/
  name: string
  /**排序字段 字段参数名*/
  orderColumn: string
  /**排序规则 1：倒叙,2：正序*/
  orderType: number
  page: number
  /**注册资本最大值*/
  registeredCapitalMax: number
  /**注册资本最小值*/
  registeredCapitalMin: number
  size: number
  /**成立开始时间*/
  startTime: number
  /**查询类型 1：我的商机 2：公海*/
  type: number
}
export interface LieBiaoQingQiu {
  /**地址*/
  addr: string
  /**商机id*/
  businessId: number
  /**商机状态*/
  businessStatus: string
  /**商机类型*/
  businessType: string
  /**沟通内容*/
  content: string
  /**坐标,经度-纬度*/
  coordinate: string[]
  /**跟进结果*/
  followResult: string
  /**跟进时间*/
  followTime: number
  /**跟进方式 PHONE：电话,WECHAT：微信,VISIT：登门拜访,OFFLINE_MEETING：线下会谈OTHER：其他*/
  followType: string
  /**跟进人*/
  follower: string
  /**图片列表*/
  imageUrlList: string[]
}
export interface LieBiaoQingQiu0 {
  /**商机id*/
  businessId: number
  /**商机类型*/
  businessType: string
  /**跟进类型 FOLLOW:跟进 TRANSFER:转让,BACK:放回,INVALID:无效*/
  followType: string[]
  page: number
  size: number
}
export interface DaoRuLieBiaoXiangYing {
  /**失败数据*/
  failData: FailData[]
  /**失败数*/
  failNum: number
  /**文件名称*/
  fileName: string
  /**文件链接 为空则为已失效*/
  fileUrl: string
  /**导入时间*/
  importTime: number
  /**操作人*/
  operator: string
  page: number
  size: number
  /**状态 1：进行中 2：已结束  3：发生异常*/
  status: number
  /**成功数*/
  successNum: number
}
export interface DaoRuLieBiaoQingQiu {
  /**结束时间*/
  endTime: number
  page: number
  size: number
  /**开始时间*/
  startTime: number
  /**业务类型 1:企业商机 2:人才商机 3:项目商机 4:企业客户 5:个人客户*/
  taskType: number
}
export interface SouSuoRenCaiShangJi request {
  page: number
  /**人才联系方式*/
  personMobile: string
  /**人才名称*/
  personName: string
  size: number
}
export interface SouSuoRenCaiKeHu request {
  /**人才名称*/
  personName: string
}
export interface SouSuoRenCaiKeHu response {
  /**人才ID*/
  id: number
  /**人才名称*/
  personName: string
}
export interface SouSuoQiYeShangJi request {
  /**企业信用代码*/
  enterpriseCode: string
  /**企业名称*/
  enterpriseName: string
  page: number
  size: number
}
export interface SouSuoQiYeKeHu response {
  /**企业名称*/
  enterpriseName: string
  /**主键 ID*/
  id: number
}
export interface SouSuoGuanLianRenCaiShangJi response {
  /**个人业绩*/
  achievementCnt: number
  /**地址*/
  addr: string
  /**不良行为数*/
  badBehaviorCnt: number
  /**黑名单数*/
  blacklistRecordCnt: number
  /**执业资格证*/
  certificateName: string
  /**客户id*/
  customerId: number
  /**学历*/
  education: string
  /**性别 男 女*/
  gender: string
  /**良好行为数*/
  goodBehaviorCnt: number
  /**工商信息id*/
  licenseId: number
  /**人才ID*/
  personId: number
  /**人才名称*/
  personName: string
  /**手机号*/
  phone: string
  /**四库证书数*/
  skCertificateCnt: number
  /**资质*/
  title: string
}
export interface SouSuoGuanLianQiYeShangJi response {
  /**地址*/
  addr: string
  /**企业信用代码*/
  enterpriseCode: string
  /**企业ID*/
  enterpriseId: number
  /**企业名称*/
  enterpriseName: string
  /**企业状态*/
  enterpriseStatus: string
  /**企业客户三方ID*/
  enterpriseThirdId: number
  /**成立时间*/
  establishmentTime: string
  /**注册人员数*/
  regPersonCnt: number
  /**注册资本*/
  registeredCapital: string
  /**评分*/
  score: number
  /**四库业绩数*/
  skAchievementCnt: number
  /**四库资质数*/
  skQualificationCnt: number
  /**电话*/
  tell: string
}
export interface SouSuoGuanLianXiangMuShangJi response {
  /**代理机构*/
  agencies: string
  /**代理机构地址*/
  agenciesAddr: string
  /**代理机构电话*/
  agenciesPhone: string
  /**招标单位地址*/
  biddingCorpAddr: string
  /**招标单位名称*/
  biddingCorpName: string
  /**招标单位电话*/
  biddingCorpPhone: string
  /**投标时间*/
  biddingTime: string
  /**商机状态   跟进中  已成交  无效*/
  businessStatus: string
  /**坐标*/
  coordinate: string
  /**客户id*/
  customerId: number
  /**文件下载时间*/
  fileDownloadTime: string
  /**跟进人*/
  followerId: number
  /**是否阅读 0未读 1已读*/
  isRead: number
  /**最近跟进时间*/
  lastFollowTime: string
  /**工商信息id*/
  licenseId: number
  /**联系方式*/
  phone: string
  /**招标预算(元)*/
  projectBudget: number
  /**项目ID*/
  projectId: number
  /**项目名称*/
  projectName: string
  /**项目编码*/
  projectNum: string
  /**项目类型*/
  projectType: string
  /**来源  雷达 公海 高级搜索 小程序历史数据*/
  source: string
  /**原网页url*/
  webPageUrl: string
}
export interface SouSuoXiangMuShangJi request {
  page: number
  /**项目名称*/
  projectName: string
  size: number
}
export interface CaoZuoRiZhiFenYe request {
  /**业务ID*/
  bizId: number
  page: number
  size: number
}
export interface CaoZuoRiZhiFenYe response {
  /**操作内容*/
  content: string
  /**日志ID*/
  logId: number
  /**操作时间*/
  operateTime: string
  /**操作类型*/
  operateType: string
  /**操作人*/
  operator: string
}
export interface TianJiaLianXiRenQingQiu {
  /**联系人姓名*/
  name: string
  /**关联业务id*/
  relId: number
  /**联系人关联类型 1:企业商机 2:人才商机 3:项目商机 4:企业客户 5:个人客户*/
  relType: number
  /**备注*/
  remark: string
  /**联系方式 1：电话 2：邮箱 3：微信*/
  type: number
  /**联系号码*/
  value: string
}
export interface QianYueRequest {
  /**商机ID*/
  businessId: number
  /**商机类型*/
  businessType: string
  /**客户ID*/
  customerId: number
  /**客户类型*/
  customerType: string
  /**签约类型*/
  signType: string
}
export interface QianYueJiLuFenYe request {
  /**商机ID*/
  businessId: number
  page: number
  size: number
}
export interface QianYueJiLuFenYe response {
  /**商机ID*/
  businessId: number
  /**商机类型*/
  businessType: string
  /**成交内容*/
  content: string
  /**客户ID*/
  customerId: number
  /**客户类型*/
  customerType: string
  /**成交时间*/
  dealTime: string
  /**成交方式*/
  dealType: string
  /**负责人*/
  handler: string
  /**负责人*/
  handlerId: number
  /**签约记录ID*/
  id: number
  /**进度*/
  schedule: string
  /**签约类型*/
  signingType: string
  /**三方ID*/
  thirdId: number
}
export interface LianXiRenLieBiao {
  /**添加日期*/
  addDate: string
  /**添加人*/
  addName: string
  /**联系人id*/
  id: number
  /**联系人姓名*/
  name: string
  /**备注*/
  remark: string
  /**联系方式 1：电话 2：邮箱 3：微信*/
  type: number
  /**联系号码*/
  value: string
}
export interface LianXiRenLieBiaoQingQiu {
  /**联系人名称*/
  name: string
  page: number
  /**关联业务id*/
  relId: number
  /**联系人关联类型 1:企业商机 2:人才商机 3:项目商机 4:企业客户 5:个人客户*/
  relType: number
  size: number
}
export interface JieChuQianYue request {
  /**商机ID*/
  businessId: number
  /**商机类型*/
  businessType: string
}
export interface DuRuWenJianXiangYing {
  /**文件链接*/
  fileUrl: string
  /**id*/
  id: number
}
export interface ZhuanRangQingQiu {
  /**商机id*/
  businessId: number[]
  /**商机类型*/
  businessType: string
  /**转让跟进者id*/
  followerId: number
}
export interface XiangMuShangJiGongHaiChaXun {
  /**招标类型*/
  bidingType: string
  /**商机状态*/
  businessStatus: string
  /**主查询*/
  name: string
  /**排序字段 字段参数名*/
  orderColumn: string
  /**排序规则 1：倒叙,2：正序*/
  orderType: number
  page: number
  size: number
  /**查询类型 1：我的商机 2：公海*/
  type: number
}
